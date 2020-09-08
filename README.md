---
# ReactJS-course (v16.13)
---

# **Create React APP**

---

## Way 1

> Documentation [Github Official Documentation](https://github.com/facebook/create-react-app)

### Step 1

Create a app using the following command

```cmd
~$ npx create-react-app hello-world
```

> if The app deletes the project file immediately after the creating the app. Then try the below command out.

```cmd
~$ npm install -g create-react-app@latest   [if required]
```

### Step 2

Navigate terminal to the folder just created

```cmd
~$ cd hello-world
```

### Step 3

Start the npm

```cmd
~4 npm start
``
```

---

## Way 2

Globally

```cmd
npm install create-react-app -g
```

Create app

```cmd
~$ create-react-app <ProjectName>
```

---

### Way 1 is better and easier to handle

---

# **Folder Structure**

---

## `public` Folder

`node_modules/public/index.html` this file is very important

> In this file `<div id="root"></div>` is responsibe for UI of our app. React will handle this part of its own. We should not modify this `div`

## `src` Folder

This folder is using most during development

> `index.js` specify the root components which is app component and dom element which will be controll by react.

> `document.getElementById("root")`. Here `root` id is the id inside `public/index.html` which is `<div id="root"></div>`

> App componets represents view which we see in the browser.

> `App.css` for styling

> `App.test.js` file for unit test. Contains test cases.

> `index.css` which applied styles in body tag

> `logo.svg` reference in app component

> `serviceWorker.js` concern with progressive web app. For beginner this file is ignored.

---

# **Components**

---

> Part of the UI

> Reusable and can be nested inside other components

![](MARKDOWN_NOTES/1.png)

> Component codes write in `js` file. For example, `App` component has `App.js` file.

> Components have extension like `js` or `jsx` but in this tutorial I am focussing in just `.js`

## Component Types

2 Types

- Stateless Functional Component
- Statefull Class Component

![](MARKDOWN_NOTES/2.png)

---

# **Functional Components**

---

![](MARKDOWN_NOTES/3.png)

## Now create a very first functional component

> Create a folder `src/components`

> Create a file `src/components/Greet.js`

### Step 1

create a functional component

`Greet.js`

```js
import React from "react";

/*
function Greet() {
  return <h1>Hello Imrul</h1>;
}
*/

const Greet = () => <h1>Hello Imrul</h1>; //ES6 syntax

export default Greet;
```

> `Greet` function is exported to use outside.

### Step 2

`App.js`

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyGreet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <MyGreet></MyGreet>
    </div>
  );
}
export default App;
```

> Here we import the component first using `import Greet from "./components/Greet";`

> Then we use our custom `<Greet></Greet>` tag which is pretty unique feature.

---

## Note:

> `export default Greet;` here `default` allows us to call with any name when `importing`

> in `App.js` we named it `MyGreet` as my own. But we have to specify the location of the file like `"./components/Greet";`

### Example

`Greet.js`

```js
import React from "react";
export const Greet = () => <h1>Hello Imrul</h1>;
```

`App.js`

```js
import { Greet } from "./components/Greet";
```

> Here we can we see we must import with exact same name in `Greet.js` file. We have to use `{}` to pass import it in that manner.

> We have no freedom to use our own name in other files.

> So this is the powet of using `default` when exporting.

---

# **Class Components**

---

![](MARKDOWN_NOTES/4.png)

### Step 1

```js
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Class Component</h1>;
  }
}

export default Welcome;
```

> In class component we need to specify two imports. one is `React`, other one is `{ Component }`.

> And the class should extends the `Component` class.

> Thirdly, we exported the class in `export default Welcome;` line.

### Step 2

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyGreet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <MyGreet></MyGreet>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
```

> Here we imported `import Welcome from "./components/Welcome";`

> And we heve our own `tag` which is `<Welcome></Welcome>`

---

## Advantage of Components

![](MARKDOWN_NOTES/5.png)

> So far we have learn about `App.js`, `Greet.js` and `Welcome.js`.

> We returns some html inside components. this is not regular `html`. It's known as `jsx`

---

# **Hooks Update**

---

> Documentation: [Hooks](https://reactjs.org/docs/hooks-intro.html)

![](MARKDOWN_NOTES/6.png)

![](MARKDOWN_NOTES/7.png)

---

# **JSX (JavaScript XML)**

---

![](MARKDOWN_NOTES/8.png)

**Create components with JSX and without JSX.**

## component with JSX

Create a component named `components/JSX Version.js`

`components/JSX Version.js`

```js
import React from "react";

const JSX = () => {
  return (
    <div className="JSXclass">
      <h1>JSX Version: Hello Imrul!</h1>
    </div>
  );
};

export default JSX;
```

`App.js`

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import JSX from "./components/JSX Version";

function App() {
  return (
    <div className="App">
      <JSX></JSX>
    </div>
  );
}

export default App;
```

## component without JSX

`components/Not JSX Version.js`

```js
import React from "react";

const NotJSX = () => {
  return React.createElement("div", null, "NOT JSX Version");
};

export default NotJSX;
```

> `createElement` is built in method of `React`

> `(param1, param2, param3)` minimum 3 params.

> `param1` = String: html tag to be rendered.

> `param2` = optional property: `null` for now.

> `param3` = children of html: children for the `div` here.

`App.js`

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NotJSX from "./components/Not JSX Version";

function App() {
  return (
    <div className="App">
      <NotJSX></NotJSX>
    </div>
  );
}

export default App;
```

> We use `className` instead of `class` because `class` is a reserved word in JS.

Fix the `<h1>` issues

`components/Not JSX.js`

```js
import React from "react";

const NotJSX = () => {
  return React.createElement(
    "div",
    { id: "notJSXid", class: "notJSXclass" },
    React.createElement("h1", null, "NOT JSX Version")
  );
};

export default NotJSX;
```

> Here 3rd parameter is another `createElement` method to specifiy `h1` tag.

> 2nd parameter specify an object. We pass a key `id` with value `notJSXid`

After inspecting

![](MARKDOWN_NOTES/9.png)

![](MARKDOWN_NOTES/10.png)

> Error for `class`. Because in `JavaScript` the `class` is a `reserved word`.

> Solution use `className` instead of `class` key.

```js
{ id: "notJSXid", className: "notJSXclass" },
```

> Now its allright.

![](MARKDOWN_NOTES/11.png)

> We can see although we named the key as `className` the original file use `class` not `className`. It is handle by react.

> So in the end we have seen `JSX` is simpler than `without JSX`. Without JSX code become nasty. On the other hand with `JSX` the code will become cleaner and elegant.

![](MARKDOWN_NOTES/12.png)

> To know what changes in react visit: [React Fire](https://www.youtube.com/redirect?stzid=UgznjOz4hQqekvtagrB4AaABAg&q=https%3A%2F%2Fgithub.com%2Ffacebook%2Freact%2Fissues%2F13525&event=comments&redir_token=QUFFLUhqbFAwWU1JRy1NTHpMV2Y1VmxiM05NTEZ5WWJsQXxBQ3Jtc0tucjRscEtHM1JaNXRHWDQ5R1p4LXVxcTNNaEhUemVNS1BZSlZISVcxQ0JYaHBXSEo4RGRVOF81MnI4RHd1V1RjQ1FoUkZVakJmR0pvc1NRdVZ2eXJWaFFPZFE1dS1hLURoSHRBNzY0UE9zYU8xdFdpQQ%3D%3D)

---

# **Props** with Functional Components

---

We can reuse the same `component` as many times as we want. Suppose we can use `<MyGreet></MyGreet>` anywhere we want.

> Outputs `Functional Component : Imrul`

> Sometime we need to use different name in place of `Imrul`. In that case the `props` come out to solve.

> `props`: Property -> is an optional input that your component can accept.

> Allows the components dynamic.

- Our goal is to send name to the `MyGreet` component from `App` component. And render that name in the browser.

- To specify props for a component we specify them as `attributes`.

- To specify a name property we just add `name` attribute.

- `props` is just an object

---

### Step 1

`App.js`

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyGreet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <MyGreet name="Imrul" heroName="Superman"></MyGreet>
      <MyGreet name="Towhid" heroName="Batman"></MyGreet>
      <MyGreet name="Hasan" heroName="Spiderman"></MyGreet>
    </div>
  );
}

export default App;
```

`Greet.js`

```js
import React from "react";

const Greet = (props) => {
  console.log(props);
  return (
    <h1>
      Functional Component : {props.name} : {props.heroName}
    </h1>
  );
};

export default Greet;
```

> Here `props` parameter is passed through function. This name `props` is for naming convention not researved word.

> `props.name` here `name` and `heroName` is id's defined in our custom tags in `App.js`

> And we need to `return` the context which we want to display dynamically.

Output

![](MARKDOWN_NOTE/13.png)

---

## We can pass children tag

`App.js`

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyGreet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <MyGreet name="Imrul" heroName="Superman">
        <p>This is children props</p>
      </MyGreet>
    </div>
  );
}

export default App;
```

> Here we have an children tag which is `p` tag with a paragraph.

`Greet.js`

```js
import React from "react";

const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Functional Component : {props.name} : {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
```

> Here we return also `props.children` after the `h1` tag.

> **One important Limitation:** we can return just one `html` tag. So we can nor `return` `h1` tag followed by th the `children`.

> We we wrap up all elements with a `div` tag and just return it as a single html `tag`.

> **Note:** If the children is not passed by `App.js`, the `Greet.js` component will return just `h1` tag not without `props.children`

> Children can be `p` , `button` or anything.

---

# **Props** with Class Components

---

`App.js`

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome name="Imrul" heroName="Superman">
        <p>Childrens</p>
      </Welcome>
      <Welcome name="Towhid" heroName="Batman">
        <button>Action</button>
      </Welcome>
      <Welcome name="Hasan" heroName="Spiderman"></Welcome>
    </div>
  );
}

export default App;
```

> Similar things

`Welcome.js`

```js
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>
          Class Component: {this.props.name} : {this.props.heroName}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
```

> Here we must use `this` keyword in order to use `props`.

> **Note:** Here `props` is reserved keyword and we must use exact same name. So its mandatory to use this name not convension.

> we must return just only one html `tag` that's why we wrap up our whole contents in `div` tag to return.

> `props` are **Immutable** meaning the value can't be changed. For example if we try to assign a value to `props.name=Imrul` before returning then it will shows `Type Error`. This is readonly property.

---

# **State**

---

## Props vs State

![](MARKDOWN_NOTES/14.png)

## Example of `state`

`components/message.js`

```js
import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
```

> Firstly we create a `constructor()` above. This construct extends the charecteristics of `Component` class which is parent class actually using `super()`. And a `message` is set in `state`. As it is `class based` so we use `this` keywords.

> Secondly there is another function named `changeMessage()` in which we set the `message` to different text. To execute this function we need to call this `changeMessage()` function. Whereas `constructor` doesn't need to call to be executed.

> Thirdly in render function we return the `message` calling `this.state.message` inside `h1` tag. The message inside the `constructor` is initial state.

> Fourthly, when we click the `button` there is an `EventHandler` called `onClick`. And call the `changeMessage()` function. And withinn the `changeMessage()` function we the `message` is changed using `this.setState`. This is how we change the state.

`App.js`

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./components/message";

function App() {
  return (
    <div className="App">
      <Message></Message>
    </div>
  );
}

export default App;
```

> In `App.js` everything is similar to before.

Output

### Initial State

![](MARKDOWN_NOTES/15.png)

### second State

![](MARKDOWN_NOTES/16.png)

---

# VS Code ES7 React/Redux/React-Native/JS snippets | Extension

---

### Shortcut for class component:

- type `rce`
- click on `tab` button

### Shorcut for constuctor in class component.

- type `rconst`
- click `tab`

---

# **setState** in class component

---

`App.js`

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Count from "./components/counter";

function App() {
  return (
    <div className="App">
      <Count></Count>
    </div>
  );
}

export default App;
```

`counter.js`

```js
import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increament() {
    // this.state.count = this.state.count + 1; //it should never be used
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={() => this.increament()}>Increament</button>
      </div>
    );
  }
}

export default counter;
```

> Never change state directly using `this.state.count = this.state.count + 1;`. Because it will change state in `console` but not in `UI`. React not rendering the state when it changes.

> **One Problem:**

![](MARKDOWN_NOTES/17.png)

> Here we can see the `console value` = `rendered value` - `1`. Because calls to `setState` is `asynchronous`. console is called before the change of state. So console print less than 1 value.

> Sometime we might want to execute some codes only after the state is updated. We can handle such situation with a `callback` function as the second parameter of `setState` method.

> `setState(object, callback function)`

```js
increament() {
  this.setState(
  {
    count: this.state.count + 1,
  },
  () => {
    console.log("Callback value: ", this.state.count);
    }
  );
console.log(this.state.count);
}
```

> Here we can see the first parameter is an `object`. And the 2nd parameter is a `callback` function which we want to execute right after the `setState` method.

> **TIPS: ** Whenever you want to execute some code after `setState` method, don't put the code after `setState` method. Instead you pass the codes through a `callback` function.

---

## Complex

`counter.js`

```js
import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increament() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback value: ", this.state.count);
      }
    );
    console.log(this.state.count);
  }

  increamentFive() {
    this.increament();
    this.increament();
    this.increament();
    this.increament();
    this.increament();
  }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={() => this.increament()}>Increament</button>
        <br></br>
        <button onClick={() => this.increamentFive()}>IncreamentFive</button>
      </div>
    );
  }
}

export default counter;
```

> Click on `IncreamentFIve` button

Results

![](MARKDOWN_NOTES/18.png)

> We can see when we click on `IncreamentFive` it increaments just `1` instead of `5`. And we can also see that the `asynchronous` console prints each counter value 5 times with same value.

> Why is this?

> Because `react` may group multiple setState calls into a single update for better performance so what happens in our scenario is the five set state calls are done in one signel go and updated value doesn't carry over between the different calls.

### Solution

```js
increament() {
  this.setState(
    (prevState, props) => ({
      count: prevState.count + 1,
    }),
    () => {
      console.log("Callback value: ", this.state.count);
    }
  );
  console.log(this.state.count);
}
```

Outputs

![](MARKDOWN_NOTES/19.png)

> **TIPS: ** Whenever you have to `update` the state based on the `previous state` make sure to pass a `function` as an argument instead of passing a regular `object`. Function has access to the previous state which can be used to calculate a new state. In that function first parameter is the `Prevstate` and the second parameter may be `props`. So we can also make use of `props` as well.

## Summary

![](MARKDOWN_NOTES/20.png)

---

# **Destructuring props and state**

---

`App.js`

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyGreet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <MyGreet name="Hasan" heroName="Spiderman"></MyGreet>
    </div>
  );
}

export default App;
```

## Way 1 [Destructuring with parameters]

`Greet.js`

```js
import React from "react";

const Greet = ({ name, heroName }) => {
  return (
    <div>
      <h1>
        Functional Component : {name} : {heroName}
      </h1>
    </div>
  );
};

export default Greet;
```

> Here we use `Greet = ({ name, heroName })` instead of `Greet = props`

## Way 2 [Destructuring in function body]

`Greet.js`

```js
import React from "react";

const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Functional Component : {name} : {heroName}
      </h1>
    </div>
  );
};

export default Greet;
```

## Way 3 : [Destructuring in Class Components]

`App.js`

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome name="Hasan" heroName="Spiderman"></Welcome>
    </div>
  );
}

export default App;
```

`Welcome.js`

```js
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    return (
      <div>
        <h1>
          Class Component: {name} : {heroName}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
```

> `const { state1, state2 } = this.state;` If there need some states.

---

# **Event Handling**

---

- Mouse Click, Mouse Over, Key Press, Change Event etc

two rules

- React events are named as camel case rather than lower case
- Pass a function as the event handler rather than a string.

  - Instead of `onClick="clickHandler()"` use `onClick={clickHandler}`

- In Vanilla JS its possible to define a function withing another function.

## Funcional Components

`App.js`

```js
import React from "react";
import "./App.css";
import FunctionClick from "./components/FunctionClick";

function App() {
  return (
    <div className="App">
      <FunctionClick></FunctionClick>
    </div>
  );
}

export default App;
```

`FunctionClick.js`

```js
import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
```

> Notice: We pass the function name on `onClick` without `()`

> pass function not function call.

## Class Compenents

`App.js`

```js
import React from "react";
import "./App.css";
import ClassClick from "./components/ClassClick";

function App() {
  return (
    <div className="App">
      <ClassClick></ClassClick>
    </div>
  );
}

export default App;
```

`ClassClick.js`

```js
import React, { Component } from "react";
class ClassClick extends Component {
  clickHandler() {
    console.log("Button Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
```

---

# **Binding Event Handlers**

---

Why Use it?

> because of the way this keyword works in JavaScript it is not because of how react works

## Class Components

`App.js`

```js
import React from "react";
import "./App.css";
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      <EventBind></EventBind>
    </div>
  );
}

export default App;
```

`EventBind.js`

```js
import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  clickHandler() {
    this.setState({
      message: "Goodbye",
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
```

### But there is an error!!!

> `TypeError: Cannot read property 'setState' of undefined`

> Because `this` keyword withing the event handler is `undefined`. That's why `event binding` is necessary in `react class component`

After Fixing

### Way 1 [use bind keyword and bind the handler]

`EventBind.js`

```js
<button onClick={this.clickHandler.bind(this)}>Click</button>
```

> How it works: Every update to the state will cause the component to rerender. This in turn will generate a brand new event handler on every render. Impact on performace is not severe in small applications. But it could be troublesome in large applications and components that contain nested children components.

### Way 2 [use arrow function s in the render method]

`EventHandler.js`

```js
<button onClick={() => this.clickHandler()}>Click</button>
```

### Way 3 [binding the Event Handler in Constructor] `[***]` [Official Approach]

`EventBind.js`

```js
import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "Goodbye",
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
```

### Way 4 [arrow function as a class property]

`EventBind.js`

```js
import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  clickHandler = () => {
    this.setState({
      message: "Goodbye",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
```

---

# **Methods as props**

---

> We pass a reference to a method as props to the child component.

`App.js`

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="App">
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
```

`ChildComponent.js`

```js
import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
```

> When click on the `button` then fire the `greetHandler` in `ParentComponent` and the `greetHandler` is taken using `props`

`ParentComponent.js`

```js
import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent() {
    // alert('Hello' + this.state.parentName)
    alert(`Hello ${this.state.parentName}`); //ES6 syntax
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
```

> `this.greetParent = this.greetParent.bind(this);` is need to bind in `constructor`

---

## pass parameter when calling the parent method from the child component.

- Array function syntax is the simplest way to pass parameters from the child compoent to the parent component.

`ChildComponent.js`

```js
import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
```

> react Snippet: **rfce** -> **tab**

> pass a string `child` to the parent `greetHandler`

`ParentComponent.js`

> Arrow function is used to pass parameters from child components to parent components.

```js
import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
```

> `greetHanlder` as a **props**

> Receive the `string` in parameter of `greetParent` function. And prints in alert function.

## Process Overview

Parent

- method is defined in `ParentComponent`

- on the Child Component tag pass the method as a `props`

Child

- In the child component access the method using the `props` object

- You have to pass a parameter use the array function systax.

By the way you can destructure the props object in the functional component but since we have this one prop I'm going to leave it as it is.

---

---

# **Conditional Rendering**

---

Approach

- if/else
- element variables
- ternamy conditional operator
- short circuit operator

`App.js`

```js
import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <div className="App">
      <UserGreeting></UserGreeting>
    </div>
  );
}

export default App;
```

## If/Else Approach

`UserGreeting.js`

```js
import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <div>Welcome Imrul!</div>
        </div>
      );
    } else {
      return (
        <div>
          <div>Welcome Guest!</div>
        </div>
      );
    }
  }
}

export default UserGreeting;
```

> We can not use condition inside `JSX` So we must use condtion outside of `JSX`

## Approach 2: Element Variables

`UserGreeting.js`

```js
import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Imrul!</div>;
    } else {
      message = <div>Welcome Guest!</div>;
    }

    return <div>{message}</div>;
  }
}

export default UserGreeting;
```

> Here `message` is a variable which is stores the element to be rendered.

## Approach 3: Ternamy Conditional Operator

`UserGreeting.js`

```js
import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return this.state.isLoggedIn ? (
      <div>Welcome Imrul</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }
}

export default UserGreeting;
```

> Benifit: can be used inside the JSX.

## Approach 4: Short Circuit Operator

`UserGreeting.js`

```js
import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome Imrul</div>;
  }
}

export default UserGreeting;
```

> if `this.state.isLoggedIn` is true then `<div>Welcome Imrul</div>` is also true. This it returns the statement.

> if `this.state.isLoggedIn` is false then no matter right side true or false the statement will always false. Hence return nothing.

---

> Finally Approach #3 and #4 is much more cleaner and readable.

---

---

# **List Rendering**

---

> The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2); // param => func body

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

---

`App.js`

```js
import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import NameList from "./components/NameList";
function App() {
  return (
    <div className="App">
      <NameList></NameList>
    </div>
  );
}

export default App;
```

`NameList.js`

```js
import React from "react";

function NameList() {
  const names = ["imrul", "hasan", "brishty", "akter"];
  return (
    <div>
      <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2>
      <h2>{names[3]}</h2>
    </div>
  );
}

export default NameList;
```

> But this is not proper way of list rendering.

`NameList.js`

```js
import React from "react";

function NameList() {
  const names = ["Imrul", "Hasan", "UAP", "CSE"];
  return (
    <div>
      {names.map((name) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
}

export default NameList;
```

### Example 1

`NameList.js`

```js
import React from "react";

function NameList() {
  const names = ["Imrul", "Hasan", "UAP", "CSE"];
  const NameList = names.map((name) => <h2>{name}</h2>);

  return <div>{NameList}</div>;
}

export default NameList;
```

### Example 2

`NameList.js`

```js
import React from "react";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Imrul",
      age: 24,
      skill: "Laravel",
    },
    {
      id: 2,
      name: "Hasan",
      age: 23,
      skill: "ReactJS",
    },
    {
      id: 3,
      name: "Imu",
      age: 25,
      skill: "JQuery",
    },
    {
      id: 4,
      name: "Backstreet",
      age: 20,
      skill: "Wordpress",
    },
    {
      id: 5,
      name: "Boys",
      age: 21,
      skill: "JavaScript",
    },
  ];

  const PersonList = persons.map((person) => (
    <h2 key={person.id}>
      I am {person.name}. I am {person.age} years old. I know {person.skill}{" "}
      very well.
    </h2>
  ));

  return <div>{PersonList}</div>;
}

export default NameList;
```

> Here we I use `key={person.id}` inside the `h2` tag as it recommanded to use.

> Everything works fine. But needs to be refactored.

### Formated Way

`NameList.js`

```js
import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Imrul",
      age: 24,
      skill: "Laravel",
    },
    {
      id: 2,
      name: "Hasan",
      age: 23,
      skill: "ReactJS",
    },
    {
      id: 3,
      name: "Imu",
      age: 25,
      skill: "JQuery",
    },
    {
      id: 4,
      name: "Backstreet",
      age: 20,
      skill: "Wordpress",
    },
    {
      id: 5,
      name: "Boys",
      age: 21,
      skill: "JavaScript",
    },
  ];

  const PersonList = persons.map((person) => <Person person={person}></Person>);

  return <div>{PersonList}</div>;
}

export default NameList;
```

> Here inside `<Person> </Person>` we pass the `person` as a props as `person` in the file.

`Person.js`

```js
import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age} years old. I know {person.skill}
        very well.
      </h2>
    </div>
  );
}

export default Person;
```

> Here I get the person as props and use it inside the `h2` tag.

---
