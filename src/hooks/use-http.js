import { useCallback, useState } from "react";

const useHttp = () => {
  const request = async (
    url,
    method = "GET",
    body = null,
    headers = { "Content-Type": "application-json" }
  ) => {
    try {
      const response = await fetch(url, { method, body, headers });
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  return { request };
};

export default useHttp;
