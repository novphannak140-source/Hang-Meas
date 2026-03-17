import { Link } from "react-router-dom";
import Job from "../assets/Images/Job.jpg";

function Home() {
  return (
    <div>
      <div className="flex justify-center items-start min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-10">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Image */}
          <img
            src={Job}
            alt="Workplace"
            className="w-full h-90 sm:h-45 md:h-130 lg:h-170 object-cover"
          />

          {/* Content */}
          <div className="p-4 sm:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-700 mb-4">
              Back-End Software Engineer - Digital (JB-1036)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-gray-700 text-sm sm:text-base">
              <p>
                <span className="font-semibold">Salary:</span> $1000 ~ $2000
              </p>

              <p>
                <span className="font-semibold">Job Type:</span> Full Time
              </p>

              <p>
                <span className="font-semibold">Job Level:</span> Senior Level
              </p>

              <p>
                <span className="font-semibold">Gender:</span> Male/Female
              </p>

              <p>
                <span className="font-semibold">Age:</span> 25 - 40
              </p>

              <p>
                <span className="font-semibold">Experience:</span> 4 Year +
              </p>

              <p>
                <span className="font-semibold">Language:</span> English —
                Advanced
              </p>

              <p>
                <span className="font-semibold">Category:</span> Web Development
              </p>

              <p>
                <span className="font-semibold">Industry:</span> Insurance
              </p>

              <p>
                <span className="font-semibold">Location:</span> Tuol Kouk,
                Phnom Penh
              </p>

              <p>
                <span className="font-semibold">Qualification:</span> Bachelor
              </p>
              <div className="flex flex-col items-center mt-10 gap-5">
                <div className="w-40 h-40 bg-white shadow flex items-center justify-center rounded-lg">
                  <span className="text-gray-400 text-sm">
                    <img src="" alt="" />
                  </span>
                </div>

                <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full text-lg shadow">
                  <a href="">Apply now</a>
                </button>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-3">How to apply</h3>

                <div className="list-decimal pl-5 text-gray-700 space-y-2">
                  <li>Please register a Telegram account</li>

                  <li>
                    After creating your CV, apply for a job by clicking the
                    <span className="font-semibold">
                      {" "}
                      <a href="" className="text-blue-500">
                        Apply Now{" "}
                      </a>
                    </span>{" "}
                    button. Hang Meas will review your CV.
                  </li>
                </div>
              </div>
              <div className="mt-8 bg-gray-50 p-5 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-4">Contact us</h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p>📍 #12, Street 2001, Phnom Penh, Cambodia</p>

                  <p>📞 +855 93 739 400</p>

                  <p>✉️ info@jobify.works</p>

                  <p>🕒 Monday — Friday 8:00am - 6:00pm</p>
                </div>
                <div className="mt-5">
                  <iframe
                    className="w-full h-60 rounded-lg"
                    src="https://maps.google.com/maps?q=phnom%20penh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  ></iframe>
                </div>
                Job Image Job Title Job Detail (Salary, Age, Experience...) QR
                Code Apply Button How to Apply Contact Us 📍 Address 📞 Phone ✉️
                Email 🕒 Time Google Map
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3">
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

export default Home;
