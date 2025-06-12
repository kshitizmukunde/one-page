import Star from "../../assets/Star.png"
import "./blogs.css"
import blog1 from "../../assets/blog1.png"
import blog2 from "../../assets/blog2.png"
import blog3 from "../../assets/blog3.png"


const blogList = [
    {
        name: "How UX works in web",
        date: "Nov 9, 2023",
        category: ["UI", "UX"],
        button: "Read",
        blog_img: blog1,
    },
    {
        name: "Case study - Analysis Application.",
        date: "Nov 9, 2023",
        category: ["Design", "Print"],
        button: "Read",
        blog_img: blog2,
    },
    {
        name: "3 ways to develop your skill",
        date: "Nov 9, 2023",
        category: ["Figma", "Web"],
        button: "Read",
        blog_img: blog3,
    },
];


const BlogCard = () => {
    return (
        <>
            {blogList.map((item, index) => (
                <div key={index} className="blog-card mb-18 sm:mb-16 lg:mb-8 flex-wrap gap-8 flex lg:items-center md:items-start">
                    <div className="blog-img w-[calc(100%)] sm:w-[calc(100%)] lg:w-[calc(20%-16px)] md:w-[calc(50%-16px)]">
                        <img className="w-full h-full" src={item.blog_img} alt="blog-img"/>
                    </div>
                    <div className="blog-content w-[calc(100%)] sm:w-[calc(100%)] lg:w-[calc(50%-16px)] md:w-[calc(50%-16px)] flex flex-1 lg:flex-row md:flex-col sm:flex-col flex-col md:gap-y-3 sm:gap-y-6 gap-y-6 items-center md:items-start lg:items-center justify-between">
                        <div className="blog-meta">
                            <p className="lg:text-left md:text-left sm:text-center text-center mb-2">{item.date}</p>
                            <h3 className="lg:text-left md:text-left sm:text-center text-center text-white mb-5">{item.name}</h3>
                            <div className="category-list text-center sm:text-center md:text-left lg:text-left">
                                {item.category.map((cat, i) => (
                                    <span className="border uppercase border-white px-6 py-2 bg-transparent text-white" key={i}>{cat}</span>
                                ))}
                            </div>
                        </div>
                        <div className="meta-btn">
                            <a className="bg-white border border-white px-8 py-4" href="#">{item.button}</a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}


const Blogs = () => {
  return (
    <>  
        <div id="blogs">
            <div className="blog-div flex items-center lg:justify-between md:justify-between sm:justify-between flex-col sm:flex-col md:flex-row lg:px-3 xl:px-3 2xl:px-0 md:px-3 sm:px-3 px-3 mb-8">
                <div className="title-grp">
                    <h2 className="gap-2 lg:justify-start md:justify-start sm:justify-center justify-center text-white"><img src={Star} alt="Star-img"/>Blog</h2>
                </div>
                <div className="blog-button">
                    <a className="text-white underline" href="#">view all</a>
                </div>
            </div>
            <div className="blog-lists lg:px-3 xl:px-3 2xl:px-0 md:px-3 sm:px-3 px-3">
                <BlogCard />
            </div>
        </div>
    </>
  )
}

export default Blogs