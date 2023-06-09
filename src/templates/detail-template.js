import CONFIG from '../global/config';

const pictureUrl = CONFIG.PICT_URL;

class RestaurantDetail extends HTMLElement {
  connectedCallback() {
    const id = this.getAttribute('resto-id');
    const name = this.getAttribute('resto-name');
    const img = this.getAttribute('imageID');
    const address = this.getAttribute('address');
    const city = this.getAttribute('city');
    const rate = this.getAttribute('rate');
    const description = this.getAttribute('desc');

    this.innerHTML = `
      <div class="info">
        <div class="detail-picture">
          <button id="like_button" tabindex="0" resto-id="${id}"></button>
          <img src="${pictureUrl+img}" alt="${name}">
        </div>
        <div class="detail-info">
          <h3 tabindex="0">${name}</h3>
          <div class="rating-location">
            <div class="location">  
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 11m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
              </svg>
              <p id="address" tabindex="0">${address}, ${city}</p>
            </div>
            <div class="rate">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
              </svg>
              <p tabindex="0" aria-label="rating">${rate}</p>
            </div>
          </div>
          <p class="" tabindex="0">${description}</p>
          <div class="menu-restoran">
            <div id="menu_makan">
              <h4 tabindex="0">Makanan :</h4>
              <p tabindex="0"></p>
            </div>
            <div id="menu_minum">
              <h4 tabindex="0">Minuman :</h4>
              <p tabindex="0"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="reviews">
        <h3 tabindex="0">Review Pelanggan :</h3>
        <div id="reviews_container"></div>
      </div>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);