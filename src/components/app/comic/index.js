import { useState } from "react";
import "./style.scss";

export default (props) => {
  const [hover, setHover] = useState(false);
  console.log(props.comic);
  return (
    <article className="app-card">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <>
          <button className={hover ? "fadeIn" : "fadeOut"}>
            <span className="material-icons">account_circle</span>
            Ver mais
          </button>
          <button className={hover ? "fadeIn" : "fadeOut"}>
            <span className="material-icons">add</span>
            Lista de leitura
          </button>
        </>
      </div>
      <img src={props.comic.thumbnail.path + "." + props.comic.thumbnail.extension} />
    </article>
  );
};
