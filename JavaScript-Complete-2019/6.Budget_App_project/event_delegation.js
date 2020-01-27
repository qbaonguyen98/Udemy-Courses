// Event Delegation --> Before reading this, you should understand Event Bubbling and Target Element

/*
    Because of the Event Bubbling:

    If we know where an event is fired --> We can attach some event handlers to the parent elements

    => EVENT DELEGATION means: We don't add event handler to the target element. Instead, we add it to the parent element, and catch the event there
*/

/*  When use Event Delegation ???

    1. When an element has a lot of child elements that we are interested in

        --> Add the event handler to the parent element, and then determine on which child the event is fired

    2. When we want to add an event handler to an element that has not existed in the DOM when the page is loaded
*/