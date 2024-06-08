import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const orderReducer = createReducer(initialState, (builder) => {
  builder
    // Get All Orders of User
    .addCase('getAllOrdersUserRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAllOrdersUserSuccess', (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    })
    .addCase('getAllOrdersUserFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // Get All Orders of Shop
    .addCase('getAllOrdersShopRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAllOrdersShopSuccess', (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    })
    .addCase('getAllOrdersShopFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // Get All Orders for Admin
    .addCase('adminAllOrdersRequest', (state) => {
      state.adminOrderLoading = true;
    })
    .addCase('adminAllOrdersSuccess', (state, action) => {
      state.adminOrderLoading = false;
      state.adminOrders = action.payload;
    })
    .addCase('adminAllOrdersFailed', (state, action) => {
      state.adminOrderLoading = false;
      state.error = action.payload;
    })

    // Clear Errors
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});

export default orderReducer;
