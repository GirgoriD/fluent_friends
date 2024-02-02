import "./welcomePage.scss";
import sampleimage from "../../assets/images/samplePicture.jpg";

const WelcomePage = () => {
  return (
    <div className ="welcomePage">
        <span>I like text a lot of text</span>
        <img src={sampleimage} alt="sampleimage" />
    </div>
  )
}

export default WelcomePage