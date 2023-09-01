const Beginning = () => {
  return (
    <div className="flex py-16 ">
      <div className="grid gap-8 items-start content-start">
        <h2 className=" text-2xl md:text-4xl font-black">
          В начале было страшно 🫣
        </h2>
        <p className="text-xl max-w-[64ch]">
          Страшно непонятно, но интересно... Из опыта в программировании у меня
          был только Кумир 2.0, который мы изучали в школе. Первые 2 курса
          состояли в основном из теории, а практики почти не было. От этого
          появлялись сомнения, ведь я не понимал, в чем заключается моя будушая
          профессия. Свою первую HTML-страницу я написал только в конце второго
          курса. Это был сайт музея нашего техникума.
        </p>
        <div className="mockup-browser border bg-base-300 w-full max-w-[670px]">
          <div className="mockup-browser-toolbar">
            <div className="input">https://mrmt.edu.ru</div>
          </div>
          <img
            className=" w-full max-w-[670px]"
            alt="Сайт музея МРМТ"
            src="./images/museum-min.jpg"
          />
        </div>

        <p className="text-xl max-w-[64ch]">
          Там же я впервые попробовал JavaScript. Точно не помню, что я там на
          нем писал, но код был явно не из лучших. Мне было сложно понять логику
          программирования, поэтому работал он на честном слове.
        </p>
      </div>
    </div>
  );
};

export default Beginning;
