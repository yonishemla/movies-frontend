import React,{useState, Component, setActiveNode } from "react";
import {Link} from 'react-router-dom';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import QrReader from 'react-qr-reader';


import Info from './components/Info.js';

import './App.css'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[{}],
       result:'No result',
       flag: false
    };
  }

  

componentDidMount() 
{
   fetch('http://localhost:3501/list').then((res) => res.json())
    .then((data) => {
        data.sort((a, b) => b.releaseYear - a.releaseYear);
        this.setState({data: data});
    });
    }



postData(){

let resultTitle = this.state.result.substring((this.state.result.search('"title":'))+10,(this.state.result.indexOf('image'))-6);

 let counter = 0;

for(let i=0; i<this.state.data.length; i++){

if(resultTitle != 'No result' && resultTitle != this.state.data[i].title){
  
 
  if(resultTitle != this.state.data[i].title){
    counter++
  }

     }
 
   }
  //        alert(counter);
  // alert(this.state.data.length);
  if(counter === this.state.data.length){
 fetch('http://localhost:3501/list', {
         method: 'POST',
         headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: this.state.result
           }
        )
        window.location.reload();
     }
          else{
       alert('same');
     }
  
}



      handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }

flagTrue(){
  if(this.state.flag === false){
 this.setState({flag: true});
}
 else if(this.state.flag === true){
 this.setState({flag: false});
}
}

    render() {
      if(this.state.flag === true ){
        return (

            <div className="container">
            <h1 className="header">Movie App</h1>

            <button onClick={this.flagTrue.bind(this)} >Close Qr scanner</button>
                <div className="qr">
        <QrReader className="inqr"
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '70%' }}
        />
        <p>Title: '{this.state.result.substring((this.state.result.search('"title":'))+10,(this.state.result.indexOf('image'))-6)}'</p>
        <button onClick={this.postData.bind(this)}>Add '{this.state.result.substring((this.state.result.search('"title":'))+10,(this.state.result.indexOf('image'))-6)}' to the list </button>
      </div>

                <br/><br/>
                <br/><br/>
                      <table className="table">
                               <th>Movie Name</th>
                                 <th>Release Year</th>
                                          <th>Image</th>
                                            <tbody>
                                 {this.state.data.map(function (item, title) {
                                      return (
                                <tr key={title}>
                                <td>
                                <Router>
                                <Switch>
                                <Route exact path='/Info' component = {()=>{return <Info 
                                title={item.title}
                                image={item.image}
                                releaseYear={item.releaseYear}
                                rating={item.rating}
                                genre={item.genre}
                                 />}}/>
                                <Link to='/Info'>
                                <h2>{item.title}</h2>
                                </Link>
                                </Switch>
                                </Router>
                                </td>
                                <td>
                                <Router>
                                <Switch>
                                <Route exact path='/Info' component = {()=>{return <Info 
                                title={item.title}
                                image={item.image}
                                releaseYear={item.releaseYear}
                                rating={item.rating}
                                genre={item.genre}
                                 />}}/>
                                <Link to='/Info'>
                                <h2>{item.releaseYear}</h2>
                                </Link>
                                </Switch>
                                </Router>
                                </td>
                                <td>
                                <Router>
                                <Switch>
                                <Route exact path='/Info' component = {()=>{return <Info 
                                title={item.title}
                                image={item.image}
                                releaseYear={item.releaseYear}
                                rating={item.rating}
                                genre={item.genre}
                                 />}}/>
                                <Link to='/Info'>
                             
                                <img src={item.image}/>
                               
                                </Link>
                                </Switch>
                                </Router>
                                </td>
                            </tr>
                          )
                      })}
               </tbody>
           </table>
        </div>
       )
   }

   else{
     return(
     
     
     <div className="container">
            <h1 className="header">Movie App</h1>

            <button  onClick={this.flagTrue.bind(this)}>Add movie by Qr scanner</button>

                <br/><br/>
                <br/><br/>
                      <table className="table">
                               <th>Movie Name</th>
                                 <th>Release Year</th>
                                          <th>Image</th>
                                            <tbody>
                                 {this.state.data.map(function (item, title) {
                                      return (
                                <tr key={title}>
                                <td>
                                <Router>
                                <Switch>
                                <Route exact path='/Info' component = {()=>{return <Info 
                                title={item.title}
                                image={item.image}
                                releaseYear={item.releaseYear}
                                rating={item.rating}
                                genre={item.genre}
                                 />}}/>
                                <Link to='/Info'>
                                <h2>{item.title}</h2>
                                </Link>
                                </Switch>
                                </Router>
                                </td>
                                <td>
                                <Router>
                                <Switch>
                                <Route exact path='/Info' component = {()=>{return <Info 
                                title={item.title}
                                image={item.image}
                                releaseYear={item.releaseYear}
                                rating={item.rating}
                                genre={item.genre}
                                 />}}/>
                                <Link to='/Info'>
                                <h2>{item.releaseYear}</h2>
                                </Link>
                                </Switch>
                                </Router>
                                </td>
                                <td>
                                <Router>
                                <Switch>
                                <Route exact path='/Info' component = {()=>{return <Info 
                                title={item.title}
                                image={item.image}
                                releaseYear={item.releaseYear}
                                rating={item.rating}
                                genre={item.genre}
                                 />}}/>
                                <Link to='/Info'>
                                
                                <img src={item.image}/>
                               
                                </Link>
                                </Switch>
                                </Router>
                                </td>
                            </tr>
                          )
                      })}
               </tbody>
           </table>
        </div>
       )
   }
}
}




