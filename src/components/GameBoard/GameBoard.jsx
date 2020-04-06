import React from 'react';
import GuessRow from '../GuessRow/GuessRow';
import styles from './Gameboard.module.css';

const GameBoard = (props) => (
    <div className={styles.GameBoard}>
        {props.guesses.map((guess,idx) =>
            <GuessRow 
                guess={guess}
                handlePegClick={props.handlePegClick}
                colors={props.colors}
                rowIdx={idx}
                key={idx}
                currentGuess={idx === (props.guesses.length - 1)}
                handleScoreClick={props.handleScoreClick}
            />
        )}
    </div>
);

export default GameBoard;