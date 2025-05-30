type Props = {
  percent: number;
  description: string;
};
export default function SectionTwoKeyPoint({ percent, description }: Props) {
  return (
    <div className="section-2-key-point">
      <h3 className="section-2-k-p-percent">{percent}%</h3>
      <p className="section-2-k-p-description">{description}</p>
    </div>
  );
}
