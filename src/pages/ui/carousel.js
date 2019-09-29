import React from "react";
import { Card, Carousel } from "antd";
import Slider from "react-slick";
import "./ui.less";
export default class Carousels extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="ui-wrap">
        <Card title="文字背景轮播" className="card-wrap">
          <Carousel autoplay effect="fade">
            <div>
              <h3>Ant Motion Banner - React</h3>
            </div>
            <div>
              <h3>Ant Motion Banner - Vue</h3>
            </div>
            <div>
              <h3>Ant Motion Banner - Angular</h3>
            </div>
          </Carousel>
        </Card>

        <Card title="图片轮播" className="slider-wrap">
          <Carousel autoplay>
            <div>
              <img src="./assets/carousel-img/carousel-1.jpg"></img>
            </div>
            <div>
              <img src="./assets/carousel-img/carousel-2.jpg"></img>
              <span>123</span>
            </div>
            <div>
              <img src="./assets/carousel-img/carousel-3.jpg"></img>
            </div>
          </Carousel>
        </Card>
      </div>
    );
  }
}
