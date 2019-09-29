import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";
import Login from "./pages/form/login";
import Admin from "./Admin";
import Buttons from "./pages/ui/buttons";
import NoMatch from "./pages/nomatch";
import Modals from "./pages/ui/modals";
import Loadings from "./pages/ui/loadings";
import Notification from "./pages/ui/notification";
import Message from "./pages/ui/message";
import Tabs from "./pages/ui/tabs";
import Gallery from "./pages/ui/gallery";
import Carousel from "./pages/ui/carousel";
import Register from "./pages/form/register";
import BasicTable from "./pages/table/basicTable";
import Home from "./pages/home/index";
import HighTable from "./pages/table/highTable";
import RichText from "./pages/rich/index";
import City from "./pages/city/index";

import BarChart from "./pages/charts/bar";
import PieChart from "./pages/charts/pie";
import LineChart from "./pages/charts/line";

import BikeMap from "./pages/map/bikeMap";

import OrderIndex from "./pages/order/index";
import UserIndex from "./pages/user/index";

import Permission from "./pages/permission/index";
export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login}></Route>
          <Route
            path="/"
            render={() => (
              <Admin>
                <Switch>
                  <Route path="/admin/home" component={Home}></Route>
                  <Route path="/admin/ui/buttons" component={Buttons}></Route>
                  <Route path="/admin/ui/modals" component={Modals}></Route>
                  <Route path="/admin/ui/loading" component={Loadings}></Route>
                  <Route
                    path="/admin/ui/notifitaion"
                    component={Notification}
                  ></Route>
                  <Route path="/admin/ui/message" component={Message}></Route>
                  <Route path="/admin/ui/tabs" component={Tabs}></Route>
                  <Route path="/admin/ui/gallery" component={Gallery}></Route>
                  <Route path="/admin/ui/carousel" component={Carousel}></Route>
                  <Route path="/admin/form/login" component={Login}></Route>
                  <Route
                    path="/admin/form/register"
                    component={Register}
                  ></Route>
                  <Route
                    path="/admin/form/register"
                    component={Carousel}
                  ></Route>
                  <Route
                    path="/admin/table/basic"
                    component={BasicTable}
                  ></Route>

                  <Route path="/admin/table/high" component={HighTable}></Route>
                  <Route path="/admin/rich" component={RichText}></Route>
                  <Route path="/admin/city" component={City}></Route>
                  <Route path="/admin/charts/bar" component={BarChart}></Route>

                  <Route path="/admin/charts/pie" component={PieChart}></Route>
                  <Route
                    path="/admin/charts/line"
                    component={LineChart}
                  ></Route>

                  <Route path="/admin/carmap" component={BikeMap}></Route>
                  <Route path="/admin/order" component={OrderIndex}></Route>
                  <Route path="/admin/employee" component={UserIndex}></Route>
                  <Route path="/admin/auth" component={Permission}></Route>
                  {/* <Route component={NoMatch}></Route> */}
                  <Redirect to="/admin/home" />
                </Switch>
              </Admin>
            )}
          ></Route>
          <Route path="/order/detail" component={Login}></Route>
        </App>
      </HashRouter>
    );
  }
}
