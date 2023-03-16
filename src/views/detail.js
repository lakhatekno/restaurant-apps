import GetRestaurant from '../data/data-source';
import UrlParser from '../routes/url-parser';
import LikeButtonInitiator from '../utils/like-button-initiator';
import '../templates/detail-template.js';
import '../templates/review-card.js';

const Detail = {
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await GetRestaurant.getRestaurantDetail(url.id);
    const container = document.querySelector('#content_body');
    const detail = document.createElement('restaurant-detail');
    detail.setAttribute('resto-id', `${restaurant.id}`);
    detail.setAttribute('resto-name', `${restaurant.name}`);
    detail.setAttribute('imageID', `${restaurant.pictureId}`);
    detail.setAttribute('address', `${restaurant.address}`);
    detail.setAttribute('city', `${restaurant.city}`);
    detail.setAttribute('rate', `${restaurant.rating}`);
    detail.setAttribute('desc', `${restaurant.description}`);
    container.appendChild(detail);
    const menuMakan = container.querySelector('#menu_makan');
    const menuMinum = document.querySelector('#menu_minum');
    restaurant.menus.foods.forEach( (food) => {
      menuMakan.querySelector('p').innerHTML += `${food.name}, `;
    });
    
    restaurant.menus.drinks.forEach( (drink) => {
      menuMinum.querySelector('p').innerHTML += `${drink.name}, `;
    });

    const reviewContainer = document.querySelector('#reviews_container');
    restaurant.customerReviews.forEach( (review) => {
      const reviewCard = document.createElement('review-card');
      reviewCard.setAttribute('nama', `${review.name}`);
      reviewCard.setAttribute('komentar', `${review.review}`);
      reviewCard.setAttribute('tanggal', `${review.date}`);
      reviewContainer.appendChild(reviewCard);
    });
    document.querySelector('#content_header').innerText = 'Informasi Restoran';
    console.log(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like_button'),
      resto: {
        id: restaurant.id,
        name: restaurant.name,
        picture: restaurant.pictureId,
        city: restaurant.city,
        description: restaurant.description,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;