import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import yellow from '@material-ui/core/colors/yellow';


function Product({ title, image, price, rating }) {
    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon style={{fill: "gold"}}/>
                    ))}
                </div>
            </div>

            <img
                src={image}
            />

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
