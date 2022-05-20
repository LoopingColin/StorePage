const Home=()=> {
    return(
        <main className="main">
        <section className="banner-section">
        <img src="media/gamingpc-banner.jpg" className="img-fluid banner-img" alt=".."/>
        </section>
      
        <section className="reviews-section">
            <h2 className="main-text container"> WHAT OTHERS SAY</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://www.digitalstorm.com/img/reviews/29309.jpg"
                            className="img-fluid" alt="placeholder img"/>
                        <p className="p-text">"Delivers good framerate for 4k gaming"</p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://www.cyberpowerpc.com/images/cs/inwin101rgb/cs-415-158_220.png"
                            className="img-fluid" alt="placeholder img"/>
                        <p className="p-text">"Great high end desktop"</p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://www.bequiet.com/admin/ImageServer.php?ID=35030@be-quiet.net&colorspace=rgb&force=true"
                            className="img-fluid" alt="placeholder img"/>
                        <p className="p-text">"Very pleased with the cooling"</p>
                    </div>
                    
                </div>
            </div>
        </section>
        <section className="passion-section">
            <h2 className="main-text container"> OUR PASSION</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        
                        <p className="p-text">Deliver the best products and support for each of our customers and craft the best gaming pcs</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="standards-section">
            <h2 className="main-text container">OUR STANDARDS</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src="https://asset.bucherer.com/image/upload/f_auto/Libraries/BuchererLibrary/uk/-/media/project/bucherer/bucherer/content-migration/service/fuer-schmuck/handwerk/handwerk_stage_1"
                            className="img-fluid" alt="placeholder img"/>
                        <span className="standard-text">CRAFT</span>
                        <p className="p-text">Build the most advanced custom gamnig pcs and every gaming pc is built by skilled technicians. Everything is completed on site to make sure we provide the best for our customers</p>
                    </div>
                    <div className="col-md-3">
                        <img src="https://www.extremetech.com/wp-content/uploads/2020/06/MSI-MPG-Carbon.jpg"
                            className="img-fluid" alt="placeholder img"/>
                        <span className="standard-text">PERFORMANCE</span>
                        <p className="p-text">Make sure your system is unlocked to maximum performance, maintain goo dairflow and the layout of the components are nested well in the pc.</p>
                    </div>
                    <div className="col-md-3">
                        <img src="https://static.techspot.com/articles-info/2009/images/2020-04-12-image-5.jpg"
                            className="img-fluid" alt="placeholder img"/>
                        <span className="standard-text">TEST</span>
                        <p className="p-text">Good hardware needs to tested for bottlenecking and stability isues. A stress test and benchmarks analyze the processor,memory,graphics cards, storage and power supply. A second technician veritifes it before sending it.</p>
                    </div>
                    <div className="col-md-3">
                        <img src="https://bailiwick.com/images/headers/managed-services.jpg"
                            className="img-fluid" alt="placeholder img"/>
                        <span className="standard-text">SUPPORT</span>
                        <p className="p-text">Every purchase comes with lifetime support by our technicians. To solv eany issue with your gaming pc that you may have. </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Home