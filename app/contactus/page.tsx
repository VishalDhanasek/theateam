"use client";

import { useState } from "react";
import { submitContactUs } from "./action";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false); // 🔹 new state

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <title> Contact Us</title>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className="flex flex-col sm:flex-row pt-32 pb-12 md:pt-40 md:pb-0"
          data-aos="zoom-y-out"
        >
          {/* Left side info */}
          <div className="lg:w-1/2 lg:mx-6 pb-12 md:pb-20">
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-gradient1 to-teal-400">
              Get in Touch!
            </h1>
            <br />
            <h5 className="h4 text-gray-400">Drop your mail at</h5>
            <h2 className="h4 mb-10">theateamkidsacademy@gmail.com</h2>
            <h5 className="h4 text-gray-400">Social Links</h5>
            <ul className="flex mb-10 md:order-1 md:ml-0 md:mb-0"> <li> 
              <a href="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out" aria-label="LinkedIn" target="_blank" > 
                <svg className="w-10 h-10 fill-current" viewBox="-8 -8 32 32" xmlns="http://www.w3.org/2000/svg" > <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{" "} </svg> 
                </a> </li> <li className="ml-4"> <a href="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out" aria-label="Youtube" target="_blank" > <svg className="w-10 h-10 fill-current" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" > <path d="M20.2838235,29.7208546 L20.2817697,19.3775851 L30.0092421,24.5671906 L20.2838235,29.7208546 Z M41.6409276,17.5856462 C41.6409276,17.5856462 41.2890436,15.0488633 40.2097727,13.9319394 C38.8405739,12.4655276 37.3060444,12.4583393 36.6026186,12.3724221 C31.5649942,12 24.008044,12 24.008044,12 L23.9922983,12 C23.9922983,12 16.4356904,12 11.398066,12.3724221 C10.6939556,12.4583393 9.16045298,12.4655276 7.79091194,13.9319394 C6.71164104,15.0488633 6.36009927,17.5856462 6.36009927,17.5856462 C6.36009927,17.5856462 6,20.5646804 6,23.5437145 L6,26.3365376 C6,29.3152295 6.36009927,32.2946059 6.36009927,32.2946059 C6.36009927,32.2946059 6.71164104,34.8310466 7.79091194,35.9483127 C9.16045298,37.4147246 10.9592378,37.3681718 11.7605614,37.5218644 C14.6406709,37.8042616 24.0001711,37.8915481 24.0001711,37.8915481 C24.0001711,37.8915481 31.5649942,37.8799099 36.6026186,37.5074878 C37.3060444,37.4219129 38.8405739,37.4147246 40.2097727,35.9483127 C41.2890436,34.8310466 41.6409276,32.2946059 41.6409276,32.2946059 C41.6409276,32.2946059 42,29.3152295 42,26.3365376 L42,23.5437145 C42,20.5646804 41.6409276,17.5856462 41.6409276,17.5856462 L41.6409276,17.5856462 Z" id="Shape" ></path> </svg> </a> </li> <li className="ml-4"> <a href="https://www.instagram.com/theateamkidsacademy" className="flex justify-center items-center text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out" aria-label="Instagram" target="_blank" > <svg className="w-10 h-10 fill-current" viewBox="-8 -8 32 32" xmlns="http://www.w3.org/2000/svg" > <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />{" "} </svg> </a> </li> </ul>
            
            <h5 className="h4 mt-8 text-gray-400">Make a call to </h5>
            <h2 className="h4">+91 9944249668</h2>
            <h2 className="h4">+91 9944739669</h2>
            <br />
            <br />
          </div>

          {/* Form */}
          <div className="lg:w-1/2 lg:mx-6 pb-12 md:pb-20">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your name"
                    required
                    disabled={loading} // disable while loading
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your email address"
                    required
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">
                    Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value.replace(/\D/, ""))} // removes non-numeric input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your 10-digit mobile number"
                    required
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="long-text">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="long-text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-input w-full resize-none text-gray-800"
                    placeholder="Type your Message"
                    required
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    onClick={async (e) => {
                      e.preventDefault();
                      if (loading) return; // prevent double clicks
                      setLoading(true);

                      const result = await submitContactUs(name, email, number, message);
                      console.log(result);

                      if (result.success) {
                        toast.success("Submitted successfully!");
                        setName("");
                        setEmail("");
                        setNumber("");
                        setMessage("");
                      } else {
                        toast.error("Failed to submit. Please try again.");
                      }

                      setLoading(false);
                    }}
                    disabled={loading}
                    className="btn text-white bg-blue-800 w-full flex items-center justify-center"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
