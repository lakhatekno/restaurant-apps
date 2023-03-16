import Detail from '../views/detail';
import Favorite from '../views/favorite';
import Recommendation from '../views/recommendation';

const routes = {
  '/': Recommendation,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;