import "./footer.css"
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
    return (
        <section className="footer lg:px-3 xl:px-3 2xl:px-0 md:px-3 sm:px-3 px-3 container m-auto pt-34 pb-8">
            <div className="footer-grp">
                <h2 className="footer-head text-center mb-7">LET’S TALK!</h2>
                <div className="footer-link-div text-center flex items-center justify-center gap-1 mb-7">
                    <a className="hover:text-amber-600" href="#">rehanurraihan@gmail.com</a>
                    <MdArrowOutward />
                </div>
                <div className="footer-links-box flex lg:justify-between md:justify-between sm:justify-between justify-between flex-wrap flex-col sm:flex-row lg:flex-row md:flex-row gap-y-4">
                    <div className="owned-by">
                        <p className="lg:text-start md:text-start sm:text-start text-center">© Rehan Raihan - 2023</p>
                    </div>
                    <div className="social-profiles flex flex-wrap gap-8 justify-center">
                        <a className="hover:text-amber-600" href="#">Dribble</a>
                        <a className="hover:text-amber-600" href="#">Behance</a>
                        <a className="hover:text-amber-600" href="#">Twitter</a>
                        <a className="hover:text-amber-600" href="#">Instagram</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;