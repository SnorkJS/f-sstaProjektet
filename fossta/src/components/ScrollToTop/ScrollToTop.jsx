// En funktion som gör att sidan alltid skrollar till toppen när man routrar till en ny sida. 

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}