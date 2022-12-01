import React from "react";
import { CardsData } from "../../../config/DashBoard";
import Card from "../Card/Card";
import "./Cards.css";
import { UilUserPlus, UilUserMd } from "@iconscout/react-unicons";
const Cards = () => {
  return (
    <div className="Cards">
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}

      <div className="mentorConnectCard">
        <div className="mentorImage">
          <img src="/userimg.png" alt="" />
        </div>

        <div>
          <h3>Mentor Connect</h3>
          <button>
            Connect &nbsp; &nbsp;
            <UilUserPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
