import { BaseTemplate } from '@/templates/BaseTemplate';
import Navbar from '@/components/Navbar/Navbar';

export default function Layout(props: { children: React.ReactNode }) {

  return (
    <BaseTemplate
      nav={
        <Navbar/>
      }
    >
      {props.children}
    </BaseTemplate>
  );
}
