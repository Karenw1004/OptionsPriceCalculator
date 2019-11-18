import React from "react";
import { ListGroup, ListGroupItem,Badge  } from "reactstrap";

export const Vanilla = ({ vanilla }) => {
  return (
    <ListGroup>
      {vanilla.map( (van, index) => {
        if (index === (vanilla.length-1)){
        return (
          <ListGroupItem key={index} style={{marginBottom: "20px"}}>
            <Badge pill color="success">Volatility:{van.volatility} </Badge>
            <Badge pill color="info">Price:${van.stockPrice} </Badge>
            <Badge pill color="primary">Time Ratio:{van.timeRatio} </Badge>
            {van.vanillaOption}             
          </ListGroupItem>
        );
      } 
      }
      )}
    </ListGroup>
  );
};