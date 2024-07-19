import "./HomePage.css";

import { Link, useLoaderData } from "react-router-dom";

export default function HomePage() {
  const mangas = useLoaderData();

  return (
    <body>
      <h1 className="titlehome">Bienvenu(e) sur VirtualBiblio</h1>
      <p className="phome">Votre bibiothèque qui vous suit au quotidien</p>
      <section className="mangascards">
        {mangas.map((manga) => (
          <article className="mangacard" key={manga.id}>
            <div className="manganame">
              <h2>{manga.name}</h2>
            </div>
            <div className="buttons">
              <Link to={`/manga/${manga.id}`}>
                <button type="button">Voir plus</button>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </body>
  );
}
