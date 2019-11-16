import React, {useEffect} from 'react';
import {Container , Col, Row} from "reactstrap"
import FormAPI from "./FormAPI"
import './App.css';

function App(){

  useEffect( () => {
    fetch("/all")
    .then(response => response.json().then( 
      data => {
        console.log(data)
      }
    ))
  }, [])

  return (
    <div className="App">
      <Container><Row><Col sm={8}>
          <Container className="vanillaForm">
          <FormAPI />
      </Container>
      </Col></Row></Container>
      
    </div>
  );
}

export default App;
