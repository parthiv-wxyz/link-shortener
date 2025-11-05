import './header.css'
import rebrandly from '@/assets/rebrandly.svg'

const Header = () => {
  return (
    <div className="w-full p-4 mb-6">
      <div className="mobile-nav"></div>
      <div className="desktop-nav flex px-8 py-5 fixed top-0 z-2 left-0 align-middle">
        <a href="https://rebrandly.com/" className='logo flex text-15px font-light whitespace-nowrap decoration-0'>
          Powered by<img src={rebrandly} width="110" height="28" alt="rebrandly-logo" />
        </a>
      </div>
    </div>
  );
};

export default Header;
