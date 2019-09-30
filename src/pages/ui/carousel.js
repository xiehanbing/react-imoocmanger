import React from "react";
import { Card, Carousel, Icon } from "antd";
import Slider from "react-slick";
import "./ui.less";
export default class Carousels extends React.Component {
  prev = () => {
    this.slider.slick.slickPrev();
  };
  next = () => {
    this.slider.slick.slickNext();
  };
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

    return (
      <div className="ui-wrap">
        <Card title="文字背景轮播" className="card-wrap">
          <Carousel
            autoplay
            effect="fade"
            dots={true}
            ref={el => (this.slider = el)}
          >
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
          {/* <Icon type="left-circle" onClick={this.prev} /> */}
          <Carousel {...settings} ref={el => (this.slider = el)}>
            <div>
              <img src="./assets/carousel-img/carousel-1.jpg"></img>
            </div>
            <div>
              <div style={{ float: "left" }}>
                <img src="./assets/carousel-img/carousel-2.jpg"></img>
              </div>
              <div style={{ float: "right", color: "white" }}>
                <span>123</span>
              </div>
            </div>
            <div>
              <img src="./assets/carousel-img/carousel-3.jpg"></img>
            </div>
          </Carousel>

          {/* <Icon type="right-circle" onClick={this.next} /> */}
        </Card>
      </div>
    );
  }
}
