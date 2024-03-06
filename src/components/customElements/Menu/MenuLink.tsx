import { RegularLinkButton } from "../Button/LinkButton";

interface RegularMenuLinkProps {

    children: React.ReactNode;
    className?: string;
    text: string;
  }

// RegularMenuLink component
const RegularMenuLink: React.FC<RegularMenuLinkProps> = ({ text, children, className }) => {
  const menuStyle = 'absolute flex bg-white rounded-lg p-2'; // Nuevo estilo para el enlace

  return (
    <div className={`${className} ${menuStyle}`}>
        {children}
    </div>
  );
};

export { RegularMenuLink};