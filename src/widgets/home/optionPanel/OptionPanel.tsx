import "./optionPanel.scss";
import graphic from "@assets/images/graphic.svg";
import Button from "@components/button/Button.tsx";
import Rating from "@src/components/rating/Rating.tsx";
import { TOption } from "./optionPanel.types.ts";

function OptionPanel(props: TOption) {
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
