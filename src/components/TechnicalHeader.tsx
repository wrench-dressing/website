interface TechnicalHeaderProps {
  label: string;
  title: string;
}

export const TechnicalHeader = ({ label, title }: TechnicalHeaderProps) => {
  return (
    <div className="space-y-2 mb-12">
      <div className="flex items-center gap-4">
        <div className="h-px w-12 bg-blueprint"></div>
        <span className="font-mono text-sm text-blueprint uppercase tracking-wider">
          {label}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-engineering-dark">
        {title}
      </h2>
    </div>
  );
};
