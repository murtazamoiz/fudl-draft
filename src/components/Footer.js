import { Link } from "react-router-dom";
import LOGO from "../images/logo.svg";

function Footer() {
  return (
    <div className="text-medium mt-6 flex flex-row w-full justify-evenly gap-4 overflow-hidden bg-black p-12 text-gray-400 pb-24">
      {/* item1 */}
      <div className="flex flex-col gap-2 xs:gap-1 whitespace-nowrap sm:overflow-hidden">
        <h3 className="text-2xl xs:text-lg font-bold flex items-center gap-2 xs:gap-1 text-white">
          <Link to="/">
            <img
              src={LOGO}
              className="w-8 xs:w-6"
              style={{ fill: "green" }}
              alt=""
            />{" "}
          </Link>
          <span className="hover:text-green-400">fudl</span>
        </h3>
        <span className=""> &copy; 2025 </span>
        <span> Technologies Pvt. Ltd</span>
      </div>

      {/* item2 */}
      <div className="flex flex-col gap-2 xs:gap-1  whitespace-nowrap sm:overflow-hidden">
        <h3 className="text-lg xs:text-sm font-bold text-white">Company</h3>
        <span>About</span>
        <span>Team</span>
      </div>

      {/* item3 */}
      <div className="flex flex-col gap-8 xs:gap-1 whitespace-nowrap sm:overflow-hidden">
        <div className="flex flex-col gap-2 xs:gap-1 whitespace-nowrap mb-10">
          <h3 className="text-lg font-bold xs:text-sm text-white">
            Contact us
          </h3>
          <span>Help & Support</span>
          <span>Partner with us</span>
          <span>Ride with us</span>
        </div>
        <div className="flex flex-col gap-2 xs:gap-1 whitespace-nowrap sm:overflow-hidden">
          <h3 className="text-lg font-bold xs:text-sm text-white"> Legal</h3>
          <span>Terms & Conditions</span>
          <span>Cookie Policy</span>
          <span>Privacy Policy</span>
        </div>
      </div>

      {/* item4 */}
      <div className="flex flex-col gap-2 xs:gap-1 whitespace-nowrap sm:overflow-hidden">
        <h3 className="text-lg xs:text-sm font-bold text-white">
          We deliver to:
        </h3>
        <span>Mumbai</span>
        <span>Delhi</span>
        <span>Kolkata</span>
        <span>Chennai</span>
      </div>
    </div>
  );
}

export default Footer;
