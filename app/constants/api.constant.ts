export const API_ENDPOINT = {
  AUTH: 'auth',
  CART: 'carts',
  INTRODUCE: 'introduce'
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

export const API_INTRODUCE = {
  GET_LIST: {
    URL: `${API_ENDPOINT.INTRODUCE}`,
    KEY: [API_ENDPOINT.INTRODUCE, 'getList']
  },
  CREATE: {
    URL: `${API_ENDPOINT.INTRODUCE}`,
    KEY: [API_ENDPOINT.INTRODUCE, 'create']
  }
}
