function JoinOurTeam() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-20 shadow-xl flex items-center justify-center min-h-screen">
      <div className="container mx-auto flex flex-col lg:flex-row items-center bg-gray-900 rounded-2xl overflow-hidden shadow-lg p-3">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://via.placeholder.com/600x400" // Replace with actual image source
            alt="Team enjoying"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left">
            Limited Time Offer
          </h2>
          <p className="text-base sm:text-lg mb-4 text-left lg:text-left">
            Start Transforming Your Business Today
          </p>
          <p className="text-base sm:text-lg mb-6 text-left lg:text-left">
            Explore our range of expertly crafted CNC and PLC machines to
            elevate your productivity.
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-center lg:justify-start">
              <span className="text-green-500 mr-2">✔</span> On Time & On Site
              Service
            </li>
            <li className="flex items-center lg:justify-start">
              <span className="text-green-500 mr-2">✔</span> 12 months free
              warranty
            </li>
            <li className="flex items-center lg:justify-start">
              <span className="text-green-500 mr-2">✔</span> 24x7 Online Support
            </li>
            <li className="flex items-center lg:justify-start">
              <span className="text-green-500 mr-2">✔</span> Service provided by
              Experienced Engineers
            </li>
            <li className="flex items-center lg:justify-start">
              <span className="text-green-500 mr-2">✔</span> 20% Discount on
              Spares
            </li>
          </ul>

          <div className="text-center lg:text-left">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 font-semibold"
            >
              ORDER NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinOurTeam;
