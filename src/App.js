import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  /// TODO : STORE and fetch data to and from the cache

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      newItem: "",
      isDone: true
    }
  }
  addItemToList(item) {
    if (item !== "") {
      var input = document.getElementById('todoBox');
      console.log(input.value);
      const newItem = {
        value: item,
        id: new Date().toDateString(),
        isDone: this.state.isDone
      };
      const newList = [...this.state.list];
      newList.push(newItem);
      console.log(newList);
      this.setState({
        list: newList,
        newItem: ""
      });
      input.value = '';
    }
  }

  onCheckBoxTap(status) {
    this.setState({
      isDone: !this.state.isDone
    });

  }
  // componentDidMount(){
  //   this.getDate();
  // }
  render() {
    return (
      <div className='App'>
        <img className='App-logo' width="150" height="150" src={logo} />
        <h2>Whats on Your Mind</h2>
        <div className="row">
          <SearchBar />
          <button onClick={() => {
            var input = document.getElementById("todoBox");
            this.addItemToList(input.value);
          }} className="ButtonStyle ">
            Add to List
          </button>
        </div>
        <div className='column'>
          {this.state.list.map((item) => {
            return <div className="listCard">
              <div className="rowcard">
                <h6>{item.id}</h6>
                < input id="checked" type="checkbox" defaultChecked={item.isDone} onClick={() => {
                  this.onCheckBoxTap(item.isDone)
                }} />
              </div>
              <p style={{ textDecorationLine: this.state.isDone == true ? "line-through" : "none" }}>{item.value}</p>
            </div>
          })
          }
        </div>
      </div >);
  }
}

function SearchBar() {
  return (
    <input type="text" id="todoBox" placeholder='Add a Quick todo...' className='SearchStyle'></input>
  );
}
export default App;