import { env } from "@/env";

const API_URL = env.API_URL;

interface ServiceOptios {
    cache?: RequestCache
    revalidate?: number
}

interface GetBlogsParams {
    isFeatured?: boolean;
    search?: string;

}

export const blogService = {
    getBlogPosts: async function (params?: GetBlogsParams, options?: ServiceOptios) {
        try {
            const url = new URL(`${API_URL}/posts`);
            if (params) {
                Object.entries(params).forEach(([Key, value]) => {
                    if (value !== undefined && value !== null && value !== "") {
                        url.searchParams.append(Key, value);
                    }
                });
            }
            url.searchParams.append("key", "value");
            // console.log(url.toString());
            const config: RequestInit = {};
            if (options?.cache) {
                config.cache = options.cache;
            }
            if (options?.revalidate) {
                config.next = { revalidate: options.revalidate }
            }
            const res = await fetch(url.toString(), config);
            const result = await res.json();
            return {
                data: result?.data?.data || [],
                error: null
            };
        } catch (err) {
            return { data: [], error: "Error" };
        }
    },

    getBlogById: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/posts/${id}`);

      const data = await res.json();

      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },
};