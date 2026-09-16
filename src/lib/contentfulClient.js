import { createClient } from "contentful";

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID || "your-space-id";
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || "your-access-token";

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export const fetchContent = async (contentType) => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: contentType,
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching content:", error);
    return [];
  }
};

export const fetchSingleContent = async (entryId) => {
  try {
    const response = await contentfulClient.getEntry(entryId);
    return response;
  } catch (error) {
    console.error("Error fetching content:", error);
    return null;
  }
};