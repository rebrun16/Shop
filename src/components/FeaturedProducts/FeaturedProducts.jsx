import React from 'react'
import Card from '../Card/Card';
import "./FeaturedProducts.scss";

const FeaturedProducts = ({type}) => {
  const data = [
    "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/783243/pexels-photo-783243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   ];
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis odit placeat similique eveniet ea corporis inventore, facere repellat quod labore rerum fuga voluptates reiciendis repudiandae veniam! Officia nesciunt excepturi saepe.
        </p>
      </div>
      <div className="bottom">
        {data.map(item => (
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts