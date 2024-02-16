import "./welcomePage.scss";
import { TypeAnimation } from "react-type-animation";
import sampleimage from "../../assets/images/samplePicture.jpg";
import sampleImage2 from "../../assets/images/smapleImage2.jpg";
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
          <Link to="/contact">
            <TypeAnimation
              sequence={[3000, " Click here to learn more."]}
              cursor={false}
              wrapper="span"
              speed={80}
              style={{ fontSize: "2em" }}
            />
          </Link>
        </div>
        <img src={sampleimage} alt="sampleimage" />
      </div>
      <div className="welcomeContent">
        <div className="lowerImage">
          <img src={sampleImage2} alt="sampleImage2" />
        </div>
        <div className="lowerText">
          <TypeAnimation
            sequence={[
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
              sequence={[3000, " Contact us now by clicking here."]}
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
