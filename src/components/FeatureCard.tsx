interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-surface border border-divider rounded-xl p-6 hover:border-accent/40 transition-colors">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
