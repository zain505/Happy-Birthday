import React, { Component } from 'react'
import '../App.css';


export class NamingForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            num: 10
        }

        this.input = React.createRef()

    }
    
    

    render() {
        return (
            <div>
                {/* <Wish name={this.state.name} num={this.state.num}/> */}
                    <div className="row mt-3 form-wish">
                        <div className="col-sm-4">
                        </div>
                        <div className="col-sm-4 border p-2 text-center">
                            <h1 className="text-dark text-center">BirthDay Wish</h1>
                            <label className="text-primary">Enter Name</label>
                            <input type="text" ref={this.input} onChange={()=>this.props.changename(this.input.current.value)} placeholder="Name" className="input form-control" />
                            <button className="btn btn-primary mt-1 btn-wish" onClick={this.props.start}>Next</button>
                        </div>
                        <div className="col-sm-4">
                        </div>
                    </div>
                    
            </div>

        )
    }
}

export default NamingForm
