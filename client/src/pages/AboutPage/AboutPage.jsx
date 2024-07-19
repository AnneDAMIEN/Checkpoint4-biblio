import { NavLink } from "react-router-dom";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <body>
      <NavLink to="/">
        <button type="button" className="buttonBackSecond">
          Back
        </button>
      </NavLink>
      <h1 className="titleaboutus">A propos de nous</h1>
      <p className="pabout">
        <p>
          Bienvenue à notre bibliothèque de manga virtuelle, votre destination
          ultime pour découvrir et explorer l'univers captivant des mangas.
        </p>{" "}
        <p>
          {" "}
          Notre mission est de rassembler les amateurs de manga du monde etier
          et de leur offrir une expérience immersive à travers une vaste
          collection de titres emblématiques et nouveaux.
        </p>
        <p>
          {" "}
          C'est cette passion qui nous pousse à enrichir constamment notre
          collection et à proposer des contenus de qualité. Notre bibliothèque
          propose une sélection diversifiée de mangas couvrant tous les genres,
          des classiques intemporels comme <strong>"One Piece"</strong> et{" "}
          <strong>"Dragon Ball Z"</strong> aux chefs-d'œuvre modernes comme
          <strong>"FullMetal Alchemist"</strong> et <strong>"Naruto"</strong>.
        </p>{" "}
        Que vous soyez fan d'action, de romance, de fantasy ou de
        science-fiction, vous trouverez forcément votre bonheur parmi nos
        nombreux titres.
        <p>
          {" "}
          Rejoignez-nous dès aujourd'hui et laissez-vous emporter par les
          histoires extraordinaires qui peuplent notre collection. Merci de
          faire partie de notre communauté et de partager avec nous votre
          passion pour les mangas !
        </p>
      </p>
    </body>
  );
}
