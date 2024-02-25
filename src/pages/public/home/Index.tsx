import OfferCard from "@src/widgets/home/offerCard/OfferCard";
import OptionPanel from "@widgets/home/optionPanel/OptionPanel";
import { OptionPanelList, OfferCardList } from "@mock/data.ts";

function Index() {
  return (
    <section className="homeIndex">
      <div className="optionContainer">
        {OptionPanelList.map((item, index) => (
          <OptionPanel key={index} index={index + 1} {...item} />
        ))}
      </div>
      <h2 className="subHead">Related deals you might like for</h2>
      <div className="offerContainer">
        {OfferCardList.map((item, index) => (
          <OfferCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Index;
