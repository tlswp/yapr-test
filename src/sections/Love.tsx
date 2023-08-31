import { CodeMockup } from 'react-daisyui';

const Love = () => {
  return (
    <div className="flex py-16">
      <div className="grid gap-8 items-start content-start">
        <h2 className=" text-2xl md:text-4xl font-black">
          Как я полюбил программирование? ❤️
        </h2>
        <p className="text-xl max-w-[64ch]">
          На третьем курсе появился предмет «web-разработка». С первых же
          занятий, мы завели Github, начали писать много кода и проходить
          интересные темы, а уроки по вебу стали моими любимыми. Я понял, что
          JavaScript позволит мне делать на странице то, что я захочу. Помню
          огонь в своих глазах, когда я приходил домой, и мне хотелось
          попробовать все, что я узнал на парах. Обучение двигалось очень
          быстро, и уже примерно через 2 месяца я написал свой первый:
        </p>
        <CodeMockup>
          <pre data-prefix="$">
            <code>npm run start</code>
          </pre>
        </CodeMockup>
        <p className="text-xl max-w-[64ch]">
          Это был переход в мир «профессионального программирования». Я
          познакомился с npm, Webpack, Eslint, Prettier и многими другими
          технологиями. Пропал страх непонятности, я начал понимать, как на
          самом деле пишутся сайты.
        </p>
      </div>
    </div>
  );
};

export default Love;
