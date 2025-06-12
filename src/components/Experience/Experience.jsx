import "./experience.css";
import Star from "../../assets/Star.png"

const experienceList = [
    {
        name: "Lead Product Designer",
        company: "Fortknox",
        start: "Mar 2022",
        end: "Oct 2023",
    },
    {
        name: "Intern Designer",
        company: "OmniSafe",
        start: "Mar 2022",
        end: "Oct 2023",
    },
    {
        name: "UI Designer",
        company: "Doradesign",
        start: "Mar 2022",
        end: "Oct 2023",
    },
    {
        name: "Frontend Developer",
        company: "OpacityAuthor",
        start: "Mar 2022",
        end: "Oct 2023",
    },
];

const ExperienceItem = () => {
    return (
        <>
            {experienceList.map((item, index) => (
                <div key={index} className="exp-div mb-7 flex-wrap py-2 flex flex-col sm:flex-col md:flex-row  gap-y-2.5 items-center justify-between">
                    <h4 className="role text-white text-center sm:text-center md:text-center lg:text-left xl:text-left">{item.name}</h4>
                    <div className="company-duration flex flex-col">
                        <h5 className="company text-white text-center sm:text-center md:text-end lg:text-end mb-2">{item.company}</h5>
                        <div className="duration">
                            <p className="text-white text-center sm:text-center md:text-center lg:text-end">{item.start} - {item.end}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}


const Experience = () => {
  return (
    <>  
        <div id="experience">
            <div className="experi-div lg:px-3 xl:px-3 2xl:px-0 md:px-3 sm:px-3 px-3">
                <div className="title-grp">
                    <h2 className="gap-2 lg:justify-start md:justify-start sm:justify-center justify-center mb-8 text-white"><img src={Star} alt="Star-img"/>Expertise</h2>
                </div>
                <div className="exper-items items-center">
                    <ExperienceItem />
                </div>
            </div>
        </div>
    </>
  )
}

export default Experience