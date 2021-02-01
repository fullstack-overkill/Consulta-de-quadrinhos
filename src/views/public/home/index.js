import "./style.scss";
import UiAvatar from "../../../components/ui/avatar";

import AppHeader from "../../../components/app/header";
import AppComicsList from "../../../components/app/comicsList";

export default () => {
  return (
    <div className="body">
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
      <div className="coll-2"></div>
    </div>
  );
};
