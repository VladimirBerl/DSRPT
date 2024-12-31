export enum CastomLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  PARALLAX = "parallax",
}

interface CastomLinkProps {
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
  theme?: CastomLinkTheme;
  className?: string;
}

export default function CastomLink({
  children,
  href,
  icon,
  theme = CastomLinkTheme.PRIMARY,
  className,
}: CastomLinkProps) {
  // Переменная для хранения стилей на основе темы
  let themeClass = "";

  // Использование switch для выбора стилей
  switch (theme) {
    case CastomLinkTheme.PRIMARY:
      themeClass =
        "bg-primary text-white hover:bg-white hover:text-dark border-transparent rounded-br-[20px]";
      break;
    case CastomLinkTheme.SECONDARY:
      themeClass =
        "bg-transparent border-2 border-primary text-primary hover:bg-primary/5 rounded-br-[20px]";
      break;
    case CastomLinkTheme.PARALLAX:
      themeClass =
        "backdrop-blur-sm bg-[#161626] text-white hover:text-dark hover:bg-white hover:shadow-lg transition-all rounded-bl-[20px]";
      break;
    default:
      themeClass =
        "bg-purple-600 text-white hover:bg-white hover:text-dark border-transparent";
      break;
  }

  return (
    <a
      href={href}
      className={`flex items-center justify-between gap-6 text-base max-md:text-sm uppercase leading-[100%] px-7 py-4 max-md:py-3 max-md:px-4 transition-all duration-500 ${themeClass} ${className}`}
    >
      {children}
      <div className="flex-shrink-0">{icon}</div> 
    </a>
  );
}
