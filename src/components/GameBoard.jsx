// const initialGameBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ]

// export default function GameBoard({ onSelectSquare, turns }) {
//     let gameBoard = initialGameBoard;

//     for (const turn of turns) {
//         const { square, player } = turn;
//         const { row, col } = square;

//         gameBoard[row][col] = player
//     }

//     // const [ gameBoard, setGameBoard ] = useState(initialGameBoard)

//     // function handleSelectSquare(rowIndex, colIndex) {
//     //     setGameBoard((previousGameBoard) => {
//     //         // Make an copy of the existent array
//     //         const updatedBoard =  [...previousGameBoard.map(innerArray => [...innerArray])]
//     //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol
//     //         return updatedBoard;
//     //     })

//     //     onSelectSquare();
//     // }

//     return (
//         <ol id="game-board">
//             {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
//                 <ol>
//                     {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={onSelectSquare(rowIndex, colIndex)} turns={gameTurns}>{playerSymbol}</button></li>)}
//                 </ol>
//             </li>)}
//         </ol>
//     )
// }

import { useState } from 'react'


const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((previousGameBoard) => {
            const updatedGameBoard = previousGameBoard.map((innerArray) => [...innerArray])
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol
            return updatedGameBoard;
        })

        onSelectSquare()
    }


    return (
    
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex, colIndex)} >{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )

}
