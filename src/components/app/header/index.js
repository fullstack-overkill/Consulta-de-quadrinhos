import AppLogo from "../logo";
import UiSearch from "../../ui/search";
import { Link } from "react-router-dom";
import "./style.scss";

export default () => {
  return (
    <>
      <header className="app-header">
        <AppLogo />
        <nav>
          <Link to="/">Sobre</Link>
          <Link to="/">Aplicativo</Link>
          <section>
            <UiSearch />
          </section>
        </nav>
      </header>
    </>
  );
};
