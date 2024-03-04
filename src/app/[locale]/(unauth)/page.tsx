import TextChange from '@/components/animations/TextChange';
import Typewriter from '@/components/animations/Typewritter';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';



export async function generateMetadata(props: { params: { locale: string } }) {
  console.log('props.params.locale', props.params.locale);
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
        <TextChange
          startText={t('title')}
          texts={words}
          id="typewriter"
          className="text-6xl w-1/2 text-start mt-20"
          classChange="text-6xl font-bold"
          velocity={1}
        />
      </div>


    </>
  );
}
