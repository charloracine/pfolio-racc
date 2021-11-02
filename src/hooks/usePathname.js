import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const usePathname = () => {
  const [path, setPath] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const endroit = `/${location.pathname.split("/")[1]}`;
    setPath(endroit);
  }, [location.pathname]);

  return { path };
};
