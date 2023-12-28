import InfoItemProps from "./types/InfoItemProps.type";

const InfoItem = ({ icon, label, value, color }: InfoItemProps) => {
  return (
    <article className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};

export default InfoItem;
