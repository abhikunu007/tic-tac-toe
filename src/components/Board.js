import React, { useState } from 'react'
import { Square } from './Square'

export const Board = () => {
    const[piece, setPiece] = useState(Array(9).fill(null));
    const[isXTurn, setIsXTurn] = useState(true);


    const handleClick = (index) => {
        if(piece[index] !== null) {
            return;
        }
        const copyPiece = [...piece];
        copyPiece[index] = isXTurn ? "X" : "O";
        setPiece(copyPiece);
        setIsXTurn(!isXTurn);
    }

    const checkWinner = () => {
        const winner = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for(let i of winner) {
            const[a,b,c] = i;
            if(piece[a] !== null && piece[a] === piece[b] && piece[a] === piece[c])
            {
                return piece[a];
            }         
        }
        return null;
    };

    const isWinner = checkWinner();
   

    const handleAgain = () => {
        setPiece(Array(9).fill(null));
        setIsXTurn(true);
    }

  return (
    <div className="board-container">
    {isWinner ? (
      <>
        <h3>
          Congratulations {isWinner} you won!
        </h3>
        <button className='btn' onClick={handleAgain}>Play Again</button>
      </>
    ) : (
      <>
        {piece.every((value) => value !== null) ? (
          <>
            <h3>Oops! It's a draw!</h3>
            <button className='btn' onClick={handleAgain}>Play Again</button>
          </>
        ) : (
          <>
            <h3>Hey! {isXTurn ? 'X' : 'O'} it's your turn. Please move</h3>
            <div className="board-row">
              <Square onClick={() => handleClick(0)} value={piece[0]}></Square>
              <Square onClick={() => handleClick(1)} value={piece[1]}></Square>
              <Square onClick={() => handleClick(2)} value={piece[2]}></Square>
            </div>
            <div className="board-row">
              <Square onClick={() => handleClick(3)} value={piece[3]}></Square>
              <Square onClick={() => handleClick(4)} value={piece[4]}></Square>
              <Square onClick={() => handleClick(5)} value={piece[5]}></Square>
            </div>
            <div className="board-row">
              <Square onClick={() => handleClick(6)} value={piece[6]}></Square>
              <Square onClick={() => handleClick(7)} value={piece[7]}></Square>
              <Square onClick={() => handleClick(8)} value={piece[8]}></Square>
            </div>
          </>
        )}
      </>
    )}
  </div>

  )
}
