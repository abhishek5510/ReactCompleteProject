import React,{Component} from 'react';
import Page from './openingpageuser';
import './App.css';
import axios from 'axios';
import Main from './main';
class App extends Component{
  componentDidMount(){
      // axios.get('http://localhost:3001/post').then(request=>{
      //   console.log(request);
      // })
      // axios.post('http://localhost:3001/post',{posted_data:'abhishek'}).then(response => {
      //   console.log(response.status);
      // })
  }
  render() {
    return (
      <div>
        <Main/>
      </div>
    );
  }
}


export default App;
