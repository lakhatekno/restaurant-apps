import CONFIG from '../global/config';

const URL = CONFIG.API_ENDPOINT;

class GetRestaurant {
  static async getRestaurantList() {
    const response = await fetch(`${URL}/list`, {method: 'GET'});
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }
  
  static async getRestaurantDetail(id) {
    const response = await fetch(`${URL}/detail/${id}`, {method: 'GET'});
    const responseJSON = await response.json();
    return responseJSON.restaurant;
  }
  
  static async searchRestaurant(query) {
    const response = await fetch(`${URL}/search?q=${query}`, {method: 'GET'});
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }
}

export default GetRestaurant;