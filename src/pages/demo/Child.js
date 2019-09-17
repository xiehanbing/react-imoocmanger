import React from 'react'

export default class Child extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }


  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');
  }
  componentWillReceiveProps(newProps) {
    console.log('will props');
    console.log(newProps.name);
  }

  shouldComponentUpdate() {
    console.log('should update');
    return true;
  }

  componentWillUpdate() {
    console.log('will update');
  }

  componentDidUpdate() {
    console.log('did update');
  }

  render() {
    return <div>
      <p>这里是子组件的声明周期</p>
      <p>{this.props.name}</p>
    </div>
  }
}