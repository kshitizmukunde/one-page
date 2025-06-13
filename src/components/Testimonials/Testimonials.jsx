import "./testimonials.css";
import Star from "../../assets/Star.png"
import SimpleSlider from "../../utilities/slider";




const Testimonials = () => {
  return (
    <>  
        <div id="testimonials">
            <div className="testimonials-div lg:px-3 xl:px-3 2xl:px-0 md:px-3 sm:px-3 px-3">
                <div className="title-grp">
                    <h2 className="gap-2 lg:justify-start md:justify-start sm:justify-center justify-center mb-8 text-white"><img src={Star} alt="Star-img"/>What they say</h2>
                </div>
                <div className="test-main-cont items-center">
                    <SimpleSlider/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonials