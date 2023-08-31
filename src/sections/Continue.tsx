const Continue = () => {
  return (
    <div className="flex py-16">
      <div className="grid gap-8 items-start content-start">
        <h2 className=" text-2xl md:text-4xl font-black">
          И куда меня это привело?
        </h2>
        <p className="text-xl max-w-[64ch]">
          Уже несколько лет я работаю Frontend разработчиком. За это время
          произошло много всего интересного, я успел пожить заграницей и
          поработать на 5 разных проектах, в том числе и иностранных.
        </p>
        <div>
          <div className="mockup-browser border bg-base-300 w-fit max-w-[800px]">
            <div className="mockup-browser-toolbar">
              <div className="input">https://nosis.io</div>
            </div>
            <video src="./videos/nosis.io.MOV" autoPlay loop muted />
          </div>
          <p className=" text-center opacity-50">
            Первая версия{' '}
            <a
              className=" text-blue-600 hover:text-blue-400"
              target="_blank"
              rel="noreferrer"
              href="https://nosis.io"
            >
              nosis.io
            </a>
            , в разработке которой я принимал участие.
          </p>
        </div>
        <p className="text-xl max-w-[64ch]">
          Программирование — это очень обширная сфера, которая стремительно
          развивается. Полностью выучить его не получится, и я до сих пор
          продолжаю учится.
        </p>
        <p className="text-xl max-w-[64ch]">Мой путь продолжается.</p>
      </div>
    </div>
  );
};

export default Continue;
