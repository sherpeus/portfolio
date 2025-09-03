import { useState, useEffect } from "react";

export function useFadeIn() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50); // tiny delay
    return () => clearTimeout(timeout);
  }, []);

  return loaded;
}
