import cuid from 'cuid';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews
});

export default rootReducer;

export function manageRestaurants(state = [], action) {
    switch (action.type) {
      case 'ADD_RESTAURANT':
          const newRestaurant = {
              text: action.text,
              id: cuid()
          }
          return [...state, newRestaurant]
      case 'DELETE_RESTAURANT':
        return state.filter(restaurant => restaurant.id !== action.id)
      default:
          return state;
    }

}

export function manageReviews(state = [], action) {
    switch (action.type) {
        case 'ADD_REVIEW':
            const newReview = {
                text: action.review.text,
                restaurantId: action.review.restaurantId,
                id: cuid()
            }
            return [...state, newReview]
        case 'DELETE_REVIEW':
          return state.filter(review => review.id !== action.id)
        default:
            return state;
      }

}
