import { useState } from "react";

export const useFetching = (cb) => {
  const [laoding, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async (...args) => {
    try {
      setLoading(true);
      await cb(...args);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return [fetching, laoding, error];
};
