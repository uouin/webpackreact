var React = require('react');
var ReactDOM = require('react-dom');

export  class Item extends React.Component {
    render() {
        // console.log(this.props.complete);
        return ( 
            <li className={this.props.complete?"completed":''}>
            <div className="view">
              <img src={this.props.imgUrl} alt="" className="photo"/>
              <p className="namep">{this.props.name}</p>
              {/* <input type="checkbox" className="checkbox" checked={this.props.complete} onChange={this.props.toggle}/> */}
              <div className="bottom">
                <div className="destory" onClick={this.props.destory}>删除</div>
                <div className="edit" onClick={this.props.edit} >编辑</div>
              </div>
            </div>
            {/* <input type="text" className="edit" /> */}
          </li>
        );
        }
}
export  class Item1 extends React.Component {
  render() {
      // console.log(this.props.complete);
      return ( 
          <li className={this.props.complete?"completed":''}>
          <div className="view">
            <img src={this.props.imgUrl} alt="" className="photo"/>
            <p className="namep">{this.props.name}</p>
            {/* <input type="checkbox" className="checkbox" checked={this.props.complete} onChange={this.props.toggle}/> */}
            <div className="bottom">
              <div className="destory" onClick={this.props.destory}>删除</div>
              <div className="edit" onClick={this.props.edit} >编辑</div>
            </div>
          </div>
          {/* <input type="text" className="edit" /> */}
        </li>
      );
      }
}
export function cube(x) {
  return x * x * x;
}
export function cubee(x) {
  return x * x ;
}
export function abc(u) {
  return u + u + u ;
}