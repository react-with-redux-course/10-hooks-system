import React, { useState } from "react";
import ResourceList from './ResourceList';

const App = () => {
    // array destructuring: useState returns an array with 2 elements inside of it
    const [resource, setResource] = useState('posts'); // 'posts' is initial value/state. Just want the value, no key like in this.state!
    // ^ resource === the current value/state && setResource === a "setter" function (like this.setState)
    
    // const [currentCount, setCount] = useState(0)
    return (
        <div>
          <div>
              {/* whenever we call setResource, we are changing the resource, or 'this.state'*/}
              <button onClick={() => setResource('posts')}>Posts</button>
              <button onClick={() => setResource('todos')}>Todos</button>
          </div>
          {/*{resource}*/}
          <ResourceList resource={resource}/> {/*passing down the current value of resource to ResourceList*/}
        </div>
      );
  }

/*
class App extends React.Component {
  state = { resource: 'posts'}
    render() {
    return (
      <div>
        <div>
            <button onClick={() => this.setState({resource: 'posts'})}>Posts</button>
            <button onClick={() => this.setState({resource: 'todos'})}>Todos</button>
        </div>
        {this.state.resource}
      </div>
    );
  }
}
*/

export default App;
