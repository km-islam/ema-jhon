import banner from "../../assets/images/banner.png";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-container">
          <div className="banner-content">
            <span>Lorem, ipsum dolor.</span>
            <h1>New Collection For Fall</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur ipsa architecto, placeat cumque quos ratione.
            </p>
            <a href="#">Shop Now</a>
          </div>
          <div className="banner-img">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
