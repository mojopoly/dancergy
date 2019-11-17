import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';
import './collection.styles.scss';
import {addItemToCart} from '../../redux/cart/cart.actions';
import CustomButton from '../../components/custom-button/custom-button.component';
import { Link } from 'react-router-dom';

const CollectionPage = ({collection, addItemToCart}) => {
  //console.log(collection);
  const {title, items} = collection;
  return(
  <div className="collection-page">
    <h2 className="title">{title}</h2>
    <div className="items">
    <div className='collection-item'>
    <div className='image'
      style={{
        backgroundImage:`url(${collection.items[0].imageUrl})`
      }}
    />
    </div>
    <div className='collection-footer'>
      <h3 className='name'>{collection.items[0].name}</h3>
      <h3 className='price'>${collection.items[0].price} USD</h3>
    </div>
    <h3 className="description">{collection.items[0].description}</h3>  

    <div className="shop-details">
      <div className="add-to-cart">
        <CustomButton inverted onClick={() => addItemToCart(collection.items[0],)}>Add to Cart</CustomButton>
      </div>
      <div className="checkout">
        <Link to='/checkout'>
          <CustomButton inverted>Checkout</CustomButton>
        </Link>
      </div>
    </div>
    </div>
  </div>
)}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);