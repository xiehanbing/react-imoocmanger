import axios from "./../axios/index";
let LocationFun = {
  getLocationBySina() {
    axios
      .jsonp({
        url: "http://pv.sohu.com/cityjson?ie=utf-8"
      })
      .then(res => {
        console.log(res);
      });
  },
  getLocation() {
    if (navigator.geolocation) {
      console.log("enter navigator.geolocation");
      console.log(navigator.geolocation);
      navigator.geolocation.getCurrentPosition(
        LocationFun.showPosition,
        LocationFun.showLocationError,
        {
          enableHighAccuracy: true,
          timeout: 50000,
          maximumAge: 3000
        }
      );
    }
  },
  showPosition(position) {
    console.log("-----enter show position--------");
    if (position == null) return null;
    console.log(position);
    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
  },
  showLocationError(error) {
    console.log("-----enter show error--------");
    console.log(error);
    var errorMessage = "";
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = "用户拒绝对获取地理位置的请求。";
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = "位置信息是不可用的。";
        break;
      case error.TIMEOUT:
        errorMessage = "请求用户地理位置超时。";
        break;
      case error.UNKNOWN_ERROR:
        errorMessage = "未知错误。";
        break;
    }
    console.log(errorMessage);
    return errorMessage;
  }
};
export default LocationFun;
