import FavoriteResto from '../data/favorit-resto';
import '../templates/card.js';

const Favorite = {
  async afterRender() {
    const container = document.querySelector('#content_body');
    const contentHeader = document.querySelector('#content_header');
    contentHeader.innerText = 'Restoran Favorit Anda';
    const favorites = await FavoriteResto.getAllResto();
    console.log(favorites);
    if (favorites.length === 0) {
      const emptyFavorite = document.createElement('p');
      emptyFavorite.className = 'center';
      emptyFavorite.innerText = 'Anda belum menambahkan satu pun restoran ke daftar favorit.';
      container.appendChild(emptyFavorite);
    } else {
      favorites.forEach( (favorite) => {
        const card = document.createElement('recommendation-card');
        card.setAttribute('name', `${favorite.name}`);
        card.setAttribute('desc', `${favorite.description}`);
        card.setAttribute('img', `${favorite.picture}`);
        card.setAttribute('loc', `${favorite.city}`);
        card.setAttribute('rate', `${favorite.rating}`);
        card.setAttribute('item-id', `${favorite.id}`);
        container.appendChild(card);
      });
    }
  },
};

export default Favorite;