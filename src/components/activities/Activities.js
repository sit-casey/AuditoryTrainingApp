import { React } from "react";

import Activity from "../activity/Activity";

import classes from "./acts.module.css";

/*
Purpose: Display for Activities Page. Contains the information to pass to cards (Activity) on the page.
Focuses on "ALl Activities" Section. To Edit "Recent Activities", refer back to ActivityPage.js
*/
function Activities(props) {

  //Handles the color coded difficulty.
  const lvlColorHandler = (lvl) => {
    if (lvl === 1) return `rgb(218, 247, 166)`;
    if (lvl === 2) return `rgb(133, 193, 233)`;
    if (lvl === 3) return `rgb(93, 173, 226)`;
    if (lvl === 4) return `rgb(102, 0, 204)`;
    return `rgb(${(63, 137, 187)})`;
  };

  return (
    <div className={classes.acts__container}>
      <h3>All Activities</h3>
      <div className={classes.acts__title}>
      {/* Ling Activity is passed here as props.title. */}
        <h2>{props.title}</h2> 
      </div>

      {/* Retrieves list of activities from Actiivity helper*/}
      {props.activitiesArr.map((card, i) => (

        // Actual activity object that displays each individual card
        <Activity
          key={i}
          title={card.title}
          src={card.src}
          link={card.link} //Adjust link to new
          level={lvlColorHandler(card.level)}
        />
      ))}
    </div>
  );
}

export default Activities;
