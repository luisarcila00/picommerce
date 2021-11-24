import httpClient from "../helpers/httpClient";

const END_POINT = '/api/products';

const products = {
  getProducts: () => httpClient.get(END_POINT),
  getById: (id) => httpClient.get(END_POINT + '/' + id),
  createUser: (user) => httpClient.post(END_POINT + '/create', user),
  editUser: (user, id) => httpClient.put(END_POINT + '/' + id, user),
  deleteUser: (code) => httpClient.get(END_POINT + '/' + code),
}
export {
  products
}