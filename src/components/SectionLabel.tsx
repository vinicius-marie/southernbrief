interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="text-xs sans uppercase tracking-wider text-accent font-medium">
      {children}
    </span>
  );
}
