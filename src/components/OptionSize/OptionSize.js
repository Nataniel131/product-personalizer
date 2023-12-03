import styles from './OptionSize.module.scss';

const OptionSize = props => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map(size => 
          <li key={size.name}><button type="button" className={size.name === props.currentSize ? styles.active : ''} onClick={() => props.setCurrentSize(size.name)}>{size.name}</button>
        </li>)
        }
      </ul>
    </div>
  )
};

export default OptionSize;