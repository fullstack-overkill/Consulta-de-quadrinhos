import { useState, useEffect, useRef } from "react";
import serviceComic from "../../../services/axios/modules/comics.js";

import AppComic from "../comic";
import "./style.scss";

export default () => {
  const [comics, setComics] = useState([]);

  let api = async () => {
    const pubkey = "94cfaf010b56bcb536f7e327c7258415";
    const ts = new Date().getTime();
    const service = new serviceComic();
    await service.getAll("", { apikey: pubkey, formatType: 'comic', noVariants: true }).then((response) => {
      setComics(response.data.data.results);
    });
  };

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      api();
      isInitialMount.current = false;
    }
  });

  return (
    <section className="app-comic-list">
      <div className="comics-scroller">
        {comics.map((value, index) => {
          return (
            <div key={index}>
              <AppComic comic={value} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
