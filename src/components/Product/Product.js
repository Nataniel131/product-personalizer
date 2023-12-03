import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import { useState } from 'react';

const Product = props => {
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} />
      <ProductForm title={props.title} basePrice={props.basePrice} sizes={props.sizes} colors={props.colors} currentSize={currentSize} currentColor={currentColor} setCurrentSize={setCurrentSize} setCurrentColor={setCurrentColor}/>
    </article>
  )
};

export default Product;