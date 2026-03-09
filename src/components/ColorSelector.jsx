import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";
import styles from "./ColorSelector.module.css";

const ColorSelector = () => {
  const { color, setColor } = useContext(ColorContext);

  return (
    <div className={styles.colorSelector}>
      <span>Color de nuevas notas:</span>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default ColorSelector;