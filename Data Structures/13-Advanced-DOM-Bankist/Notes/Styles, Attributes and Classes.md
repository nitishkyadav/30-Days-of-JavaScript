### 1. Styles

a. In JS, we can access _styles_ associated with elements by using _.style.styleName_.

    Example:

        <div class='box' style="width:100px">

        Now we can access the style associated with div using .style after selecting the elements

        document.querySelector('.box').style.width;

    We can change values also using this way.

b. We can access all the styles associated with HTML element using getComputedStyle(elementName) and to access individual style/properties associated with elements we can further use _.propertyName_.

    Example:

        const box=document.querySelector('.box');
        console.log(getComputedStyles());
        console.log(getComputedStyles().width);

c. We can access CSS variables defined under _#root{} in CSS file_ using .getPropertyValue().

    Example:

        const width=document.querySelector('.box').style.getPropertyValue('width');
        console.log(width);

d. We can change the propertyValues of elements using .style.setProperty( _ , _ )

    Example:

        document.querySelector('.box').style.setProperty('width','100%');

### 2. Attributes

In JS, we can get attributes using 2 ways

    i. Using element.attributeName
    ii. Using element.getAttribute(attributeName)

    *Refer Line 61 to 81 From Advanced DOM's script.js file*

In JS, we can set attributes in 2 ways

    i. Using element.attributeName="value";
    ii. Using element.setAttribute(attributeName, value)

    *Refer Line 61 to 81 From Advanced DOM's script.js file*

_Note:_ When we fetch src and href attributes using .attributeName, then we get absolute address based upon the environment on which it's live but for .getAttribute(attributeName), we get relative links like img/xyz.png

In JS, there are special type of attributes called _data Attributes_ . They start with _data_ and then _-_. They are used in frontend to store data within the HTML Document.
In JS, we access dataAttributes using dataSet.attributeName. Here attributeName must be written in camelCase just like CSS styles.

    Example:

        HTML:

            <div class='box' style="width:100px" data-version:"2.0" >

        JS Code to access it:

            const box=document.querySelector('.box');
            console.log(box.dataSet.dataVersion);

### 3. Classes

In JS, we prefer classList.add() and classList.remove() methods to add or remove classes from a particular element
