import Cookies from 'js-cookie'
export function getToken () {
  return Cookies.get('a')
}

export function setToken (token) {
  return Cookies.set('a', token,)
}

export function removeToken () {
  return Cookies.remove('a')
}
