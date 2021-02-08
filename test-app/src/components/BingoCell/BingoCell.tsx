import React from "react";
import styles from "./bingoCell.module.css";

interface BingoCellProps {
  selected: boolean;
  content: string | number;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const BingoCell: React.FC<BingoCellProps> = ({
  selected,
  content,
  onClick,
}) => {
  return (
    <div
      role="button"
      className={
        selected ? styles.cell + " " + styles.cellSelected : styles.cell
      }
      onClick={onClick}
    >
      <p>{content}</p>
    </div>
  );
};

export default BingoCell;
