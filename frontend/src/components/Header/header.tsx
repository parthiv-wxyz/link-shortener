import "./header.css";
import rebrandly from "@/assets/rebrandly.svg";

const Icon = ({
  text,
  href,
  bg = "bg-transparent",
}: {
  text: string;
  href: string;
  bg?: string;
}) => (
  <a href={href} className={`flex ${bg} rounded-md font-semibold p-3`}>
    <span className="pr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="black"
      >
        <path
          fillRule="evenodd"
          d="m12.195 6.147-.438.507a1 1 0 0 1-1.514-1.308l.463-.536a6 6 0 1 1 8.484 8.48l-.534.465a1 1 0 0 1-1.312-1.51l.506-.44a4 4 0 0 0-5.655-5.658Zm3.512 2.146a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0ZM6.75 10.338a1 1 0 0 1-.088 1.411l-.502.444a3.972 3.972 0 0 0 .02 5.63 4.068 4.068 0 0 0 5.668.05l.35-.47a1 1 0 0 1 1.605 1.194l-.397.534c-.03.04-.064.078-.1.114a6.068 6.068 0 0 1-8.533 0 5.971 5.971 0 0 1 .041-8.531l.524-.463a1 1 0 0 1 1.412.087Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    {text}
  </a>
);

const Header = () => {
  return (
    <div className="w-full">
      <div className="mobile-nav"></div>
      <div className="desktop-nav flex px-8 py-5 fixed top-0 z-2 left-0 items-center justify-between w-full md:flex">
        <a
          href="https://rebrandly.com/"
          className="logo flex text-15px font-normal whitespace-nowrap decoration-0"
        >
          Powered by
          <img src={rebrandly} width="110" height="28" alt="rebrandly-logo" className="A"/>
        </a>
        <div className="hidden flex-col justify-between items-center mx-auto max-w-7xl px-6 w-full lg:flex">
          <div className="flex items-center gap-3 justify-center w-full">
            <Icon href="#" text="Free URL Shortener" bg="bg-[#c6e9ff]" />
            <Icon href="#" text="Free QR Code Generator" bg="" />
          </div>
        </div>
        <div className="whitespace-nowrap">
          <a href="#" className="hidden rounded-md font-semibold py-[9px] px-[18px] bg-black text-white lg:block">Sign up for free</a>
          <div className="rounded-sm border-black outline p-3 lg:hidden">
            <img width="22" height="22" src="https://img.icons8.com/ios-filled/50/menu--v1.png" alt="menu--v1"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
