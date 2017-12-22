var React = require('react');
var ReactDOM = require('react-dom');
import PropTypes from 'prop-types';

const i = {
  height: '90px',
  width: '100px',
  display: 'none'
}
export default class Item1 extends React.Component {
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  componentWillReceiveProps() {
    //已加载组件收到新的参数时调用
    console.log('componentWillReceiveProps');
  }
  // shouldComponentUpdate(fas){
  //   //组件判断是否重新渲染时调用
  //   console.log('shouldComponentUpdate');
  //   console.log(fas);
  // }
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      i: {
        height: '90px',
        width: '100px',
        display: 'show'
      }
    };
  }
  todo() {
    console.log(window.a = this.refs.name);
    console.log(a.value);
    this
      .props
      .todo();
    // this.setState({i})
  }
  render() {
    // console.log(this.props.complete);
    return (
      <div
        className={this.state.show
        ? "itemTest"
        : 'none'}
        style={this.state.i}>
        <p className="">{this.props.content}</p>
        <input type="text" defaultValue={this.props.text} ref='name'/>
        <button onClick={this
          .todo
          .bind(this)}>功能</button>
      </div>
    );
  }
}

export class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: "hello"
    };
  }
  render() {
    // console.log(this.props.complete);
    return (
      <li className={this.props.complete
        ? "completed"
        : ''}>
        <div className="view">
          <input
            type="checkbox"
            className="checkbox"
            checked={this.props.complete}
            onChange={this.props.toggle}/>
          <label className="listCon">{this.props.content}{this.props.foot}</label>
          <button className="destory" onClick={this.props.delete}>删除</button>
        </div>
        {/* <input type="text" className="edit" /> */}
      </li>
    );
  }

}

Item.propTypes = {
  content: PropTypes.string,
  toggle: PropTypes.func.isRequired, //必传
};
Item.defaultProps = {
  // foot: '这里是尾部',
};

// optionalArray: PropTypes.array, optionalBool: PropTypes.bool, optionalFunc:
// PropTypes.func, optionalNumber: PropTypes.number, optionalObject:
// PropTypes.object, optionalString: PropTypes.string, optionalSymbol:
// PropTypes.symbol,