const routes = {
  LANDING_PAGE(){
    return '/';
  },
  ABOUT() {
    return '/about';
  },
  LOGIN() {
    return '/login';
  },
  REGISTER() {
    return '/register';
  },
  CARD_PAGE() {
    return `/card`;
  },
  LOGIN_PETANI() {
    return '/login-petani';
  },
  LOGIN_ADMIN() {
    return '/login-admin';
  },
  DASBOARD_ADMIN() {
    return '/dashboard-admin';
  },
  DASBOARD_PETANI() {
    return '/dashboard-petani';
  },
  CREATE_PRODUCT() {
    return '/create-product';
  },
  CHECKOUT(){
    return '/checkout';
  },
  CHART(){
    return '/cart';
  },
  REGISTER_PETANI() {
    return '/register-petani';
  },
  CONTACT() {
    return '/kontak-kami';
  },
  PROFILE() {
    return '/profile';
  }
}

export default routes 