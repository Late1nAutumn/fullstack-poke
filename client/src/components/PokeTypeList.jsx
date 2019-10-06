import React from 'react';
import PokeList from './PokeList.jsx';

// const createList = (types)=>{
//   var typeList = [];
//   for(var type in types){
//     typeList.push(
//       <div key={type}>
//        <h2>{type}</h2>
//         <PokeList pokemon={types[type]}/>
//       </div>)
//   }
// }

// const PokeTypeList = (props) => {
//   var lists = createList(props.types);
//   return (<div>{lists}</div>)
// }
class PokeTypeList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentType:'Grass'
    }
    this.hdl=this.hdl.bind(this)
  }
  createOptions(types){
    var options=[];
    for(var type in types){
      options.push(<option key={type}>{type}</option>)
    }
    return options;
  }
  hdl(e){
    this.setState({currentType:e.target.value});
  }
  render(){
    return(
    <div>
      <select value={this.state.currentType} onChange={this.hdl}>
        {this.createOptions(this.props.types)}
      </select>
      <PokeList pokemon={this.props.types[this.state.currentType]}/>
    </div>)
  }
}


export default PokeTypeList;