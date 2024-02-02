import ContactForm from "../contactForm/ContactForm";
import phone from '../../assets/images/Phoneicon.png';
import "./contact.scss";

const Contact = () => {
  return (
    <div className ="contact">
      <div className ="personalContact">
        <ContactForm />
        <div className="personalContactRight">
          <h2> Contact Us With </h2>
          <h2>
            <img src={phone} alt="phone" height='26' />
            <a id="phone" href="tel:8188606802"> 818-860-6802</a>
          </h2>
        </div>
      </div>
      <h1>Visit Us</h1>
      {/* kpcnel mail@ u sayt@ tanenq demo live */}
      <iframe title="place" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.328259314668!2d-118.30322632367972!3d34.163524111845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bff63417cb69%3A0x667583f9f3a97353!2s400%20Thompson%20Ave%2C%20Glendale%2C%20CA%2091201!5e0!3m2!1sen!2sus!4v1706467665084!5m2!1sen!2sus" 
              width="100%" height="450" style={{border:0,}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Contact;