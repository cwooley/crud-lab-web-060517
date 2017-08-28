import cuid from 'cuid';
export const cuidFn = cuid;
let newRestaurants

export default function manageRestaurants(state = {restaurants: []}, action) {
  console.log('cuid', cuid())
  switch (action.type) {
    case "CREATE_RESTAURANT":
      let newRestaurant = {text: action.payload, reviews: [], id:  cuid()}
      return {restaurants: [ ...state.restaurants, newRestaurant]}
    case "DELETE_RESTAURANT":
      newRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {restaurants: newRestaurants}
    case "CREATE_REVIEW":
      newRestaurants = state.restaurants
      console.log(newRestaurants[newRestaurants.indexOf(action.payload.restaurant)])
      newRestaurants[newRestaurants.indexOf(action.payload.restaurant)].reviews.push(action.payload.review)
      return {restaurants: newRestaurants}
    case "DELETE_REVIEW":
      newRestaurants = state.restaurants
      let newReviews = newRestaurants[newRestaurants.indexOf(action.payload.restaurant)].reviews.filter(review => review !== action.payload.review)
      console.log('new reviews', newReviews)
      newRestaurants[newRestaurants.indexOf(action.payload.restaurant)].reviews = newReviews
      return {restaurants: newRestaurants}
    default:
      return state
  }
}
