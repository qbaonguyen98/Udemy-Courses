// Function returns functions

function interviewQuestion(job) {
    switch (job) {
        case 'designer':
            return function(name) {
                console.log(name + ', what UX is?');
            }
        case 'developer':
            return function(name) {
                console.log(name + ', how AJAX works?');
            }
    }
}

var designerQuestion = interviewQuestion('designer');
designerQuestion('Lyly');
// -- simpler way --
interviewQuestion('developer')('Reus');