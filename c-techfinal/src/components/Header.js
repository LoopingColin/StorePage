import Navbar from "./NavbarElements"

const Header =()=> {
    return(
    <header className="header">
        <section className="top-nav-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-lg-5">
                        <h1 className="logo text-sm-center text-md-left">
                            <a href="/" className="logo"> C-TECH</a>
                        </h1>
                    </div>
                    <div className="col-md-8 col-lg-7">
                        <Navbar/>
                    </div>
                </div>
            </div>
        </section>
    </header>

    )
}



export default Header