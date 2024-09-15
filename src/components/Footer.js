import Marquee from "react-fast-marquee";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <Marquee className="p-1 mt-2 flex justify-between bg-pink-50 shadow-sm rounded-[20px]">
    <p>
      <span className="font-bold">Created by -</span> {user.name}
    </p>
    <p className="font-bold px-2">© 2024</p>
  </Marquee>

  )
};
export default Footer;