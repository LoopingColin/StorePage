const Footer=()=> {
    return(
        <footer className="footer" id="footer">
    
            <section className="info-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer-info">
                                <h2 className="footer-about-header">About us</h2>
                                <p>We are focused on making sure you get what your paying for</p>
                                <a href="/About" className="read-more">&#187; Read more</a>
                            </div>
                        </div>
    
                        <div className="col-md-3">
                            <div className="footer-info">
                                <h2 className="footer-contact-header">Contact</h2>
                                <li className="contact-list-item">Phone: <a href="#link">888-CTETCH</a></li>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-info">
                                <h1 className="footer-logo text-sm-center text-md-left">CTECH</h1>
                                <p className="colophon-text text-sm-center text-md-left">site by colin &copy;2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer