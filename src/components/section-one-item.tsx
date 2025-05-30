

type Props = {
  title: string;
  decscription: string;
  image: any;
};

export default function SectionOneItem({title, decscription, image}: Props) {
  return (
    <div className="section-1-item">
      <img src={image} alt={title} className="section-1-item-image" />
      <div className="section-item-content">
      <h3 className="section-1-item-title">{title}</h3>
      <p className="section-1-item-description">{decscription}</p>
      </div>
    </div>
  );

}