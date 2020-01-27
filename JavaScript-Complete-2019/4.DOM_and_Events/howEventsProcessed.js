/*
	An event an ONLY be handle as soon as the Execution Stack is empty. 

	Which means, all of functions have returned
*/

/*
	All the happened events are put into the Message Queue, and processed in order
*/

/*
	When an event is handled, 

	the handle function get its own execution context, and is put on the top of Execution Stack
*/