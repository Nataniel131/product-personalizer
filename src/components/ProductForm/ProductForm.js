import styles from './ProductForm.module.scss';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';
import React, { useMemo } from 'react';

const ProductForm = props => {

  const price = useMemo(() => {
    const sizeObject = props.sizes.find((size) => size.name === props.currentSize);
    const newPrice = props.basePrice + sizeObject.additionalPrice;

    return newPrice;
  }, [props.currentSize]);

  const summary = (e) => {
    e.preventDefault();
    console.log(props.title);
    console.log(price);
    console.log(props.currentSize, props.currentColor);
  }

  return (
    <div>
      <header>
        <h2 className={styles.name}>{props.title}</h2>
        <span className={styles.price}>Price: {price}$</span>
      </header>
      <form onSubmit={(e) => summary(e)}>
        <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize}/>
        <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor}/>
        <Button className={styles.button}>
          <span className="fa fa-shopping-cart" />
        </Button>
      </form>
    </div>
  )
};

export default ProductForm;