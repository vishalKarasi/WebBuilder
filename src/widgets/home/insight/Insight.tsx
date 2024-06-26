import "./insight.scss";
import { Check, Info } from "@assets/icons/icons.tsx";

function Insight() {
  const filters = ["Top Relevant", "Most Popular", "Best Deals"];
  return (
    <summary className="insight">
      <div className="left">
        <p>
          <Check />
          <span>Last Updated-</span>
          <time>February 22, 2020</time>
        </p>
        <p>
          <Info />
          <span>Advertising Disclosure</span>
        </p>
      </div>
      <select>
        {filters.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </summary>
  );
}

export default Insight;
