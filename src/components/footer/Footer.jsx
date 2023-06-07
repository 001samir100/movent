import { FcAbout, FcFaq } from "react-icons/fc";
import { FaBlogger } from "react-icons/fa";
import { BsPaperclip } from "react-icons/bs";

const Footer = () => {
	return (
		<div className="bg-zinc-800 text-slate-50 p-20">
			<ul className="flex flex-col sm:flex-row justify-evenly font-semibold">
				<li className="flex justify-center items-center hover:cursor-pointer">
					<FcAbout /> &nbsp; About Us
				</li>
				<li className="flex justify-center items-center hover:cursor-pointer">
					<FcFaq /> &nbsp; FAQ
				</li>
				<li className="flex justify-center items-center hover:cursor-pointer">
					<FaBlogger /> &nbsp; Blog
				</li>
				<li className="flex justify-center items-center hover:cursor-pointer">
					<BsPaperclip /> &nbsp; Terms of Use
				</li>
			</ul>
			<div className="text-center mt-10">
				Movent &copy; 2023 All right reserved
			</div>
		</div>
	);
};

export default Footer;
