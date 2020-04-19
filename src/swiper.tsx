import React, {Component} from 'react';
import ReactSwiper from 'reactjs-swiper';
//@ts-ignore
import tu1 from './img/tu1.jpg'
//@ts-ignore
import fui from './img/fui.jpg'
//@ts-ignore
import iot from './img/iot.jpg'
//@ts-ignore
import network from './img/network.jpg'




const ReactSwiperExample:React.FC = () => {
  const items = [{
    image: tu1,
    title: '图片1',
  }, {
    image: fui,
    title: '图片2',
  }, {
    image: iot,
    title: '图片3',
  }, {
    image: network,
    title: '图片4',
  }];

  const swiperOptions = {
    preloadImages: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false
  };
  return (
    <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}
                 className="swiper-example" />
  );
};

export default ReactSwiperExample
