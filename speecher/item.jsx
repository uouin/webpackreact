var React = require('react');
var ReactDOM = require('react-dom');

export default class Item extends React.Component {
    render() {
        // console.log(this.props.complete);
        return ( 
            <li className={this.props.complete?"completed":''}>
            <div className="view">
              <input type="checkbox" className="checkbox" checked={this.props.complete} onChange={this.props.toggle}/>
              <label className="listCon">{this.props.content}</label>
              <button className="destory" onClick={this.props.delete}>删除</button>
            </div>
            {/* <input type="text" className="edit" /> */}
          </li>
        );
        }
}