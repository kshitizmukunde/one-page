import Boy from "../../../public/boy.png";
import Design from "../../../public/design.png";
import "./banner.css";

import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const imagesList = [
  {
    id: 1,
    src: image1,
    alt: "Image 1",
  },
  {
    id: 2,
    src: image2,
    alt: "Image 2",
  },
  {
    id: 3,
    src: image3,
    alt: "Image 3",
  },
];

const ImagesComponent = () => {
  return (
    <>
      {imagesList.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} />
      ))}
    </>
  );
}

const Banner = () => {
  return (
    <div id="banner">
        <div className='banner-section lg:mb-25 md:mb-25'>
            <h1 className="main-head text-center">I AM A <img src={Boy} alt="boy"/> FREELANCE DESIGNER <img src={Design} alt='design'/> FROM SAN FRANCISCO</h1>
        </div>
        <div className='ban-second'>
          <div className='images-col'>
              <ImagesComponent />
          </div>
          <div className='text-col'>
            <p className='lg:text-left md:text-center sm:text-center text-center'>Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.</p>
          </div>
        </div>
    </div>
  )
}

export default Banner