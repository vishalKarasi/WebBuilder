import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOfferApi, deleteOfferApi, getOffersApi, updateOfferApi } from "../api/offerApi";
import { TOffer } from "@widgets/home/offerCard/offerCard.types";


type InitialState = {
  Offers: TOffer[],
  status: "idle" | "loading" | "success" | "error";
  message?: string;
}


const initialState: InitialState = {
  Offers: [],
  status: "idle",
  message: "",
};

export const getOffer = createAsyncThunk("offer/get", async () => {
  try {
    const { data } = await getOffersApi();
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
});

export const createOffer = createAsyncThunk(
  "offer/create",
  async (offer: TOffer) => {
    try {
      const { data } = await createOfferApi(offer);
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);

export const deleteOffer = createAsyncThunk("offer/delete", async (id: number) => {
  try {
    const { data } = await deleteOfferApi(id);
    return { id, message: data.message };
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
});

export const updateOffer = createAsyncThunk(
  "offer/update",
  async ({ id, offer }: {id: number, offer: TOffer}) => {
    try {
      const { data } = await updateOfferApi(id, offer);
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);

export const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get offer promise
      .addCase(getOffer.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getOffer.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.message = payload.message;
        state.Offers = payload.data;
      })
      .addCase(getOffer.rejected, (state, { error }) => {
        state.status = "error";
        state.message = error.message;
      })
      // add offer promise
      .addCase(createOffer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOffer.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.message = payload.message;
        state.Offers.push(payload.data);
      })
      .addCase(createOffer.rejected, (state, { error }) => {
        state.status = "error";
        state.message = error.message;
      })
      // delete offer promise
      .addCase(deleteOffer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteOffer.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.message = payload.message;
        state.Offers = state.Offers.filter((offer) => {
          return offer._id !== payload.id;
        });
      })
      .addCase(deleteOffer.rejected, (state, { error }) => {
        state.status = "error";
        state.message = error.message;
      })

      // update offer promise
      .addCase(updateOffer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateOffer.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.message = payload.message;
        const index = state.Offers.findIndex(
          (offer) => offer._id === payload.data._id
        );
        state.Offers[index] = payload.data;
      })
      .addCase(updateOffer.rejected, (state, { error }) => {
        state.status = "error";
        state.message = error.message;
      });
  },
});

export default offerSlice.reducer;
