import { Button } from 'react-daisyui';
import myPhoto2017 from '../images/my-photo-2017.png';
import myPhoto2023 from '../images/my-photo-2023.png';

const Hero = () => {
  const openTelegram = () => window.open('https://tlswp.t.me', '_blank');
  const openGithub = () => window.open('https://github.com/tlswp', '_blank');
  const openGithubRepo = () =>
    window.open('https://github.com/tlswp/yapr-test', '_blank');

  return (
    <div className="min-h-screen flex flex-col mt-56 lg:mt-0 lg:flex-row justify-center lg:justify-normal lg:items-center relative">
      <div className="grid gap-8">
        <h1 className=" text-3xl md:text-5xl font-black">
          У программиста нет цели,
          <br /> только путь
        </h1>
        <p className="text-xl">
          Мой путь начался в 2017 году, когда я поступил <br />в МРМТ на
          «Разработчика web и мультимедийных приложений»
        </p>
        <div className="flex gap-4">
          <Button onClick={openGithub}>Github</Button>
          <Button onClick={openTelegram}>Telegram</Button>
          <Button onClick={openGithubRepo}>Source</Button>
        </div>
      </div>
      <div className=" duration-500 sm:mx-auto justify-self-center lg:justify-self-auto right-0 xl:right-48 sm:-translate-x-12 lg:-translate-x-1/2 lg:ml-28 scale-75  lg:scale-[0.6] xl:scale-100 transform lg:block relative lg:absolute h-[500px]">
        {/* Dashed line */}
        <svg
          className="absolute overflow-visible top-20"
          width="426"
          height="463"
          viewBox="0 0 426 463"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M160 0.5C160 0.5 371.487 19.1734 418 120C488.939 273.776 0.133991 69.6524 0.999806 239C1.63229 362.71 225 463 225 463"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="20 20"
          />
        </svg>
        {/* My photo 2017 */}
        <img
          alt="Я в 2017"
          className=" mask mask-squircle w-48 duration-200 transform -translate-y-4 -translate-x-1 -rotate-6 hover:scale-105"
          src={myPhoto2017}
          // src="https://sun9-59.userapi.com/impg/A5Ce62XZBYg4ZuB1KMZdOQniVzw-y42oedh57g/wiOyeWQbm30.jpg?size=2162x2160&quality=96&sign=42ced71dcbb20a83aabf68a4d17b319a&type=album"
        />
        {/* HTML logo */}
        <img
          alt="HTML logo"
          className=" absolute w-20  transform -translate-y-48 translate-x-52 rotate-6"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1920px-HTML5_logo_and_wordmark.svg.png"
        />
        {/* CSS logo */}
        <img
          alt="CSS logo"
          className=" absolute w-16 transform -translate-y-[156px] translate-x-[350px] rotate-[26deg]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/500px-CSS3_logo_and_wordmark.svg.png"
        />
        {/* JS logo */}
        <img
          className=" absolute w-16 transform translate-y-[90px] translate-x-[300px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/160px-Unofficial_JavaScript_logo_2.svg.png"
          alt="JS logo"
        />
        {/* Webpack logo */}
        <svg
          className="absolute w-20 transform translate-y-[70px] translate-x-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 774 875.7"
        >
          <title>icon</title>
          <path
            fill="#FFF"
            d="M387 0l387 218.9v437.9L387 875.7 0 656.8V218.9z"
          />
          <path
            fill="#8ed6fb"
            d="M704.9 641.7L399.8 814.3V679.9l190.1-104.6 115 66.4zm20.9-18.9V261.9l-111.6 64.5v232l111.6 64.4zM67.9 641.7L373 814.3V679.9L182.8 575.3 67.9 641.7zM47 622.8V261.9l111.6 64.5v232L47 622.8zm13.1-384.3L373 61.5v129.9L172.5 301.7l-1.6.9-110.8-64.1zm652.6 0l-312.9-177v129.9l200.5 110.2 1.6.9 110.8-64z"
          />
          <path
            fill="#1c78c0"
            d="M373 649.3L185.4 546.1V341.8L373 450.1v199.2zm26.8 0l187.6-103.1V341.8L399.8 450.1v199.2zm-13.4-207zM198.1 318.2l188.3-103.5 188.3 103.5-188.3 108.7-188.3-108.7z"
          />
        </svg>
        {/* React logo */}
        <svg
          width="100%"
          height="100%"
          viewBox="-10.5 -9.45 21 18.9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute transform w-24 h-24 -translate-x-20 translate-y-44 text-blue-600"
        >
          <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
          <g stroke="currentColor" stroke-width="1" fill="none">
            <ellipse rx="10" ry="4.5"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
          </g>
        </svg>
        {/* My photo 2023 */}
        <img
          alt="Я сейчас"
          className="absolute bottom-0 mask mask-squircle w-48 duration-200 transform translate-y-28 translate-x-[94px] rotate-12 scale-125 hover:scale-[1.3]"
          src={myPhoto2023}
        />
      </div>
    </div>
  );
};

export default Hero;
