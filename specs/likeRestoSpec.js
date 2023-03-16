import LikeButtonInitiator from '../src/utils/like-button-initiator';
import FavoriteResto from '../src/data/favorit-resto';

describe('add-remove favorite restaurant', () => {
  const addLikeButton = () => {
    document.body.innerHTML = '<div id="like_button"></div>';
  };
  beforeEach(() => {
    addLikeButton();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like_button'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="tambahkan ke favorit"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like_button'),
      resto: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="hapus dari daftar favorit"]'))
      .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like_button'),
      resto: {
        id: 1,
      },
    });
 
    document.querySelector('#like_button').dispatchEvent(new Event('click'));
    
    const movie = await FavoriteResto.getResto(1);
    expect(movie).toEqual({id: 1});
 
    FavoriteResto.deleteResto(1);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like_button'),
      resto: {
        id: 1,
      },
    });

    await FavoriteResto.putResto({id: 1});

    document.querySelector('#like_button').dispatchEvent(new Event('click'));

    expect(await FavoriteResto.getAllResto()).toEqual([{id: 1}]);
    FavoriteResto.deleteResto(1);
  });
});
