import "./welcomePage.scss";
import { TypeAnimation } from "react-type-animation";
import imageWithChildOnFloor from "../../assets/images/imageWithChildOnFloor.jpg";
import roomPicture1 from "../../assets/images/roomPicture1.jpg";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="welcomePage">
      <div className="welcomeHeader">
        <div className="welcomeHeaderTexts">
          <TypeAnimation
            sequence={[
              "Discover personalized speech therapy for your child's unique needs at Fluent Friends. Improve communication skills with our dedicated specialist.",
            ]}
            cursor={false}
            wrapper="span"
            speed={80}
            style={{ fontSize: "2em" }}
          />
          <br />
          <Link to="/about">
            <TypeAnimation
              sequence={[3300, " Click here to learn more."]}
              cursor={false}
              wrapper="span"
              speed={80}
              style={{ fontSize: "2em" }}
            />
          </Link>
        </div>
        <img src={imageWithChildOnFloor} alt="imageWithChildOnFloor" />
      </div>
      <div className="welcomeContent">
        <div className="lowerImage">
          <img src={roomPicture1} alt="roomPicture1" />
        </div>
        <div className="lowerText">
          <TypeAnimation
            sequence={[3700, 
              "Unlock your communication potential. Schedule your initial consultation today. Let's embark on this journey towards clearer, confident communication. Your voice matters.",
            ]}
            cursor={false}
            wrapper="span"
            speed={80}
            style={{ fontSize: "1.5em" }}
          />
          <br />
          <Link to="/contact">
            <TypeAnimation
              sequence={[7500, " Contact us now by clicking here."]}
              cursor={false}
              wrapper="span"
              speed={80}
              style={{ fontSize: "1.5em" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
