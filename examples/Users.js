import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export class Users {
  static getAll() {
    // Solo debe devolver usuarios

    // Es ineficiente. Yo quiero testear SIN ALTERAR EL CODIGO ORIGINAL.
    // if (process.env.NODE_ENV === 'test') {
    //     // ...
    // }
    return axios.get(`${BASE_URL}/users`).then((res) => res.data);
  }
}
