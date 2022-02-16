import React from 'react';

function Card(props) {
  return (
    <div className='card'>
      <img src={props.item.imageUrl} alt='Mount Fuji' className='card__img' />

      <div className='card__info'>
        <div className='card__info--location'>
          <img
            src='./images/location__icon.svg'
            alt='location icon'
            className='location__icon'
          />
          <p className='card__info--location-country'>{props.item.location}</p>

          <a
            href={props.item.googleMapsUrl}
            className='card__info--location-link'
          >
            View on Google Maps
          </a>
        </div>

        <h1 className='card__title'>{props.item.title}</h1>
        <h4 className='card__date'>
          {props.item.startDate} - {props.item.endDate}
        </h4>
        <p className='card__text'>{props.item.description}</p>
      </div>
    </div>
  );
}

export default Card;
