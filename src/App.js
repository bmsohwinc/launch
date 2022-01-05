import React from "react";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import ChessGame from "./chess/ChessGame";
import MontyHallGame from "./monty-hall/MontyHallGame";
import TicTacToeGame from "./tic-tac-toe/TicTacToeGame";

export default function App() {
    return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="home">Home</Link>
                        </li>
                        <li>
                            <Link to="tic-tac-toe">tic-tac-toe</Link>
                        </li>
                        <li>
                            <Link to="chess">chess</Link>
                        </li>
                        <li>
                            <Link to="monty-hall">monty-hall</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="tic-tac-toe" element={<TicTacToeGame />} />
                    <Route path="chess" element={<ChessGame />} />
                    <Route path="monty-hall" element={<MontyHallGame/>} />
                </Routes>
            </div>
    );
}

function Home() {
    return <h2>Home</h2>;
}
