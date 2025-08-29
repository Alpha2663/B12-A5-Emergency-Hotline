1----- getElementById - single element by ID.

       getElementsByClassName - live collection by class.

       querySelector - first match, querySelectorAll → static list using CSS selectors.

2-----Use document.createElement(), set content/attributes, then insert with appendChild(), append(), prepend(), or insertBefore().


3-----Events start at the target element and bubble up through its ancestors.


4------Attach one listener to a parent and handle events from its child elements using event.target.


5------preventDefault() - stops the browser’s default action.

       stopPropagation() - stops the event from bubbling to parent elements.