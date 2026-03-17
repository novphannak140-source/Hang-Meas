import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="py-10 px-4 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-xl shadow">
            {" "}
            <h3 className="text-xl font-bold mb-5">Our Contact</h3>
            <div className="flex flex-col items-center mt-10 gap-5 py-1">
              <div className="w-40 h-40 bg-white shadow flex items-center justify-center rounded-lg">
                <span className="text-gray-400 text-sm">
                  <img src="" alt="" />
                </span>
              </div>

              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full text-lg shadow">
                <a href=""> Apply now</a>
              </button>
            </div>
            <div className="space-y-5 text-gray-700">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-blue-600" />
                <p>
                  #12, Street 2001, Phum Paprak Khang Tboung, Sangkat Kakab,
                  Khan Porsenchey, Phnom Penh, Cambodia
                </p>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="text-blue-600" />
                <p>+855 93 739 400</p>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-blue-600" />
                <p>info@jobify.works</p>
              </div>

              <div className="flex gap-4">
                <FaClock className="text-blue-600" />
                <p>Monday — Friday 8:00am - 6:00pm</p>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <div className="w-12 h-12 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white flex items-center justify-center cursor-pointer transition">
                <FaLinkedinIn />
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white flex items-center justify-center cursor-pointer transition">
                <FaFacebookF />
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white flex items-center justify-center cursor-pointer transition">
                <FaInstagram />
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white flex items-center justify-center cursor-pointer transition">
                <FaTelegramPlane />
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white flex items-center justify-center cursor-pointer transition">
                <FaTiktok />
              </div>{" "}
            </div>
            {/* Description */}
            <p className="mt-6 text-gray-600">
              Jobify is Cambodia's #1 Job Matching Service specialized in IT.
            </p>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              className="w-full h-full min-h-[350px]"
              src="https://maps.google.com/maps?q=phnom%20penh&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t pt-6 text-center text-gray-600">
          <p className="mb-2 cursor-pointer hover:text-blue-600">
            Privacy Policy
          </p>
          <p>© 2026 Jobify (Cambodia) Co., Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
