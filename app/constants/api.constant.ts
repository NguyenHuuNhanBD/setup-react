export const API_ENDPOINT = {
  AUTH: 'auth',
  CART: 'carts'
}

export const API_AUTH = {
  LOGIN: {
    URL: `${API_ENDPOINT.AUTH}/login`,
    KEY: [API_ENDPOINT.AUTH, 'login']
  },
  REGISTER: {
    URL: `${API_ENDPOINT.AUTH}/register`,
    KEY: [API_ENDPOINT.AUTH, 'register']
  }
}

export const API_CART = {
  ADD_TO_CART: {
    URL: 'add-to-cart',
    KEY: [API_ENDPOINT.CART, 'addToCart']
  }
}
