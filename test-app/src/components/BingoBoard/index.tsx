import React, { useEffect, useState } from "react";
import BingoCell from "../BingoCell/BingoCell";
import styles from "./bingoBoard.module.css";

const BingoBoard = () => {
  const [bingoBoardState, setBingoBoardState] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [bingoBoardContent, setBingoBoardContent] = useState<Array<number>>(
    Array.from({ length: 16 }, () => Math.floor(Math.random() * 100))
  );

  const [bingoRows, setBingoRows] = useState([false, false, false, false]);
  const [bingoCols, setBingoCols] = useState([false, false, false, false]);
  const [showBingo, setShowBingo] = useState(false);

  const updateBingoBoard = (index: number) => {
    let board = [...bingoBoardState];
    board[index] = !board[index];
    setBingoBoardState(board);
  };

  useEffect(() => {
    const checkBingoRows = () => {
      bingoRows.forEach((row, i) => {
        if (
          !row &&
          bingoBoardState[i] &&
          bingoBoardState[i + 4] &&
          bingoBoardState[i + 8] &&
          bingoBoardState[i + 12]
        ) {
          let rows = [...bingoRows];
          rows[i] = !rows[i];
          setBingoRows(rows);
          setShowBingo(true);
        }
      });
    };

    const checkBingoCols = () => {
      bingoCols.forEach((col, i) => {
        if (
          !col &&
          bingoBoardState[i * 4] &&
          bingoBoardState[i * 4 + 1] &&
          bingoBoardState[i * 4 + 2] &&
          bingoBoardState[i * 4 + 3]
        ) {
          let cols = [...bingoCols];
          cols[i] = !cols[i];
          setBingoCols(cols);
          setShowBingo(true);
        }
      });
    };

    checkBingoCols();
    checkBingoRows();
  }, [bingoBoardState, bingoCols, bingoRows]);

  return (
    <div className={styles.bingoBoard}>
      {showBingo && (
        <div
          className={styles.bingoOverlay}
          onClick={() => setShowBingo(false)}
        >
          <h1 className={styles.bingoText}>Bingo!</h1>
        </div>
      )}
      {bingoBoardContent.map((cell, index) => (
        <BingoCell
          key={index}
          selected={bingoBoardState[index]}
          content={bingoBoardContent[index]}
          onClick={() => updateBingoBoard(index)}
        />
      ))}
    </div>
  );
};

export default BingoBoard;
