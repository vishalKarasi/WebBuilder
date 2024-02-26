import OfferCard from "@widgets/home/offerCard/OfferCard.tsx";
import OptionPanel from "@widgets/home/optionPanel/OptionPanel.tsx";
import { OptionPanelList, OfferCardList } from "@mock/data.ts";
import Carousel from "@components/carousel/Carousel.tsx";
import { useSelector } from "react-redux";
import Model from "@src/components/model/Model";

function Index() {
  const { searchQuery } = useSelector((state: any) => state.ui);

  const FilteredOption = OptionPanelList.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="homeIndex">
      <div className="optionContainer">
        {FilteredOption.length === 0 ? (
          <Model type="error" message="No Match" />
        ) : (
          FilteredOption.map((item, index) => (
            <OptionPanel key={index} index={index + 1} {...item} />
          ))
        )}
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
