# **HTTP and React**

![](MARKDOWN_NOTES/78.png)

![](MARKDOWN_NOTES/79.png)

---

## Create new App

```cmd
~$ npx create-react-app react-http
```

```cmd
~$ cd react-http
```

## Install Axios

```cmd
~$ npm install axios
```

---

# **HTTP GET Request**

---

> We will learn how to make a get request using axios and render the fetched data in react component.

> To fetch the data we need to have an API end point. For that I will be making use of JSON placeholder.

> [Rest API Testing API](https://jsonplaceholder.typicode.com)

> We will focus on fetch data not creating API.

> [GET method: posts](https://jsonplaceholder.typicode.com/posts)

## Step 1:

### Create PostList component and add it to App component

`App.js`

```js
import React from "react";
import "./App.css";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <PostList />
    </div>
  );
}

export default App;
```

`PostList.js`

```js
import React, { Component } from "react";

class PostList extends Component {
  render() {
    return (
      <div>
        <h3>List of Posts</h3>
      </div>
    );
  }
}

export default PostList;
```

## Step 2:

### Now Fetching Posts from API

- Import `axios` library on top

`PostList.js`

```js
import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  render() {
    return (
      <div>
        <h3>List of Posts</h3>
      </div>
    );
  }
}

export default PostList;
```

- create a state property which will store the list of posts.

`PostList.js`

```js
import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  render() {
    return (
      <div>
        <h3>List of Posts</h3>
      </div>
    );
  }
}

export default PostList;
```

- Use `Axios` to make a get request to the JSON placeholder API.
- Where do we place the code to make the get request ?

  - Ans: In the `componentDidMount` life cycle method.
  - this method will be executed when the component mounts for the first time and this only executed once during component lifetime. A perfect place for GET request.

- To make a GET request we invoke the GET method on the axios library.
- axios.get(). This method accepts the API endpoint as its argument.

`PostList.js`

```js
import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts");
  }

  render() {
    return (
      <div>
        <h3>List of Posts</h3>
      </div>
    );
  }
}

export default PostList;
```

- But how do we access the data that is returned.
- Axios is a promise based library. So we can add them and catch blocks.

`PostList.js`

```js
import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h3>List of Posts</h3>
      </div>
    );
  }
}

export default PostList;
```

> Now go back to the browser and look at the console. And expand object->data.

> You will see all the data fetched from API.

- Now how to render these data in `JSX` using rendering.

`PostList.js`

```js
import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h3>List of Posts</h3>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
      </div>
    );
  }
}

export default PostList;
```

> How to display Error Message when API fails?

### Finally Complete File of HTTP GET

`PostList.js`

```js
import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error Retreiving Data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h3>List of Posts</h3>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
```

---

---
