

const Contact = ()=>{


    return(

        <>
<div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
  <div className="card w-full max-w-sm sm:w-96 bg-white shadow-lg rounded-lg p-6">
    <div className="card-body">
      <h2 className="text-3xl font-bold text-center text-black mb-6">Contact Us</h2>
      
      <form>
        <div className="form-control mb-4">
          <label htmlFor="name" className="label">
            <span className="label-text text-black">Your Name</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="input input-bordered focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500"
            required
          />
        </div>
        
        <div className="form-control mb-4">
          <label htmlFor="email" className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="input input-bordered focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500"
            required
          />
        </div>
        
        <div className="form-control mb-4">
          <label htmlFor="message" className="label">
            <span className="label-text text-black">Message</span>
          </label>
          <textarea
            id="message"
            placeholder="Your message here"
            className="textarea textarea-bordered focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500"
            rows="4"
            required
          ></textarea>
        </div>
        
        <div className="form-control">
          <button
            type="submit"
            className="btn bg-black text-white hover:bg-gray-800 w-full rounded-md font-semibold focus:outline-none"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
       
        </>
    )

}


export default Contact