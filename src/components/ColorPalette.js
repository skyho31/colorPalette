import React, { Component } from 'react';
import '../css/ColorPalette.css';

class ColorPalette extends Component {

    render(){
        return(
            <section>
                <div className="colorBoxRow">
                    <ColorBox name="TURQUISE" color="#1abc9c" />
                    <ColorBox name="EMERALD" color="#2ecc71" />
                    <ColorBox name="PETER RIVER" color="#3498db" />
                    <ColorBox name="AMETHYST" color="#9b59b6" />
                    <ColorBox name="WET ASPHALT" color="#34495e" />
                </div>
                <div className="colorBoxRow">
                    <ColorBox name="GREEN SEA" color="#16a085" />
                    <ColorBox name="NEPHALITIS" color="#27ae60" />
                    <ColorBox name="BELIZE HOLE" color="#2980b9" />
                    <ColorBox name="WHISTERIA" color="#8e44ad" />
                    <ColorBox name="MIDNIGHT BLUE" color="#2c3e50" />
                </div>
                <div className="colorBoxRow">
                    <ColorBox name="SUNFLOWER" color="#f1c40f" />
                    <ColorBox name="CARROT" color="#e67e22" />
                    <ColorBox name="ALIZARIN" color="#e74c3c" />
                    <ColorBox name="CLOUDS" color="#ecf0f1" />
                    <ColorBox name="CONCRETE" color="#95a5a6" />
                </div>
                <div className="colorBoxRow">
                    <ColorBox name="ORANGE" color="#f39c12" />
                    <ColorBox name="PUMPKIN" color="#d35400" />
                    <ColorBox name="POMEGRANATE" color="#c0392b" />
                    <ColorBox name="SILVER" color="#bdc3c7" />
                    <ColorBox name="ASBESTOS" color="#7f8c8d" />
                </div>
            </section>
        )
    }
}

class ColorBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            isMouseover:false
        }
        this.copyColor = this.copyColor.bind(this);
    }

    copyColor(){
        alert(this.props.color + " copyed!");
        var copyField = document.createElement('textarea');
        copyField.innerText = this.props.color;
        document.body.appendChild(copyField);
        copyField.select();
        document.execCommand('copy');
        copyField.remove();
    }

    render(){

        return(
            <div className="colorBox"
                 style={{backgroundColor:this.props.color}}
                 onClick={(e) => this.copyColor(e)}
                 onMouseOver={() => this.setState({isMouseover:true})}
                 onMouseLeave={() => this.setState({isMouseover:false})}>

                { this.state.isMouseover ? (
                    <button className="colorCopyButton">
                        Copy to clipboard
                    </button>
                ) : (
                    <h2 className="colorName">{this.props.name}</h2>
                )}
            </div>
        )
    }
}

export default ColorPalette;