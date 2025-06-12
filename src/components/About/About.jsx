import Star from "../../assets/Star.png"
import "./about.css";
const About = () => {
  return (
    <>  
        <div id="about">
            <div className="about-div py-16">
                <div className="title-grp">
                    <h2><img src={Star} alt="Star-img"/>Expertise</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default About