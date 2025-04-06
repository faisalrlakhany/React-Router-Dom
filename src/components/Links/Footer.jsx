


const Footer = () => {


    return (

        <>
<footer className="footer sm:footer-horizontal bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-10">
  <nav>
    <h6 className="footer-title text-black font-semibold">Services</h6>
    <a className="text-base font-medium hover:text-gray-800 transition-all duration-200 border-none">Branding</a>
    <a className="text-base font-medium hover:text-gray-800 transition-all duration-200 border-none">Design</a>
    <a className="text-base font-medium hover:text-gray-800 transition-all duration-200 border-none">Marketing</a>
    <a className="text-base font-medium hover:text-gray-800 transition-all duration-200 border-none">Advertisement</a>
  </nav>

  <nav>
    <h6 className="footer-title text-black font-semibold">Company</h6>
    <a className="text-base font-medium hover:text-gray-800 transition-all duration-200 border-none">About us</a>
    <a className="text-base font-medium hover:text-gray-800 transition-all duration-200 border-none">Contact</a>
    <a className="text-base font-medium hover:text-gray-800 transition-all duration-200 border-none">Jobs</a>
    <a className="text-base font-medium hover:text-gray-800 transition-all duration-200 border-none">Press kit</a>
  </nav>

  <nav>
    <h6 className="footer-title text-black font-semibold">Legal</h6>
    <a className="text-base font-medium hover:text-gray-800 transition-all duration-200 border-none">Terms of use</a>
    <a className="text-base font-medium hover:text-gray-800 transition-all duration-200 border-none">Privacy policy</a>
    <a className="text-base font-medium hover:text-gray-800 transition-all duration-200 border-none">Cookie policy</a>
  </nav>

  <form>
    <h6 className="footer-title text-black font-semibold">Newsletter</h6>
    <fieldset className="w-80">
      <label className="block mb-2 text-black font-medium">Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400 border-none text-black text-md" />
        <button className="btn bg-gray-800 text-white hover:bg-gray-700 join-item rounded-r-md font-semibold transition-all duration-300 border-none">
          Subscribe
        </button>
      </div>
    </fieldset>
  </form>
</footer>


        </>



    )


}


export default Footer