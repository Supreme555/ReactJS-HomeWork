import React from "react";
import './VivodComp.css'

class VivodComp extends React.Component {
    render() {
        return (
            <div className="box">
                <h1>{this.props.user.name}</h1>
                <h1>{this.props.user.text}</h1>
                <h1>{this.props.user.avatar}</h1>
                <h1>{this.props.user.statys}</h1>
            </div>
        );
    }
}

export default VivodComp