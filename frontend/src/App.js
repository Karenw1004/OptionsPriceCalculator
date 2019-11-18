import React, {useEffect,useState} from 'react';
import {Container , Col, Row} from "reactstrap"
import FormAPI from "./FormAPI";
import {Vanilla} from "./Vanilla";
import './App.css';

function App(){
  const [vanilla, setVanilla ] = useState([]);

  useEffect( () => {
    fetch("http://flaskveta.us-east-2.elasticbeanstalk.com/all")
    .then(response => response.json().then( 
      givenData => {
        setVanilla(givenData.data);
      }
    ))
  }, []);
  return (
    <div className="App">
      <Container><Row><Col sm={8}>
          <Container className="vanillaForm">
          {/* if [val, ...currVal] insert the val at the first  */}
          <FormAPI onNewValue= {
            val => setVanilla( currVal => [...currVal,val])} />
          <Vanilla vanilla={vanilla} />
      </Container>
      </Col></Row></Container>
      
    </div>
  );
}

export default App;
