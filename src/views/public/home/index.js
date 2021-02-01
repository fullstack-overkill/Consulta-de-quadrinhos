import "./style.scss";
import { useState } from "react";
import UiAvatar from "../../../components/ui/avatar";

import AppHeader from "../../../components/app/header";
import AppComicsList from "../../../components/app/comicsList";

export default () => {
  const [hover, setHover] = useState(false);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      console.log("scrol");
    }
  };

  return (
    <div className="body" onScroll={handleScroll}>
      <a className="scroll" href="#coll-2">
        <span className="material-icons">expand_more</span>
      </a>
      <div className="coll-1">
        <AppHeader />
        <main>
          <section className="row-1">S.H.I.E.L.D</section>
          <section className="row-2">
            Sua Biblioteca de Quadrinhos Online
          </section>
          <section className="row-3">
            <AppComicsList />
          </section>
        </main>
      </div>
      <div id="coll-2" className="coll-2">
        <UiAvatar />
      </div>
    </div>
  );
};
