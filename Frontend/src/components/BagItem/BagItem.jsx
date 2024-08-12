import React, { useContext } from 'react'
import './BagItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const BagItem = ({ id, name, price, description, image }) => {
    const url = "http://localhost:4000";
    
    const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);

    return (
        <div className='bag-item'>
            <div className="bag-item-img-container">
                <img className="bag-item-image" src={url+"/images/"+image} alt="" />
                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                    : <div className='bag-item-counter'>
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="bag-item-info">
                <div className="bag-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="bag-item-desc">{description}</p>
                <p className="bag-item-price">${price}</p>
            </div>

        </div>
    )
}

export default BagItem
