const NAVBAR_MENU_ALL = (state, navbarMenu) => {
  if (navbarMenu.data['code'] === 1) {
    state.navbarMenu = navbarMenu.data['data']
    state.status = 'success'
  } else {
    state.status = 'error'
  }
}
export default {
  NAVBAR_MENU_ALL
}