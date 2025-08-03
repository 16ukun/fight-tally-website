import LogoIcon from "../assets/Hero/logo-icon.svg";
import LogoText from "../assets/Hero/logo-text.svg";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <img src={LogoIcon} alt="Fight Tally Logo" className="h-10" />
      <img src={LogoText} alt="Fight Tally Text" className="h-6" />
      <ul className="flex gap-6 font-medium text-sm">
        <li>About Us</li>
        <li>News</li>
        <li>Advertise</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
