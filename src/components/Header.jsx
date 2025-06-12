

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="main-header sm:flex-wrap flex-wrap flex items-center justify-between">
                    <div className="logo-grp">
                        <img src="./logo.png" alt="logo" />
                    </div>
                    <nav className="nav-grp flex gap-2">
                        <a href="#" className="font-normal text-base rounded-3xl px-6 py-2 bg-white text-black">Home</a>
                        <a href="#" className="font-normal text-base text-white px-6 py-2">About</a>
                        <a href="#" className="font-normal text-base text-white px-6 py-2">Projects</a>
                        <a href="#" className="font-normal text-base text-white px-6 py-2">Contact</a>
                    </nav>
                    <div className="button-grp">
                        <a href="#" className="button-head hover:bg-amber-600 hover:text-white px-6 py-2 text-white">Hire Me</a>
                    </div>
                </div>
            </div>
        </header>
    )
}