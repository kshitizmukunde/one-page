import "./faqs.css"
import Star from "../../assets/Star.png"
import FaqAccordion from "../../utilities/Accordian"


const Faqs = () => {
  return (
    <>  
        <div id="faqs">
            <div className="faqs-div lg:px-3 xl:px-3 2xl:px-0 md:px-3 sm:px-3 px-3">
                <div className="title-grp">
                    <h2 className="gap-2 lg:justify-start md:justify-start sm:justify-center justify-center mb-8 text-white"><img src={Star} alt="Star-img"/>Frequently asked questions</h2>
                </div>
                <div className="faqs-main-cont">
                    <FaqAccordion />
                </div>
            </div>
        </div>
    </>
  )
}

export default Faqs