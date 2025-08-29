1--What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
(Ans): getElementById - single element by ID.
          getElementsByClassName - live collection by 
          querySelector - first match, 
          querySelectorAll - static list using CSS selectors.

2--How do you create and insert a new element into the DOM?
(Ans): Use document.createElement(), set content/attributes, then insert with appendChild(),   append(), prepend(), or insertBefore().


3--What is Event Bubbling and how does it work? What is Event Bubbling and how does it work?
(Ans): Events start at the target element and bubble up through its ancestors.


4--What is Event Delegation in JavaScript? Why is it useful?
(Ans): Attach one listener to a parent and handle events from its child elements using event.target.


5--What is the difference between preventDefault() and stopPropagation() methods?
(Ans): preventDefault() - stops the browser’s default action.
           stopPropagation() - stops the event from bubbling to parent elements.
