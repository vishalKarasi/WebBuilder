import Button from "@components/button/Button";
import "./optionPanel.scss";
import graphic from "@assets/images/graphic.svg";
import Rating from "@src/components/rating/Rating";
import { TOptionPanel } from "./optionPanel.types";

function OptionPanel(props: TOptionPanel) {
  const { index, tag, caption, title, description, highlight, rating } = props;
  return (
    <article className="optionPanel" data-tag={tag} data-index={index}>
      <figure className="imgBox">
        <img src={graphic} alt="graphic" />
        <figcaption>{caption}</figcaption>
      </figure>
      <div className="info">
        <h3>{title}-</h3>
        <p>{description}</p>
        <h3>Main Highlights</h3>
        <p>{highlight}</p>
        <details>
          <summary>Show more</summary>
          <p>
            More Details content goes here More Details content goes here More
            Details content goes here More Details content goes here
          </p>
        </details>
      </div>
      <div className="rating">
        <Rating rating={rating} />
        <Button label="View" type="button" className="btnPrimary"></Button>
      </div>
    </article>
  );
}

export default OptionPanel;
