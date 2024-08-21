import api from "./api";

export const fetchJobs = async (
  endpoint: string,
  params: {
    itemQuery?: string;
    page?: number;
    limit?: number;
    uri?: string;
  }
) => {
  try {
    const response = await api.get(endpoint, {
      params: {
        language_profile_uuid: "ee5d991c-cdc6-4e83-b0b3-96f147208549",
        ...params,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};
