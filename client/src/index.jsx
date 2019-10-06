import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PokeList from './components/PokeList.jsx';
import PokeTypeList from './components/PokeTypeList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'id',
      idSort: [],
      typeSort: []
    }
    this.changeorder = this.changeorder.bind(this);
  }
  changeorder(order) {
    this.setState({
      show: order
    })
  }

  componentDidMount(){
    axios.get('/api/pokemon')
    .then((res)=>{
      // console.log(res.data.idSort);
      this.setState({
        idSort:res.data.idSort,
        typeSort:res.data.typeSort
      })
    },(err)=>{throw err;});
  }

  render() {
    return (
      <div>
        <h1>Pokemon!</h1>
        <button onClick={() => this.changeorder('id')}>Show in order?</button>
        <button onClick={() => this.changeorder('type')}> Show by type?</button>
        {this.state.show === 'id' &&
          <PokeList pokemon={this.state.idSort}/>}
        {this.state.show === 'type' &&
          <PokeTypeList types={this.state.typeSort}/>}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))



