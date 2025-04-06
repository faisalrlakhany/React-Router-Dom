

const Service = () => {

    return (

        <>

            <div className="text-center my-12">
                <h1 className="text-4xl font-bold text-black font-sans">Our Services</h1>
                <p className="text-lg text-gray-600 mt-4">Explore the range of services we provide to help your business succeed.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-6">
                {/* Service Card 1 */}
                <div className="card bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-xl rounded-lg">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Web Development"
                            className="w-full h-56 object-cover rounded-t-lg"
                        />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">Web Development</h2>
                        <p>Build responsive and high-performance websites with modern frameworks and tools.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-yellow-500 text-black hover:bg-yellow-600 border-none">Learn More</button>
                        </div>
                    </div>
                </div>

                {/* Service Card 2 */}
                <div className="card bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-xl rounded-lg">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                            alt="App Development"
                            className="w-full h-56 object-cover rounded-t-lg"
                        />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">App Development</h2>
                        <p>We design and develop mobile applications for both Android and iOS platforms.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-yellow-500 text-black hover:bg-yellow-600 border-none">Learn More</button>
                        </div>
                    </div>
                </div>

                {/* Service Card 3 */}
                <div className="card bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-xl rounded-lg">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                            alt="SEO Optimization"
                            className="w-full h-56 object-cover rounded-t-lg"
                        />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">SEO Optimization</h2>
                        <p>Improve your search engine rankings with our expert SEO services for higher visibility.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-yellow-500 text-black hover:bg-yellow-600 border-none">Learn More</button>
                        </div>
                    </div>
                </div>

                {/* Service Card 4 */}
                <div className="card bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-xl rounded-lg">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                            alt="Digital Marketing"
                            className="w-full h-56 object-cover rounded-t-lg"
                        />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">Digital Marketing</h2>
                        <p>Leverage social media and digital marketing strategies to grow your business and brand.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-yellow-500 text-black hover:bg-yellow-600 border-none">Learn More</button>
                        </div>
                    </div>
                </div>

                {/* Service Card 5 */}
                <div className="card bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-xl rounded-lg">
                    <figure>
                        <img
                           src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                            alt="E-Commerce Solutions"
                            className="w-full h-56 object-cover rounded-t-lg"
                        />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">E-Commerce Solutions</h2>
                        <p>Provide complete e-commerce solutions to help your business thrive online.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-yellow-500 text-black hover:bg-yellow-600 border-none">Learn More</button>
                        </div>
                    </div>
                </div>

                {/* Service Card 6 */}
                <div className="card bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-xl rounded-lg">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                            alt="UI/UX Design"
                            className="w-full h-56 object-cover rounded-t-lg"
                        />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">UI/UX Design</h2>
                        <p>Craft beautiful and user-friendly designs that enhance user experience and engagement.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-yellow-500 text-black hover:bg-yellow-600 border-none">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )


}


export default Service


