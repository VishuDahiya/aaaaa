import { CHAT_API, DATA_API, SEARCH_API, GET_USER_MESSAGE } from "../../config/urls";
import { apiGet, apiPost } from "../../utils/utils";

export const dataAPi = (data) => {
  return new Promise((resolve, reject) =>
    apiPost(DATA_API, data).then(res => {
      resolve(res)
    }
    ).catch(error => {
      reject(error);
    })
  )
}
export function searchUser(query) {
  return apiGet(`${SEARCH_API}${query}`);
}

export function userMessage(query) {
  return apiGet(`${CHAT_API}${query}`);
}


export function getUserMessgeOneToOne(query = '') {
  return apiGet(GET_USER_MESSAGE + query);
}

// export const searchApi = (data) => {
//   return new Promise((resolve, reject) => {
//     apiGet(SEARCH_API, data).then(res => {
//       console.log(res);
//       resolve(res);
//     }).catch(error => {
//       console.log(error);
//       reject(error);
//     })
//   })
// }
