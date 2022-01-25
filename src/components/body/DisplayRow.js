import { useState, useEffect } from "react";
import classes from "./DisplayRow.module.css";
import OneCard from "./PrductCard/OneCard";
import uniStyle from "../../index.module.css";
import axios from "axios";

export default function DisplayRow({ caption, theme }) {
  const [products, setproducts] = useState([]);

  let primeryText = uniStyle.darkerColor;
  let secondaryText = uniStyle.darkColor;

  if (theme == "dark") {
    primeryText = uniStyle.lighterColor;
    secondaryText = uniStyle.lightColor;
  }

  const apiLink =
    "https://thrilloclone.cdn.prismic.io/api/v2/documents/search?ref=YelK7hEAAB8Aq72D&q=%5B%5Bat(document.type%2C%22trip%22)%5D%5D";
  // fetch(apiLink)
  //   .then((response) => {
  //     console.log(response);
  //     // response.json;
  //   })
  //   .then((data) => {
  //     // console.log(data);
  //   });

  useEffect(() => {
    axios.get(apiLink).then((res) => {
      setproducts(res.data.results);
      // console.log((res.data.results.length));
    });
  }, []);

  return (
    <div className={classes.sectionContainer}>
      <h1 className={classes.topline + " " + primeryText}>{caption}</h1>
      <div className={classes.smallDivider}></div>
      <div className={classes.rowContainer}>
        <div
          className={classes.longDiv}
          style={{ width: `${220 * 5 + 5 * 15}px` }}
        >
          {products.map((k, i) => {
            k = k.data
            console.log(k);
            return (
              <OneCard
                key={i}
                name={k.trip_name[0].text}
                price={k.trip_price[0].text}
                currentPrice={k.trip_current_price[0].text}
                rating={k.trip_rating_and_review[0].text}
                image={k.trip_image.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
