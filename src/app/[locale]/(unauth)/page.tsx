import { getTranslations } from 'next-intl/server';

import { Sponsors } from '@/components/Sponsors';

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
      <Sponsors />

    </>
  );
}
