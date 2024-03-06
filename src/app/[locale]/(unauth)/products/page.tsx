import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Products',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Products = () => {
  const t = useTranslations('Products');

  return (
    <>
      <p>{t('presentation')}</p>

      <div className="grid grid-cols-1 justify-items-start gap-3 md:grid-cols-2 xl:grid-cols-3">
        {Array.from(Array(6).keys()).map((elt) => (
          <Link
            className="hover:text-blue-700"
            key={elt}
            href={`/products/${elt}`}
          >
            {t('products_name', { name: elt })}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
