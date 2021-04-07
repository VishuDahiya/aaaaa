import { DATA_API, SEARCH_API } from "../../config/urls";
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