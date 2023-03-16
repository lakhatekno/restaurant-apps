import GetRestaurant from '../data/data-source';
import '../templates/card.js';

const Recommendation = {
  async afterRender() {
    const restaurants = await GetRestaurant.getRestaurantList();
    console.log(restaurants);
    const container = document.querySelector('#content_body');
    const contentHeader = document.querySelector('#content_header');
    contentHeader.innerText = 'Restoran Rekomendasi Untuk Anda';
    restaurants.forEach( (restaurant) => {
      const card = document.createElement('recommendation-card');
      card.setAttribute('name', `${restaurant.name}`);
      card.setAttribute('desc', `${restaurant.description}`);
      card.setAttribute('img', `${restaurant.pictureId}`);
      card.setAttribute('loc', `${restaurant.city}`);
      card.setAttribute('rate', `${restaurant.rating}`);
      card.setAttribute('item-id', `${restaurant.id}`);
      container.appendChild(card);
    });
  },
};

export default Recommendation;