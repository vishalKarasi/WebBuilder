import "./offerCard.scss";
import graphic from "@assets/images/graphic.svg";
import { TOffer } from "./offerCard.types.ts";
import Button from "@components/button/Button.tsx";

function OfferCard(props: TOffer) {
  const { tag, title, description, discountPrice, price, discount } = props;
  return (
    <article className="offerCard">
      <figure className="imgBox">
        <img src={graphic} alt="garphic" />
      </figure>
      <div className="info">
        <ul className="tag">
          {tag.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="offer">
          <li>${discountPrice}</li>
          <li>${price}</li>
          <li>({discount}% off)</li>
        </ul>
        <Button
          label="View Deals"
          type="button"
          className="btnPrimary"
        ></Button>
      </div>
    </article>
  );
}

export default OfferCard;
