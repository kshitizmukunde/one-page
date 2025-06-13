import "./marquee.css"
import Star from "../../assets/Star.png"
import Designer from "../../assets/designer.png"
import Figma from "../../assets/figma.png"

const MarkSingle = () => {
    return (
        <div className="mark flex gap-10">
            <img className="designer-img" src={Designer} alt="designer-img"/>
            <img className="star-img" src={Star} alt="star-img"/>
            <img className="designer-img" src={Figma} alt="figma-img"/>
            <img className="star-img" src={Star} alt="star-img"/>
        </div>
    )
}

const Marquee = () => {
    return (
        <div className="marquee-main animation-scroll overflow-hidden gap-10 flex w-max">
            <MarkSingle />
            <MarkSingle />
            <MarkSingle />
            <MarkSingle />
        </div>
    )
}

export default Marquee