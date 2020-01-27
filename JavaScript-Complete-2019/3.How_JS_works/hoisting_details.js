try{
	calAge(1998);					// where is calAge ?

	function calAge(year) {
		console.log(2019 - year)
	}

	console.log('\nThis is OK, because hoisting will work with function declaration')
} 
catch {
	console.log('Oops! Something was wrong')
}

try {

	retirement(1956);				// where is retirement ?

	var retirement = function(year) {
		console.log(65 - (2016-year));
	}
}
catch {
	console.log('\nThis is wrong, because hoisting does NOT work with function expression !!!')
}

foo();	// thanks to hoisting

function foo() {
	console.log(a);		// where is a ?

	var a = 99;
}
// the function foo has its own execution context,
// and hoisting will work in that execution context