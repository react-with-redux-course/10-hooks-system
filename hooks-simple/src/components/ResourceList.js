// import hooks from React library
import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    //this.setState({ resources: response.data });
    setResources(response.data);
  };

  // useEffect runs only when value in second parameter/array [resource] changes
  // if array is empty in useEffect, we have the equivalent of a componentDidMount()
  useEffect(() => {
    // resource is a prop passed into this component
    fetchResource(resource);
  }, [resource]); // element will toggle between 'posts' and 'todos'

  /*
    ALTERNATIVE CODE FOR FETCHRESOURCE AND USEEFFECT:
    useEffect(
      () => {
        (async resource => {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`
        );

      setResources(response.data)
        })(resource)
      },
      [resource]
    );
    
  */
  return (
  <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
  )
};

// class ResourceList extends React.Component {
//   state = { resources: [] };

//   async componentDidMount() {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/${this.props.resource}`
//     );

//     this.setState({ resources: response.data });
//   }

//   async componentDidUpdate(prevProps) {
//     // console.log(prevProps); see if resource type changed in props during re-render; then make another request
//     if (prevProps.resource !== this.props.resource) {
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/${this.props.resource}`
//       );

//       this.setState({ resources: response.data });
//     }
//   }

//   render() {
//     {/* return <div>{this.props.resource}</div>; */}
//     return <div>{this.state.resources.length}</div>;
//     {/* will show how many elements we have in resources*/}
//   }
// }

export default ResourceList;
