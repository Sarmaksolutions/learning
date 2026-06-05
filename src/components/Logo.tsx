interface LogoProps {
  className?: string;
  alt?: string;
}

export default function Logo({ className = 'h-12 w-auto', alt = 'SARMAK' }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt={alt}
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
