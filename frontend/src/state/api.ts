import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ExpensesByCategory, GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis",
      providesTags: ["Kpis"],
      transformResponse: (response: Array<GetKpisResponse>) => {
        return response.map((kpi) => {
          const { salaries, supplies, services } = kpi.expensesByCategory;
          const cleanedExpensesByCategory: ExpensesByCategory = {
            salaries: salaries,
            supplies: supplies,
            services: services,
          };
          return {
            ...kpi,
            expensesByCategory: cleanedExpensesByCategory,
          };
    })}}),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: ()=> "transaction/transactions",
      providesTags: ["Transactions"],
    })
    })
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;