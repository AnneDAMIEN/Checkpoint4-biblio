import { NavLink } from "react-router-dom";

import "./DataPage.css";

export default function DataPage() {
  return (
    <body>
      <NavLink to="/">
        <button type="button" className="buttonBackSecond">
          Back
        </button>
      </NavLink>
      <h1 className="titledata">A propos de vos informations</h1>
      <p className="pdata">
        <p>
          Chez notre bibliothèque de manga virtuelle, nous accordons une
          importance primordiale à la protection de vos informations
          personnelles, conformément au Règlement Général sur la Protection des
          Données (RGPD).
        </p>
        <p>
          {" "}
          Nous recueillons uniquement les données nécessaires pour vous offrir
          une expérience utilisateur optimale. Cela inclut votre nom, votre
          adresse e-mail, et vos préférences de lecture.{" "}
        </p>
        <p>
          Vos données sont utilisées pour gérer votre compte utilisateur,
          personnaliser vos recommandations de lecture et vous informer des
          mises à jour et des nouveautés.
        </p>
        <p>
          Nous mettons en œuvre des mesures de sécurité avancées pour protéger
          vos informations contre tout accès non autorisé, modification,
          divulgation ou destruction.
        </p>
        <p>
          Conformément au RGPD, vous avez le droit d'accéder à vos données
          personnelles, de rectifier ou supprimer vos données de restreindre ou
          vous opposer au traitement de vos données et de retirer votre
          consentement à tout moment.
        </p>
        <p>
          Pour exercer ces droits, veuillez nous contacter à votre adresse
          e-mail de contact. Nous nous engageons à respecter votre vie privée et
          à assurer la sécurité de vos informations personnelles. Merci de votre
          confiance et bonne lecture !
        </p>
      </p>
    </body>
  );
}
