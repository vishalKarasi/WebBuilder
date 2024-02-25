import { TOfferCard } from "@src/widgets/home/offerCard/offerCard.types";
import { TOptionPanel } from "@src/widgets/home/optionPanel/optionPanel.types";

export const OptionPanelList: TOptionPanel[] = [
  {
    tag: "Best Choice",
    caption: "Graphic",
    title: "WixPro 72-Inch Responsive Website Builder",
    description:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores(Black/ Blue)",
    highlight:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 7.2,
  },
  {
    tag: "Best Value",
    caption: "Builder",
    title: "SiteCraft 68-Inch Ultimate Web Design Studio",
    description:
      "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    highlight:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 9,
  },
  {
    tag: "Best Offer",
    caption: "Graphic",
    title: "CDK Resposive Builder-",
    description:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores(Black/ Blue)",
    highlight:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 4.5,
  },
];

export const OfferCardList: TOfferCard[] = [
  {
    tag: ["20% off", "Limited Time"],
    title: "Seo Optimiser",
    description: "Computer  Modern clasic with wix support",
    discountPrice: 30,
    price: 50,
    discount: 40,
  },
  {
    tag: ["Free Trial", "Special Offer"],
    title: "Social Media Manager Pro",
    description: "Boost your online presence with advanced social media management tools",
    discountPrice: 15,
    price: 25,
    discount: 40,
  },
  {
    tag: ["New Release", "Limited Stock"],
    title: "E-commerce Power Suite",
    description: "All-in-one solution for building and scaling your online store",
    discountPrice: 75,
    price: 100,
    discount: 25,
  }
];
