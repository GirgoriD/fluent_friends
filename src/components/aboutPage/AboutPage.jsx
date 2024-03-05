import "./aboutpage.scss";
import childOnFloor from "../../assets/images/childOnFloor.jpg";
import withChild from "../../assets/images/withChild.jpg";
import roomImageClose from "../../assets/images/roomImageclose.jpg";
import childOnFloorCroped from "../../assets/images/childOnFloorCroped.png";


const AboutPage = () => {
  return (
    <div className="aboutPage">
        <div className="attentionGetter">
          <span className="attentionGetterText">
            At our speech therapy practice, our mission is clear: 
            <i>
            empowering communication, one voice at a time.
            </i>
          </span>
          <img src={childOnFloorCroped} alt="childOnFloorCroped" />
        </div>
        <div className="aboutCompanyValues">
          <span> We believe that every individual deserves the opportunity to express themselves confidently and connect with others effectively.
Through personalized care, evidence-based techniques, and unwavering dedication, we strive to help our clients overcome speech challenges, whether it’s stuttering, articulation difficulties, or language delays. Our commitment extends beyond therapy sessions; we work collaboratively with families, educators, and the community to create an inclusive environment where communication flourishes.
Join us on this transformative journey as we unlock the potential within each person’s voice. Together, we build bridges of understanding, empathy, and connection. 
          </span>
        </div>

        <div className="aboutMe">
            <span>
              Welcome to our speech therapy practice! I’m Marine Balyan, and I bring 23 years of experience in the field of speech therapy. As a dedicated professional, I hold an Armenian degree in Speech Therapy and am also a licensed Advanced Specialist in Autism.
            </span>
            <img src={childOnFloor} alt="childOnFloor" />
        </div>
        <div className="aboutBusiness">
            <img src={roomImageClose} alt="roomImageClose" />
            <span>
              My journey began with working from home, but now I’m proud to have my own office where I continue to make a difference. Over the years, I’ve had the privilege of helping numerous children overcome their stuttering and speech delays. The joy of witnessing their progress and the satisfaction of our many happy and contented clients drive my passion for this work.
            </span>
        </div>
        <div className="aboutServices">
            <span>
              Whether you’re seeking support for yourself or a loved one, I’m here to provide personalized care and guidance. Feel free to reach out if you need more information or have any questions. Together, let’s unlock the power of communication! 
            </span>
            <img src={withChild} alt="withChild" />
        </div>
    </div>
  )
}

export default AboutPage