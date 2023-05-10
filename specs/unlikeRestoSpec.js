import LikeButtonInitiator from '../src/utils/like-button-initiator';
import FavoriteResto from '../src/data/favorit-resto';

describe('remove from favorite', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="like_button"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteResto.putResto({id: 1});
  });

  afterEach(async () => {
    await FavoriteResto.deleteResto(1);
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like_button'),
      resto: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="hapus dari daftar favorit"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like_button'),
      resto: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="tambahkan ke favorit"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like_button'),
      resto: {
        id: 1,
      },
    });
    document.querySelector('[aria-label="hapus dari daftar favorit"]').dispatchEvent(new Event('click'));
    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like_button'),
      resto: {
        id: 1,
      },
    });

    await FavoriteResto.deleteResto(1);

    document.querySelector('[aria-label="hapus dari daftar favorit"]').dispatchEvent(new Event('click'));
    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });
});