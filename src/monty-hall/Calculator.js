import React from "react";
import { GAME_STATUS } from "./MontyHallGame";
import './styles.css';

export default class Calculator extends React.Component {
    render() {
        const {history} = this.props;
        let totalPlays = history.length;
        let totalWins = history.filter(i => i.gameStatus === GAME_STATUS.GAME_WIN).length;
        let switchAndWin = history.filter(i => i.isSwitch && (i.gameStatus === GAME_STATUS.GAME_WIN)).length;
        let switchAndWinPercent = totalWins ? (100 * switchAndWin / totalWins) : 0;
        let stickAndWin = history.filter(i => !i.isSwitch && (i.gameStatus === GAME_STATUS.GAME_WIN)).length;
        let stickAndWinPercent = totalWins ? (100 * stickAndWin / totalWins) : 0;

        if (!totalPlays) {
            totalWins = 0;
            switchAndWin = 0;
            switchAndWinPercent = 0;
            stickAndWin = 0;
            stickAndWinPercent = 0;
        }
        return (
            <div>
                <p>Game Stats</p>

                <table>
                    <tr>
                        <td>Total plays: </td>
                        <td>{totalPlays}</td>
                    </tr>
                    <tr>
                        <td>Total won: </td>
                        <td>{totalWins}</td>
                    </tr>
                    <tr>
                        <td>Switch and win: </td>
                        <td>{switchAndWin}</td>
                        <td>{switchAndWinPercent} %</td>
                    </tr>
                    <tr>
                        <td>Stick and win: </td>
                        <td>{stickAndWin}</td>
                        <td>{stickAndWinPercent} %</td>
                    </tr>
                </table>
            </div>
        );
    }
}