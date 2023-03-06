import { baseApi } from "src/api/index";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<Record<string, unknown>, void>({
      query: () => "/user",
    }),
  }),
});
