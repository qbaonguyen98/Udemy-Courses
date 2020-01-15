// -------------------------------------- BUDGET CONTROLLER --------------------------------------
var budgetController = (function() {
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals :{
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(current, index, array) {
            sum += current.value;
        });
        data.totals[type] = sum;
    };

    return {
        addItem: function(type, des, val) {
            var newItem, id;

            // create new id
            if (data.allItems[type].length > 0) {
                id = data.allItems[type][data.allItems[type].length - 1].id + 1;                
            } else {
                id = 0;
            }
            // create new item
            if (type === 'exp') {
                newItem = new Expense(id, des, val);
            } else if (type === 'inc') {
                newItem = new Income(id, des, val);
            }

            // push new item into our data
            data.allItems[type].push(newItem);

            // return new item for other purposes
            return newItem;
        },
        deleteItem: function(type, id) {
            // we need to find the index of item with the specified id in data.allItems[type] array --> then use .splice to delete it
            var ids, index;

            // 1. use .map() to return an array with the same order, but the value of elements is the index of them
            ids = data.allItems[type].map(function(current) {
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },
        calculateBudget: function() {
            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            // calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }
        },
        calculatePercentages: function() {
            data.allItems.exp.forEach(function(current) {
                current.calcPercentage(data.totals.inc);
            });
        },
        getPercentages: function() {
            return data.allItems.exp.map(function(current) {
                return current.getPercentage();
            });
        },     
        getBudget: function() {
            return {
                totalIncome: data.totals.inc,
                totalExpenses: data.totals.exp,
                budget: data.budget,
                percentage: data.percentage
            };
        },
        testing: function() {
            return data;
        }
    };
})();

// -------------------------------------- UI CONTROLLER --------------------------------------
var UIController = (function() {
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        expensesList: '.expenses__list',
        incomeList: '.income__list',
        budget: '.budget__value',
        income: '.budget__income--value',
        expenses: '.budget__expenses--value',
        percentage: '.budget__expenses--percentage',
        container: '.container',
        itemPercentage: '.item__percentage'
    };
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,  // inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },
        getDOMStrings: function() {
            return DOMStrings;
        },
        addListItems: function(objItem, type) {
            var html, newHtml, listElement;

            // create HTML string with placeholder text
            if (type === 'inc'){
                listElement = document.querySelector(DOMStrings.incomeList);
                html = '<div class="item clearfix" id="inc-%id%">\
                            <div class="item__description">%description%</div>\
                            <div class="right clearfix">\
                                <div class="item__value">%value%</div>\
                                <div class="item__delete">\
                                    <button class="item__delete--btn">\
                                        <i class="ion-ios-close-outline"></i>\
                                    </button>\
                                </div>\
                            </div>\
                        </div>';
            } else if (type === 'exp') {
                listElement = document.querySelector(DOMStrings.expensesList);
                html =  '<div class="item clearfix" id="exp-%id%">\
                            <div class="item__description">%description%</div>\
                            <div class="right clearfix">\
                                <div class="item__value">%value%</div>\
                                <div class="item__percentage">21%</div>\
                                <div class="item__delete">\
                                    <button class="item__delete--btn">\
                                        <i class="ion-ios-close-outline"></i>\
                                    </button>\
                                </div>\
                            </div>\
                        </div>'
            }

            // replace the placeholder text with some actual data
            newHtml = html.replace('%id%', objItem.id);
            newHtml = newHtml.replace('%description%', objItem.description);
            newHtml = newHtml.replace('%value%', objItem.value);

            // insert the HTML into the DOM
            listElement.insertAdjacentHTML('beforeend', newHtml);
        },
        deleteListItem: function(eleId) {
            var ele = document.getElementById(eleId);
            ele.parentNode.removeChild(ele);
        },
        clearFields: function() {
            var fields, fieldsArr;
            
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);
            // fields is a HTML NodeList --> need to convert it to JS array
            fieldsArr = Array.from(fields);
            fieldsArr.forEach(function(current, index, array) {
                current.value = '';
            });
            fieldsArr[0].focus();   // to focus on the description input field
        },
        displayBudget: function(objBudget) {
            document.querySelector(DOMStrings.budget).textContent = objBudget.budget;
            document.querySelector(DOMStrings.income).textContent = objBudget.totalIncome;
            document.querySelector(DOMStrings.expenses).textContent = objBudget.totalExpenses;
            if (objBudget.percentage > 0) {
                document.querySelector(DOMStrings.percentage).textContent = objBudget.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentage).textContent = '---';
            }
        },
        displayPercentages: function(percentages) {
            var fields = document.querySelectorAll(DOMStrings.itemPercentage);
            
            fields.forEach(function(current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
        }
    };
})();

// -------------------------------------- GLOBAL CONTROLLER --------------------------------------
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(e) {
            // console.log(e);      // uncomment this to see the 'target' property of Event object

            if (e.keyCode === 13)   ctrlAddItem();
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);    // for event delegation
    };

    var updateBudget = function() {
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();

        // 2. Get the budget
        var budget = budgetCtrl.getBudget();

        // 3. Update the budget on UI
        UICtrl.displayBudget(budget);
    };

    var updatePercentages = function() {
        // 1. Calculate percentages
        budgetCtrl.calculatePercentages();

        // 2. Read percentages
        var percentages =  budgetCtrl.getPercentages();

        // 3. Update the UI with percentages
        UIController.displayPercentages(percentages);
    };

    var ctrlAddItem = function() {

        // 1. Get the input field data
        var input = UICtrl.getInput();
        
        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item to budget controller
            var newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            UICtrl.addListItems(newItem, input.type);

            // 4. Clear the input fields
            UICtrl.clearFields();

            // 5. Calculate and update the budget UI
            updateBudget();

            // 6. Update percentages
            updatePercentages();
        }
    };

    var ctrlDeleteItem = function(e) {
        var itemId, splitId, type, id;

        itemId = e.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemId) {
            splitId = itemId.split('-');
            type = splitId[0];
            id = parseInt(splitId[1]);

            // 1. Delete the item from data
            budgetCtrl.deleteItem(type, id);

            // 2. Delete item from UI
            UICtrl.deleteListItem(itemId);

            // 3. Update the budget and update budget UI 
            updateBudget();

            // 4. Update percentages
            updatePercentages();
        }
    };

    return {
        init: function() {
            console.log('app started');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();