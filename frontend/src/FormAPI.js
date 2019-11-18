import React, {useState} from 'react';
import { Col, Form, FormGroup, Label, Input, Button,InputGroup,InputGroupAddon,InputGroupText } from "reactstrap"

export const FormAPI = ({onNewValue}) => {
    const [stockPrice,setStockPrice] = useState(0);
    const [volatility,setVolatility] = useState(0);
    const [days,setDays] = useState(0);

    return (  
    <Form style={{marginTop: "20px", marginBottom: "20px"}}>
    <FormGroup row>
        <Col sm={5}><Label>Base Price of stock: </Label></Col>      
        <Col sm={7}>
        <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input value={(Number(stockPrice) === 0 && stockPrice.toString().length === 1) ? "" :Number(stockPrice)} 
        onChange={e => setStockPrice(e.target.value)} name="stockPrice"
        placeholder="Input Stock Price" min={0} type="number" step="0.01"/>
        </InputGroup>
        </Col>
    </FormGroup>

    <FormGroup row>
    <Col sm={5}><Label>Volatility: </Label></Col>
    <Col sm={7}>
        <InputGroup>
            <Input value={Number(volatility) === 0 && volatility.toString().length === 1 ? "" : Number(volatility)} 
            onChange={e => setVolatility(e.target.value)} name="volatility" 
            placeholder="Input Volatility" maxLength={3} min={0} max={100} type="number" step="0.01"></Input>
            <InputGroupAddon addonType="append">
            <InputGroupText>%</InputGroupText>
            </InputGroupAddon>
        </InputGroup> 
    </Col>
    </FormGroup >

    <FormGroup row>
    <Col sm={5}><Label>Time: </Label></Col>
    <Col sm={7}>
        <InputGroup>
        {/* TODO: ONLY WHOLE NUMBER INPUTS */}
        <Input value={Number(days) === 0 ? "" : Number(days)} onChange={e => setDays(e.target.value)}  placeholder="Amount" min={1} type="number" step="1" />
        <InputGroupAddon addonType="append">
        <InputGroupText>Days</InputGroupText>
        </InputGroupAddon>
    </InputGroup>
    </Col>
    </FormGroup >
    {/* TODO:Make a progress bar */}
    {/* <FormGroup> <Progress animated value={10}> </Progress></FormGroup> */}
    {/* TODO: CHECK FOR RANGE */}
    <Col sm={{size: 12, offset: 5}}>
    <Button onClick={async() => { 
        const vanillaPrice = {
            stockPrice: Number(stockPrice),
            volatility: (Number(volatility)/100),
            time: {days: Number(days)}};

        const response = await fetch("http://flaskveta.us-east-2.elasticbeanstalk.com/new" , {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(vanillaPrice)
        });
        if(response.ok){
            var latest = {};
            await fetch("http://flaskveta.us-east-2.elasticbeanstalk.com/latest").then(
                response => response.json().then( 
              givenData => {
                latest = (givenData.newestData);
              }
            ) );
            onNewValue(latest);
            //clear the form
            setStockPrice(0);
            setVolatility(0);
            setDays(0);         
        }
    }}>
    Submit</Button>
    </Col>
    </Form>
    );
}
    
export default FormAPI;
    