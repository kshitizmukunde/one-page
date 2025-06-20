import Star from "../../assets/Star.png"
import "./about.css";

const featuresList = [
    {
        name: "Branding",
        description: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
        name: "UI Design",
        description: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
        name: "UX Design",
        description: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
        name: "Development",
        description: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
]

const ListComponent = () => {
    return (
        <>
            {featuresList.map((listItem, index) => (
                <div key={index} className="list w-[calc(100%)] lg:w-[calc(50%-35px)] md:w-[calc(50%-35px)]">
                    <h3 className="ps-4 lg:ps-4 md:ps-4 sm:ps-4 lg:mb-3 md:mb-3 sm:mb-3 mb-3 list-head relative text-white">{listItem.name}</h3>
                    <p className="description text-white lg:text-left md:text-left sm:text-left text-left">
                        {listItem.description}
                    </p>
                </div>
            ))}
        </>
    )
}


const About = () => {
  return (
    <>  
        <div id="about">
            <div className="about-div py-16 lg:px-3 xl:px-3 md:px-3 sm:px-3 px-3">
                <div className="title-grp">
                    <h2 className="gap-2 lg:justify-start md:justify-start sm:justify-center justify-center mb-8 text-white"><img src={Star} alt="Star-img"/>Expertise</h2>
                </div>
                <div className="list-items flex flex-wrap gap-[48px]">
                    <ListComponent />
                </div>
            </div>
        </div>
    </>
  )
}

export default About