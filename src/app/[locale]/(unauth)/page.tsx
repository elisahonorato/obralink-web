import { getTranslations } from 'next-intl/server';

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
  return (
    <>
      <div className="text-start">
        <h1 className="text-4xl font-bold">Welcome to the index page</h1>
        <p className="text-lg">This is the index page content</p>
      </div>


    </>
  );
}
