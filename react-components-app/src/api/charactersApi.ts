import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/constValues';
import { IFullCard } from '../types/item';

interface Response {
  results: IFullCard[];
}

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCards: builder.query<IFullCard[], string>({
      query: (searchValue) => ({
        url: `character/?name=${searchValue}`,
      }),
      transformResponse: (response: Response) => response.results,
    }),
    getCardById: builder.query<IFullCard, number>({
      query: (id) => ({
        url: `character/${id}`,
      }),
    }),
  }),
});

export const { useGetCardsQuery, useGetCardByIdQuery } = charactersApi;
