import JsonP from "jsonp";
/**
 *axios 跨域请求
 *Promise 链式调用 无需在 success 里回调
 * @export
 * @class Axios
 */
export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(
        options.url,
        {
          param: "callback"
        },
        function(err, response) {
          if (response == null) return null;
          if (response.status == "success") {
            resolve(response);
          } else {
            reject(response.message);
          }
        }
      );
    });
  }
}
