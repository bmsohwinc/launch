import React from "react";

export default class Room extends React.Component {
    render() {
        const {door, onClick, newSelectedDoor, userSelectedDoor} = this.props; 
        let msg = '';
        if (newSelectedDoor !== null) {
            if (newSelectedDoor === door.doorNum) {
                msg = 'You have selected this door';
            }
            
        } else if (userSelectedDoor === door.doorNum) {
            msg = 'You have selected this door';
        }
        return (
            <div  
                style={{height: '300px', width: '200px', backgroundColor: 'orange', margin: '10px'}}
                onClick={() => onClick(door.doorNum)}
            >
                <div>Door #{door.doorNum}</div>
                {door.doorOpen && <div>Door has {door.doorItem}</div>}
                <div>Door is open? : {door.doorOpen ? 'Yes' : 'No'}</div>
                <div>{msg}</div>
            </div>
        );
    }
}