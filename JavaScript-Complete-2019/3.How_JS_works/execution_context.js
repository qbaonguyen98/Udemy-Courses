/*
	Execution context is a box, or a container which stores code

	In which, our code is evaluated and executed
*/
/*
	There is always a default execution context, called 'Global Execution Context'

	It stores every code that are not inside any function
*/
/*
	The 'Global Execution Context' is associated with a global object:
		- In browsers: it is the window object
		- In nodejs: it is ...

	So:
			var lastName === window.lastName
*/

//--------- But what is about the code inside functions ??? ----------

/*
	Each time we call a function, it gets a new execution context

	The new execution context is put on top of the current context => create the Execution Stack

	When the function returns (it finishes its job): 

		=> the execution context is popped off the stack
*/