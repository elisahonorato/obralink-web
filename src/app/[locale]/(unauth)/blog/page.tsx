import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Blog',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const BlogPage = () => {
  const t = useTranslations('Blog');

  // Supongamos que tienes una lista de objetos de blog con imágenes
  const blogPosts = [
    { id: 1, title: "Automatización de la Resistencia del Hormigón: Acelerando y Mejorando la Construcción", author: "Juan Pablo Herrantz", image: '/assets/images/blog1.png', abstract: "En este artículo se presenta un estudio sobre la resistencia del hormigón y cómo se puede mejorar su construcción."}

    // Agrega más entradas de blog según sea necesario
  ];

  return (
    <>
      <div className="grid grid-cols-1 justify-items-start gap-3 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="flex flex-col gap-2 hover:animate-pulse shadow-md p-4 rounded-lg">
              <img src={post.image} alt={post.title} className="w-full h-auto rounded-sm" />
              <h1 className='text-md font-heading'>{post.title}</h1>
              <h2 className="mt-1 font-semibold border-primary-dark border-b-[1.1px] font-body italic text-sm">{t('by')} {post.author}</h2>
              <h2 className="mt-0 text-sm">{post.abstract}</h2>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-5 text-center text-sm">
        {`${t('log_management_powered_by')} `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Better Stack
        </a>
      </div>
    </>
  );
};

export default BlogPage;
