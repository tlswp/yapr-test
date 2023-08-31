import guidePreviewImage from '../images/guide-preview.png';

const Guide = () => {
  const openGuideSource = () =>
    window.open('https://github.com/tlswp/yapr-test/tree/main/guide', '_blank');
  return (
    <div className="min-h-screen flex py-16">
      <div className="grid gap-8 items-start content-start">
        <h2 className=" text-2xl md:text-4xl font-black">
          Урок по псевдоклассам
        </h2>
        <p className="text-xl max-w-[64ch]">
          Псевдоклассы дают возможность стилизовать элемент на основе
          определенных условий и очень часто используются в CSS. В данном
          видеоуроке мы рассмотрим псевдоклассы hover и active.{' '}
        </p>
        <div>
          <video
            poster={guidePreviewImage}
            className="max-w-[800px] w-full rounded-xl shadow cursor-pointer"
            controls
            src="./videos/cssGuide.mp4"
          />
          <div className="text-center opacity-50">
            <a
              href="https://github.com/tlswp/yapr-test/tree/main/guide"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-400"
            >
              Код урока на GitHub.
            </a>
          </div>
        </div>
        <p className="text-xl max-w-[64ch]">
          Домашнее задание для закрепления материала. Попробуйте создать класс
          для input, при фокусе на котором будет менятся цвет border.
        </p>
      </div>
    </div>
  );
};

export default Guide;
