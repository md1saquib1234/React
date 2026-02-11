import styles from "./FoodInput.module.css";

const FoodInput = () => {

  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.FoodInput}
    />
  );

}

export default FoodInput;