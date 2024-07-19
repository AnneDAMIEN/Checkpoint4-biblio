import { NavLink, useLoaderData } from "react-router-dom";

import "./DetailsProduct.css";

export default function DetailsProduct() {
  const datamanga = useLoaderData();

  return (
    <body className="mangapage">
      <NavLink to="/">
        <button type="button" className="buttonBackSecond">
          Back
        </button>
      </NavLink>
      <div className="mangadetails">
        <div>
          <img
            src={datamanga.image}
            alt="manga"
            className="imagemangadetails"
          />
        </div>
        <div>
          {" "}
          <span className="namemangadetails">{datamanga.name}</span>
        </div>

        <p className="descriptionmangadetails">{datamanga.description}</p>
      </div>
    </body>
  );
}
