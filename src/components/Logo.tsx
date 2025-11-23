interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="20" r="4.7" fill="#D4AF37" />
        <circle cx="40" cy="56" r="5.5" fill="#D4AF37" />
        <circle cx="22" cy="38" r="5" fill="#D4AF37" />
        <circle cx="58" cy="38" r="5" fill="#D4AF37" />
        <circle cx="51" cy="47" r="3.6" fill="#D4AF37" />
      </svg>

      <div className="flex flex-col justify-center">
        <div className="serif text-[22px] leading-none text-white font-medium">
          Southern Brief
        </div>
        <div className="text-[9px] sans uppercase tracking-[0.2em] text-white/70 mt-1">
          The South American Review
        </div>
      </div>
    </div>
  );
}
