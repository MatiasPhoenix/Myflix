/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import img00 from "../assets/Images/media0.webp";
import img01 from "../assets/Images/media1.jpg";
import img02 from "../assets/Images/media2.webp";
import img03 from "../assets/Images/media3.webp";
import img04 from "../assets/Images/media4.jpg";
import img05 from "../assets/Images/media5.webp";
import img06 from "../assets/Images/media6.jpg";
import img07 from "../assets/Images/media7.webp";
import img08 from "../assets/Images/media8.webp";
import img09 from "../assets/Images/media9.jpg";
import img10 from "../assets/Images/media10.jpg";
import img11 from "../assets/Images/media11.jpg";
import img12 from "../assets/Images/media12.jpg";
import img13 from "../assets/Images/media13.jpg";
import img14 from "../assets/Images/media14.webp";
import img15 from "../assets/Images/media15.jpg";
import img16 from "../assets/Images/media16.webp";
import img17 from "../assets/Images/media17.jpg";
import img18 from "../assets/Images/media18.jpg";
import img19 from "../assets/Images/media19.webp";
import img20 from "../assets/Images/media20.jpg";
import img21 from "../assets/Images/media21.webp";
import img22 from "../assets/Images/media22.webp";
import img23 from "../assets/Images/media23.webp";
import img24 from "../assets/Images/media24.jpg";
import img25 from "../assets/Images/media25.webp";
import img26 from "../assets/Images/media26.webp";
import img27 from "../assets/Images/media27.jpg";
import img28 from "../assets/Images/media28.jpg";
import img29 from "../assets/Images/media29.jpg";
import img30 from "../assets/Images/media30.jpg";
import img31 from "../assets/Images/media31.webp";
import img32 from "../assets/Images/media32.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-responsive-carousel";

// interface AssetImg {
//     id: string;
//     imgURL: string;
// }

const ImgDB: React.FC = () => {
  // const gallery: AssetImg[] = [
  //     { id: '00', imgURL: '../public/Immages/media0.webp'},
  //     { id: '01', imgURL: '../public/Immages/media1.jpg'},
  //     { id: '02', imgURL: '../public/Immages/media2.webp'},
  //     { id: '03', imgURL: '../public/Immages/media3.webp'},
  //     { id: '04', imgURL: '../public/Immages/media4.jpg'},
  //     { id: '05', imgURL: '../public/Immages/media5.webp'},
  //     { id: '06', imgURL: '../public/Immages/media6.jpg'},
  //     { id: '07', imgURL: '../public/Immages/media7.webp'},
  //     { id: '08', imgURL: '../public/Immages/media8.webp'},
  //     { id: '09', imgURL: '../public/Immages/media9.jpg'},
  //     { id: '10', imgURL: '../public/Immages/media10.jpg'},
  //     { id: '11', imgURL: '../public/Immages/media11.jpg'},
  //     { id: '12', imgURL: '../public/Immages/media12.jpg'},
  //     { id: '13', imgURL: '../public/Immages/media13.jpg'},
  //     { id: '14', imgURL: '../public/Immages/media14.webp'},
  //     { id: '15', imgURL: '../public/Immages/media15.jpg'},
  //     { id: '16', imgURL: '../public/Immages/media16.webp'},
  //     { id: '17', imgURL: '../public/Immages/media17.jpg'},
  //     { id: '18', imgURL: '../public/Immages/media18.jpg'},
  //     { id: '19', imgURL: '../public/Immages/media19.webp'},
  //     { id: '20', imgURL: '../public/Immages/media20.jpg'},
  //     { id: '21', imgURL: '../public/Immages/media21.webp'},
  //     { id: '22', imgURL: '../public/Immages/media22.webp'},
  //     { id: '23', imgURL: '../public/Immages/media23.webp'},
  //     { id: '24', imgURL: '../public/Immages/media24.jpg'},
  //     { id: '25', imgURL: '../public/Immages/media25.webp'},
  //     { id: '26', imgURL: '../public/Immages/media26.webp'},
  //     { id: '27', imgURL: '../public/Immages/media27.jpg'},
  //     { id: '28', imgURL: '../public/Immages/media28.jpg'},
  //     { id: '29', imgURL: '../public/Immages/media29.jpg'},
  //     { id: '30', imgURL: '../public/Immages/media30.jpg'},
  //     { id: '31', imgURL: '../public/Immages/media31.webp'},
  //     { id: '32', imgURL: '../public/Immages/media32.jpg'},

  // ]
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    
  };

  const gallery = [
    img00,
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
  ];

  return (
    <>
      <div className="myCarousel">
        <Slider {...settings}>
          {gallery.map((image) => (
            <div key={image}>
              <img
                className="m-1"
                src={image}
                width={300}
                height={300}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>

    </>
  );
};

export default ImgDB;
