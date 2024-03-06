import TextChange from '@/components/animations/TextChange';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { ColoredLinkButton } from '@/components/customElements/Button/LinkButton';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

function HeroVideo() {
  return (
    <video autoPlay muted loop className='z-0 right-0 lg:h-4/5 h-3/4 sm:w-1/2 absolute rounded-lg object-cover '>
      <source src="/assets/videos/hero.mp4" type="video/mp4" />
    </video>
  );
}

function HeroContent() {
  const t = useTranslations('Index');
  const phrase = t('solutions');
  const words = phrase.split(',').map(word => word.trim());

  return (
    <div className="w-1/2 absolute z-10">
      <h1 className="text-4xl sm:text-6xl sm:mt-20 mt-10">
        {t('title')}
        <span> </span>
        <TextChange
          texts={words}
          id="typewriter"
          className="text-4xl sm:text-6xl font-bold"
          velocity={2}
        />
      </h1>
      <div className='mt-10'>
        <ColoredLinkButton href="/contact/" colorIntensity='dark'>{t('cta')}</ColoredLinkButton>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <>
      <div className='items-center justify-between'>
      <HeroContent />
        <HeroVideo />

      </div>
    </>
  );
}
