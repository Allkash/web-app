import { useState } from 'react';

export default function Board() {
    const [boardValue,setBoardValue]=useState(
    ['_','_','_','_','_','_','_','_','_']
    );
    const winner =calculateWinner(boardValue);
    let status;
    if(winner)
    {
        status="Winner "+ winner;
    }
    const[state,setState]=useState(true);
    
    function handleClick(order){
            const copyboard =boardValue.slice();
            if(copyboard[order]==='_' && !calculateWinner(boardValue))
            {
                if(state)
                    {
                    copyboard[order]='X';
                    }
                else
                    {
                    copyboard[order]='O';
                    }
                setState(!state);
                setBoardValue(copyboard);
            }
    }
    return (
        <>
        <div className="status">{status}</div>
        <div className="row">
            <Square
                value={boardValue[0]}
                onSquareClick={() => handleClick(0)}
            />
            <Square
                value={boardValue[1]}
                onSquareClick={() => handleClick(1)}
            />
            <Square
                value={boardValue[2]}
                onSquareClick={() => handleClick(2)}
            />
        </div>
        <div className="row">
            <Square
                value={boardValue[3]}
                onSquareClick={() => handleClick(3)}
            />
            <Square
                value={boardValue[4]}
                onSquareClick={() => handleClick(4)}
            />
            <Square
                value={boardValue[5]}
                onSquareClick={() => handleClick(5)}
            />
        </div>
        <div className="row">
            <Square
                value={boardValue[6]}
                onSquareClick={() => handleClick(6)}
            />
            <Square
                value={boardValue[7]}
                onSquareClick={() => handleClick(7)}
            />
            <Square
                value={boardValue[8]}
                onSquareClick={() => handleClick(8)}
            />
        </div>
    </>
    );
}
    function Square({value,onSquareClick}){
        return( 
            <button className="square" onClick={onSquareClick}>
            {value}
            </button>
        );
    } 

    function calculateWinner(boardValue)
    {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for(let i=0; i< lines.length;i++)
            {
                const[a,b,c]= lines[i];
                if(boardValue[a]!=='_' && boardValue[a]===boardValue[b] &&boardValue[a]===boardValue[c])
                    {
                        return boardValue[a];
                    } 

        }
        return null;
    }
