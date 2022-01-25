import classes from "./OneCard.module.css";

export default function OneCard({ name, price, currentPrice, rating, image }) {
  return (
    <div className={classes.gicOuter}>
      <div className={classes.generalImageCard}>
        <img className={classes.imgInCard} src={image} alt="" />
      </div>
      <div className={classes.gicBottom}>
        <p className={classes.popinsFont4 + " " + classes.pckName}>{name}</p>
        <p className={classes.popinsFont4 + " " + classes.pckRate}>
          {/* <i className={classes.fa fa-star yellowColor}></i> */}
          {rating}
        </p>
        <div>
          <p className={classes.popinsFont6 + " " + classes.pckRate}>
            {currentPrice}
            <del className={classes.pckRate}>{price}</del>
          </p>
        </div>
      </div>
    </div>
  );
}
