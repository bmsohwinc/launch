import React from "react";
import Room from "./Room";

export default class Show extends React.Component {
    render() {
        return (
            <div style={{display: 'flex'}}>
                {this.props.doors.map(door => <Room userSelectedDoor={this.props.userSelectedDoor} newSelectedDoor={this.props.newSelectedDoor} key={door.doorNum} door={door} onClick={this.props.onClick} />)}
            </div>
        );
    }
}