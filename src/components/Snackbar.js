import React from 'react'
import { useSnackbar } from 'react-simple-snackbar'
 
export default function Snackbar(props) {


  const [openSnackbar, closeSnackbar] = useSnackbar()


  const postData = () =>{

let resultTitle = props.result.substring((props.result.search('"title":'))+10,(props.result.indexOf('image'))-6);

 let counter = 0;

for(let i=0; i<props.data.length; i++){

if(resultTitle != 'No result' && resultTitle != props.data[i].title){
  
 
  if(resultTitle != props.data[i].title){
    counter++
           }

       }
 
   }
  if(counter === props.data.length){
 fetch('http://localhost:3501/list', {
         method: 'POST',
         headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: props.result
           }
        )
        window.location.reload();
     }
          else{
          
           openSnackbar(resultTitle+' is already exist');
     }
  
}

  const post = () =>{
      postData();
  }

  return (
    <div>
      <button onClick={post}>
        Add '{props.result.substring((props.result.search('"title":'))+10,(props.result.indexOf('image'))-6)}' to the list 
      </button>
    </div>
  )
}