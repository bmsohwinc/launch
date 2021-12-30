import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import ChessGame from "./chess/ChessGame";
import TicTacToeGame from "./tic-tac-toe/TicTacToeGame";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/tic-tac-toe">tic-tac-toe</Link>
                        </li>
                        <li>
                            <Link to="/chess">chess</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tic-tac-toe" element={<TicTacToeGame />} />
                    <Route path="/chess" element={<ChessGame />} />

                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}
