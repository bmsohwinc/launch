import React from "react";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import ChessGame from "./chess/ChessGame";
import TicTacToeGame from "./tic-tac-toe/TicTacToeGame";

export default function App() {
    return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/launch">Home</Link>
                        </li>
                        <li>
                            <Link to="/launch/tic-tac-toe">tic-tac-toe</Link>
                        </li>
                        <li>
                            <Link to="/launch/chess">chess</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/launch" element={<Home />} />
                    <Route path="/launch/tic-tac-toe" element={<TicTacToeGame />} />
                    <Route path="/launch/chess" element={<ChessGame />} />
                </Routes>
            </div>
    );
}

function Home() {
    return <h2>Home</h2>;
}
