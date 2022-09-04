## 1. Selecting Elements From DOM

1.  To select elements from DOM we use

    a. document.querySelector()

        Using .querySelector(), we can select classes, HTML elements and IDs.

    b. document.querySelectorAll()

        It's used to select elements having same class or HTML Element Tag.
        It returns elements as a NodeList which is kind of similar to Array, but doesn't have access to array methods except for for-each loop.

    c. document.selectElementByID()

        Used to Select elements by their IDs.

    d. document.selectElementByTagName()

        It's used to select elements by Tag Names.
        Returns the elements in Data Structure called HTMLCollection. It's dynamic Data Structure which gets updated automatically.

### 2. Creating and Inserting Elements in DOM

    a. To create new HTML Elements , we use ###document.createElement("tagName")###
        Here tagName specifies the type of element

        ## Example:

            const message=document.createElement('div');
            message.classList.add('cookie-message);
            message.innerHTML="We use cookies for improved functionality. <button class="btn btn-close_cookie>Got it!</button>";

    b. To Add Element wrt to already Existing Element we use, .prepend(elementName) and .append(elementName).

    i. .prepend() adds element as first child to the element on which it was called.

        Example:

            header.prepend(message);

        It will add message as first child to header Element

    ii. .append() adds element as last child to the element on which it was called.

        Example:

            header.append(message);

        It will add message as last child to header Element

### 3. Deleting an element from DOM

    To remove an element from DOM, we use .remove() method

        Example 1:

            message.remove();

        Example 2:

            document. querySelector('.btn-close_cookie').addEventListener('click', function(){
                message.remove();
            })

        This code will remove the element from DOM when we will click on particular button.
