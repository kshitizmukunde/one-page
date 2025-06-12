import Star from "../../assets/Star.png"
import "./works.css";
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';

const workCardList = [
    {
        name: "Analysis Application",
        img_src: card1,
        description: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
        support: ["Figma", "UX"],
        button: "View Case Study",
    },
    {
        name: "Fortknox Application",
        img_src: card2,
        description: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
        support: ["Mobile", "Web"],
        button: "View Case Study",
    },
    {
        name: "Zenocide Application",
        img_src: card3,
        description: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
        support: ["App", "Web"],
        button: "View Case Study",
    }
]

const WorkCardComponent = () => {
    return (
        <>
            {workCardList.map((card, index) => (
                <div key={index} className="card-body flex-wrap md:flex-nowrap flex p-8 gap-8 mb-8">
                    <div className="img-col w-[calc(100%)] sm:w-[calc(100%)] lg:w-[calc(50%-16px)]">
                        <img className="w-full h-full" src={card.img_src} alt="card-img"/>
                    </div>
                    <div className="work-text-col w-[calc(100%)] lg:w-[calc(50%-16px)] md:w-[calc(50%-16px)] flex flex-col gap-y-7 sm:gap-y-7 md:gap-y-7 justify-between">
                        <div className="card-first">
                            <h2 className="text-white text-center xs:text-center md:text-left lg:text-left xl:text-left mb-4">{card.name}</h2>
                            <p className="car-desc text-white text-center xs:text-center md:text-left lg:text-left xl:text-left mb-4">{card.description}</p>
                            <div className="support-list text-center sm:text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                                {card.support.map((item, i) => (
                                    <span key={i} className="sup-tag border border-white text-white px-6 py-2">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="card-second text-center sm:text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                            <a className="border-white hover:bg-amber-600 px-8 py-4 bg-white text" href="#">{card.button}</a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}


const Works = () => {
  return (
    <>  
        <div id="works">
            <div className="work-div flex items-center lg:justify-between md:justify-between sm:justify-between flex-col sm:flex-col md:flex-row lg:px-3 xl:px-3 2xl:px-0 md:px-3 sm:px-3 px-3 mb-8">
                <div className="title-grp">
                    <h2 className="gap-2 lg:justify-start md:justify-start sm:justify-center justify-center text-white"><img src={Star} alt="Star-img"/>Works</h2>
                </div>
                <div className="work-button">
                    <a className="text-white underline" href="#">view all</a>
                </div>
            </div>

            <div className="work-card lg:px-3 xl:px-3 2xl:px-0 md:px-3 sm:px-3 px-3">
                <WorkCardComponent />
            </div>
        </div>
    </>
  )
}

export default Works