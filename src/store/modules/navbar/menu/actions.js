//actions
import axios from 'axios';

const navbarMenuAll = (context) => {
  //url = endpoint Api lumen/laravel
  let url = 'http://localhost:8000/getNavbarMenu'
  let data = "{ 'userEmail': 'DANIEL.GARCIA' }"
  return axios.post(url, data)
    .then(response => {
      context.commit('NAVBAR_MENU_ALL', response)
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default {
  navbarMenuAll
}