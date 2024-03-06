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



export default function Index() {
  const t = useTranslations('Index');
  const phrase = t('solutions');
  const words = phrase.split(',').map(word => word.trim());



  return (
    <>
      <div className="">
        <h1 className="text-4xl sm:text-6xl w-1/2 sm:mt-20 mt-10">
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



    </>
  );
}
