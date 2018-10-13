## Intro

In this quick lesson we'll go over how to capture user input.

The "problem" with getting user input in React is that we want our `state` to be our **single source of truth** - that is, any information about or generated in a component should be kept in its state.

However, DOM elements such as `input`, `text-area`, and `select` have their own form of "state" where they keep the current value of their input inside the element (remember `event.target.value`?)

To make sure that we only work with `state`, we will bind the value of the element to `state`, as well as update the `state` each time the value of the element changes.

This is called **two-way binding**, and we'll see it in code in a second.

For this lesson, you must have a good understanding of:

*   Components
*   State
*   The `setState` method

## Two Way Binding

We'll start off simple. Say we have this setup (you can use [this codepen](https://codepen.io/ElevationPen/pen/OoQemQ?editors=1010) to code along), and we want to alert the text in the input when the button is clicked:

```javascript
  render() {
    return (
      <div>
        <input type="text" />
        <button>Alert</button>
      </div>
    )
  }
```

You might be having a flashback to the jQuery days where we would have to traverse the DOM from the button that was clicked to the relevant input - but no worries, we have a more straightforward way with React.

We're going to need to do three things for this to work:

1.  Add a `state`, and in it define some property for our text value
2.  Add a `value` attribute to the `input` tag, and assign it to the `state`'s value

*   Now the value of the `input` will be **bound** to the value of the `state`

4.  Add an `onChange` listener to the `input` that updates the `state`

*   Now the value of the `state` will be **bound** to the value of the `input`

Check it out:

```javascript
  constructor() {
    super();
    this.state = {
      testText: ""
    }
  }
```

```javascript
<input type="text" value={this.state.testText} />
```
  
Now we can say that the `input` is **bound** to the `state` -i.e, whatever the value of `testText` is in the `state` will be reflected in the `input` (but not the other way around)

**Spot check:** to test out what it means for an element to be bound to the `state`, add another button that - when clicked - changes the value of `testText` ( in the `state` ) to "Something else" - make sure to use `setState`!

**New button**:

```javascript
<button onClick={this.changeText}>Change</button>
````

**The method**:
```javascript
  changeText = () => { //don't forget arrow syntax for correct `this` binding
    this.setState({
      testText: "Something else"
    })
  }
```

Now, when that button is clicked, the value inside of the `input` changes as well! That's one-way binding: from `state` to `input`.

Now we need to add the `onChange` that will do the reverse - make the value of `testText` in the `state` be whatever the user types:

**Adding the onChange listener:**

```javascript
<input type="text" value={this.state.testText} onChange={this.updateTestText}/>
```

**The method:**
```javascript
  updateTestText = (event) => {
    this.setState({
      testText: event.target.value
    })
  }
```

Notice that we're using the plain, vanilla-JS `event` - recall that `onChange` fires an event each time the `input` changes. We can capture that event\* in whichever function we invoke once the change occurs.

###### \*As with all parameter names, the name does not have to be event - it can be whatever we want

And now we can say that our `state` is **bound** to our `input` - whenever the latter changes, the former is automatically updated.

Now, because our `state` updates when the `input` changes, and the value of `input` is bound to the `state`, we have **two-way binding**.

Add an `onClick` to your **Alert** button that alerts the value of `this.state.testText` to see this in action.  
Try this out on your own, but if you woke up on the wrong side of the bed this morning, here's a solve:

**The button:**
```javascript
<button onClick={this.alertText}>Alert</button>
```

**The method:**
```javascript
alertText = () => alert(this.state.testText)
```

Now you will always have access to whatever the user inputs through `state` - nice.

**Spot check:** Add a an `input type="checkbox"` and capture its value the React way. Remember that we don't use the `value` attribute but rather the `checked` attribute for checkboxes.  
[This resource](https://www.w3schools.com/jsref/prop_checkbox_checked.asp) might help.  
Console log the boolean to make sure you got it.

**The state:**
```javascript
this.state = {
  testText: "",
  hasUnderstood: false
}
```

**The input:**
```javascript
<input type="checkbox" checked={this.state.hasUnderstood} onChange={this.updateCheckbox}/>
```

**The method:**
```javascript
updateCheckbox = (event) => {
    this.setState({
      hasUnderstood: event.target.checked
    })
  }
```

### Catch-all Handler

You now understand the basics of handling input in React. And honestly, there's not much more to it.

The only "issue" might arise when you have multiple inputs, and you need multiple methods to manage the state changes.

There's nothing inherently wrong with having a method for each input element - you may very well want to do different things for each input.

**That said**, it is silly to have several methods that do exactly the same thing: update one property of `state`

To that end, **take a look at [Handling Multiple Inputs](https://reactjs.org/docs/forms.html#handling-multiple-inputs) section** of React's Form docs.

They show a clever use of **ES6**'s [computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names) syntax in conjunction with the `name` attribute.

The only thing the doc's do differently, you'll notice, is their use of `bind` in the constructor. We use the arrow-function syntax for binding, but they both serve the same purpose.

Otherwise, you should be able to figure it out on your own =]