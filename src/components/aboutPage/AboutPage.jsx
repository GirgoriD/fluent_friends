import "./aboutpage.scss";
import samplePicture from "../../assets/images/samplePicture.jpg"

const AboutPage = () => {
  return (
    <div className="aboutPage">
        <div className="aboutMe">
            <span>
                Hello Im balh Blah Blah
            </span>
            <img src={samplePicture} alt="samplePicture" />
        </div>
    </div>
  )
}

export default AboutPage