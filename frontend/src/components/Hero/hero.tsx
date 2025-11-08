import LinkForm from '@/components/LinkForm/LinkForm'
import "./hero.css";

const Hero = () => {
  return (
    <div className="bg-[#7ecdfb] mt-[88px] py-20 flex flex-col justify-center items-center">
      <div className="items-center flex flex-col justify-between mx-auto m-w-[1296px] w-full px-6">
        <div>
          <h1 className="mt-0 mb-6 text-center text-5xl font-normal leading-[100%]">
            Best Free URL Shortener: Track & Optimize Links
          </h1>
          <p className="items-center text-center text-lg text-[#4f4f4f]">
            Shorten links for free with Rb.gy powered by
            <a href="https://rebrandly.com/" className="ml-1 underline [text-underline-position:from-font]">Rebrandly</a>
            . Create short &
            memorable links in seconds.
          </p>
          <div>
            <div>
              <LinkForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
