import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import {addItemToCart} from '../../redux/cart/cart.actions';
import {withRouter} from 'react-router-dom';
import './collection-item.styles.scss';

const CollectionItem = ({item, history, match}) =>{ 
  console.log(item);
  const {name, price, imageUrl} = item;
  return (
  <div className='collection-item'>
    <div className='image'
      style={{
        backgroundImage:`url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>${price} USD</span>
    </div>
    <CustomButton inverted onClick={() => history.push(`${match.url}/${name.toLowerCase()}`)}>Details</CustomButton>
  </div>
)}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));