import { BaseTemplate } from '@/templates/BaseTemplate';
import Navbar from '@/components/Navbar/Navbar';

export default function Layout(props: { children: React.ReactNode }) {

  return (
    <BaseTemplate
      nav={
        <Navbar/>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
