import OfferCard from "@widgets/home/offerCard/OfferCard.tsx";
import OptionPanel from "@widgets/home/optionPanel/OptionPanel.tsx";
import { OptionPanelList, OfferCardList } from "@mock/data.ts";
import Carousel from "@components/carousel/Carousel.tsx";

function Index() {
  return (
    <section className="homeIndex">
      <div className="optionContainer">
        {OptionPanelList.map((item, index) => (
          <OptionPanel key={index} index={index + 1} {...item} />
        ))}
      </div>
      <h2 className="subHead">Related deals you might like for</h2>
      <div className="flex">
        <Carousel>
          {OfferCardList.map((item, index) => (
            <OfferCard key={index} {...item} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Index;
