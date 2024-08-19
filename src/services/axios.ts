import api from "./api";

export const fetchJobs = async (
  itemQuery: string,
  page: number,
  limit: number
) => {
  try {
    const response = await api.get("/jobs", {
      params: {
        language_profile_uuid: "ee5d991c-cdc6-4e83-b0b3-96f147208549",
        itemQuery,
        page,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};
