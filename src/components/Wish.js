import React, { Component } from 'react'
import baloon1 from "../components/baloons1.png"
import baloon3 from "../components/baloons3.png"
import baloon4 from "../components/baloons4.png"
import baloon5 from "../components/baloons5.png"
import baloon7 from "../components/baloons7.png"
import misile1 from "../components/misile1.png"
import misile2 from "../components/misile2.png"

export class Wish extends Component {
    constructor(props) {
        super(props)

        this.state = {
            timer: null
        }
    }


    render() {

        return (
            <div>
                <div className="text-center">
                    <h3 className="text-secondary tag">Acknowledged! Today is <span className="text-primary">{this.props.name}</span>'s Birthday.</h3>
                    <small className="text-secondary">CSS3,HTML5,JAVASCRIPT,REACT</small>
                </div>
                <img src={baloon3} alt="baloon7" className="gifts" />
                <img src={misile1} alt="baloon7" className="misile1" />
                <img src={misile2} alt="baloon7" className="misile2" />
                <img src={baloon1} alt="baloon7" className="baloon1" />
                <img src={baloon1} alt="baloon7" className="baloon2" />
                <img src={baloon1} alt="baloon7" className="baloon3" />
                <img src={baloon4} alt="baloon7" className="cake" />
                <img src={baloon4} alt="baloon7" className="cake2" />
                <img src={baloon5} alt="baloon7" className="banner" />

                
                    <img src={baloon7} alt="baloon7" className="blast" />
                    <span className="name">{this.props.name.toUpperCase()}</span>
                    
                    <div className="fire"></div>
                    <div className="rope"></div>

                    <div className="box"> <span className="count">{this.props.num}</span> </div>

                </div>


        )

    }
}

export default Wish
