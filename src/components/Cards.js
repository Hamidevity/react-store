 import React, { Component } from 'react';

 import styles from "./Cards.module.css";
 import { Link } from 'react-router-dom';
 import Card from "./Card";

 import iphonex from "../images/iphone10.webp";

class Cards extends Component {
    constructor() {
        super()
        this.state = {
            PhoneData : [
                {id:1  ,image:iphonex, name :'iphonex' , cost:"500 $"},
                {id:23  ,image:iphonex, name :'iphonex' , cost:"500 $"},
                {id: 3 ,image:iphonex, name :'iphonex' , cost:"500 $"},
                {id: 4 ,image:iphonex, name :'iphonex' , cost:"500 $"}
            ]
        }
    }
    render() {
        return (
            <div className={styles.container}>
                {/* <Card image={iphonex} name="iphonex" cost="500 $"/>
                <Card image={iphonex} name="iphonex" cost="500 $"/>
                <Card image={iphonex} name="iphonex" cost="500 $"/>
                <Card image={iphonex} name="iphonex" cost="500 $"/>  */}
                {this.state.PhoneData.map(phone => <Card key={phone.id} image={phone.image} name={phone.name} cost={phone.cost} id={phone.id}/> )}
            </div>
        );
    }
}

export default Cards;