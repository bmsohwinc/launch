import React from "react";
import _ from 'lodash';
import Show from "./Show";
import Calculator from "./Calculator";

const CAR = 'car';
const GOAT = 'goat';

export const GAME_STATUS = {
    STARTED: {
        name: 'STARTED',
        hostMsg: 'Welcom Earther! Please pick a door to unveil the lottery!',
    },
    HOST_OPENED_DOOR: {
        name: 'HOST_OPENED_DOOR',
        hostMsg: 'Great. To spice up the guess, I have opened the door with the goat. Now... Do you want to switch to the other door, or stick to your original door?',
    },
    GAME_WIN: {
        name: 'GAME_WIN',
        hostMsg: 'Awesome! You have won the brand new car!',
    },
    GAME_LOSE: {
        name: 'GAME_LOSE',
        hostMsg: 'Sorry! You have a goat now :(',
    }, 
}

function getItems() {
    let items = [CAR, GOAT, GOAT];
    return _.shuffle(items);
}

function getInitialState() {
    return {
        doors: getItems().map((doorItem, idx) => ({doorNum: idx, doorItem: doorItem, doorOpen: false})),
        gameStatus: GAME_STATUS.STARTED,
        selectedDoor: null,
        hostSelectedDoor: null,
        newSelectedDoor: null,
        history: [],
    };
}

export default class MontyHallGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...getInitialState()};
    }

    getHostSelectedDoor(userSelectedDoor) {
        const doors = this.state.doors;
        if (doors[userSelectedDoor].doorItem === GOAT) {
            if (doors[(userSelectedDoor + 1) % 3].doorItem === GOAT) {
                return (userSelectedDoor + 1) % 3;
            } else {
                return (userSelectedDoor + 2) % 3;
            }
        } else {
            const goatDoors = [(userSelectedDoor + 1) % 3, (userSelectedDoor + 2) % 3];
            return _.shuffle(goatDoors)[0];
        }
    }

    handleClick(i) {
        switch(this.state.gameStatus) {
            case GAME_STATUS.STARTED: {
                const doors = this.state.doors.slice();
                const hostSelectedDoor = this.getHostSelectedDoor(i);
                doors[hostSelectedDoor].doorOpen = true;
                this.setState({
                    doors,
                    gameStatus: GAME_STATUS.HOST_OPENED_DOOR,
                    hostSelectedDoor,
                    selectedDoor: i,
                });
                return;
            }
            case GAME_STATUS.HOST_OPENED_DOOR: {
                const doors = this.state.doors.slice();
                if (i === this.state.hostSelectedDoor) {
                    return;
                }
                const gameStatus = doors[i].doorItem === CAR ? GAME_STATUS.GAME_WIN : GAME_STATUS.GAME_LOSE;
                for (let door of doors) {
                    door.doorOpen = true;
                }
                this.setState({
                    doors,
                    gameStatus,
                    newSelectedDoor: i,
                });
                break;
            }
            default:
                break;
        }
    }

    handleReset() {
        const {gameStatus, doors, selectedDoor, hostSelectedDoor, newSelectedDoor} = this.state;
        if (gameStatus === GAME_STATUS.GAME_LOSE || gameStatus === GAME_STATUS.GAME_WIN) {
            const history = this.state.history;
            history.push({
                doors,
                selectedDoor,
                hostSelectedDoor,
                newSelectedDoor,
                gameStatus,
                isSwitch: (selectedDoor !== newSelectedDoor),
            });
            this.setState({
                ...getInitialState(),
                history,
            });
        }
    }

    render() {
        return (
            <div>
                <h1>The Monty Hall Game</h1>
                <p>wiki: <a href="https://en.wikipedia.org/wiki/Monty_Hall_problem">https://en.wikipedia.org/wiki/Monty_Hall_problem</a></p>
                <p>really good video that helped me understand the math: <a href="https://www.youtube.com/watch?v=7WvlPgIjx_M">https://www.youtube.com/watch?v=7WvlPgIjx_M</a></p>
                {/* <iframe width="420" height="315" src="https://www.youtube.com/embed/7WvlPgIjx_M"></iframe> */}
                {this.state.gameStatus.hostMsg}
                <Show userSelectedDoor={this.state.userSelectedDoor} newSelectedDoor={this.state.newSelectedDoor} doors={this.state.doors} onClick={(i) => this.handleClick(i)} />
                <div><button onClick={() => this.handleReset()}>Reset</button></div>
                <Calculator history={this.state.history}/>
            </div>
        );
    }
}
