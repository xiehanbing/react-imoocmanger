import JsonP from "jsonp";
import axios from "axios";
import Utils from "../utils/utils";
import Store from "../utils/Store";
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
          timeout: 5000,
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

  static requestList(_this, url, params) {
    var data = {
      params: params
    };
    this.ajax({
      url: url,
      data: data
    }).then(data => {
      if (data) {
        if (data.result && data.result.item_list) {
          _this.setState({
            items: data.result.item_list.map((item, index) => {
              item.key = index;
              return item;
            }),
            pagination: Utils.pagination(data, current => {
              _this.params.page = current;
              _this.requestList();
            }),
            selectedRowKeys: [],
            selectedItem: "",
            selectedIds: ""
          });
        }
      } else {
        alert("请求失败");
      }
    });
  }

  static ajax(options) {
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById("ajaxLoading");
      loading.style.display = "block";
    }
    //
    const baseApi = Utils.getEnvironmentUrl("DATA_URL");

    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: options.type || "get",
        baseURL: baseApi,
        timeout: 8000,
        params:
          (options.data && JSON.stringify(options.data.params || "")) || "",
        headers: {},
        withCredentials: true
      })
        .then(
          response => {
            if (options.data && options.data.isShowLoading !== false) {
              loading.style.display = "none";
            }
            if (response.status == "200") {
              const result = response.data;
              // 登录拦截
              if (result.code == "10008") {
                Store.clear();
                // hashHistory.push('/');
                return;
              } else if (
                result &&
                result.code &&
                result.code != 0 &&
                options.data.isShowErrorModal !== false
              ) {
                Utils.ui.alert({
                  text: result.error.message
                });
              }
              resolve(result);
            } else {
              reject(response.data);
            }
          },
          result => {
            console.log(":::" + result);
          }
        )
        .catch(error => {
          loading.style.display = "none";
          console.error(
            "EBike Request Error,",
            `Request Url：${error && error.config && error.config.url}`
          );
        });
    });
  }
}
