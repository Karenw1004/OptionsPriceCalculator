import React, {useState} from 'react';
import { Col, Form, FormGroup, Label, Input, Button,InputGroup,InputGroupAddon,InputGroupText, Progress } from "reactstrap"

export const FormAPI = ({newValue}) => {
    const [stockPrice,setStockPrice] = useState(0.0);
    const [volatility,setVolatility] = useState(0.0);
    const [days,setDays] = useState(0);
    
    return (  
    <Form style={{marginTop: "20px", marginBottom: "20px"}}>
    <FormGroup row>
        <Col sm={5}><Label>Base Price of stock: </Label></Col>      
        <Col sm={7}>
        <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input  value={stockPrice} onChange={e => setStockPrice(e.target.value)} placeholder="Input Stock Price" min={0} type="number" step="1"/>
        </InputGroup>
        </Col>
    </FormGroup>

    <FormGroup row>
    <Col sm={5}><Label>Volatility(%): </Label></Col>
    <Col sm={7}>
        <Input  value={volatility} onChange={e => setVolatility(e.target.value)} type="text" name="volatility"></Input>
    </Col>
    </FormGroup >

    <FormGroup row>
    <Col sm={5}><Label>Time(days): </Label></Col>
    <Col sm={7}>
        <InputGroup>
        {/* TODO: ONLY WHOLE NUMBER INPUTS */}
        <Input  value={days} onChange={e => setDays(e.target.value)}  placeholder="Amount" min={1} type="number" step="1" />
        <InputGroupAddon addonType="append">
        <InputGroupText>Days</InputGroupText>
        </InputGroupAddon>
    </InputGroup>
    </Col>
    </FormGroup >

    <FormGroup>
    <Progress animated value={10}> </Progress>
    </FormGroup>
    {/* TODO: CHECK FOR RANGE */}
    <Col sm={{size: 12, offset: 5}}>
    <Button onClick={async() => { 
        const vanillaPrice = {
            stockPrice: Number(stockPrice),
            volatility: Number(volatility),
            time: {days: Number(days)}};

        const response = await fetch("/new" , {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(vanillaPrice)
        });
        console.log(JSON.stringify(vanillaPrice));
        if(response.ok){
            console.log(vanillaPrice);
            // newValue(vanillaPrice);
            console.log("ADD TO DATABASE!");
            // setStockPrice(0);
            // setVolatility(0);
            // setDays(1);
        }
    }}>
    Submit</Button>
    </Col>
    </Form>
    );
    
  
}
    
export default FormAPI;
    