import { TOffer } from "@src/widgets/home/offerCard/offerCard.types.ts";
import { privateAxios, publicAxios } from "./serverApi.ts";

export const getOfferByIdApi = (id: number) => {
  return publicAxios.get(`/offers/${id}`);
};

export const getOffersApi = () => {
  return publicAxios.get("/offers");
};

export const createOfferApi = (offer: TOffer) => {
  return privateAxios.post("/offers", offer);
};

export const deleteOfferApi = (id: number) => {
  return privateAxios.delete(`/offers/${id}`);
};

export const updateOfferApi = (id: number, offer: TOffer) => {
  return privateAxios.put(`/offers/${id}`, offer);
};
