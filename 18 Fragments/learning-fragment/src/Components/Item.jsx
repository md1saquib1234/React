import styles from './Item.module.css';

const Item = ({foodItem}) => {
 console.log(styles);
return  ( 
<li  className={`${styles['kg-item']}`}>
  <span className={styles['kg-span']}>{foodItem}</span>
  </li>
);

};

export default Item;