


const About = () => {


    return (
        <>

            <div className="hero bg-gradient-to-r from-yellow-200 to-yellow-500 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse text-white">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="lg:ml-8">
                        <h1 className="text-5xl font-bold text-black">Welcome to Box Office News!</h1>
                        <p className="py-6 text-black">
                            Stay up-to-date with the latest movie box office news, trends, and insights. We provide you with detailed reports, reviews, and analyses to keep you informed on everything happening in the entertainment world.
                        </p>
                        <button className="btn bg-gray-800 text-white hover:bg-gray-700 border-none transition-all duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>


        </>
    )

}


export default About
