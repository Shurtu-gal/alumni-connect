import React from "react";
import { Card } from "../../components/shared";
import mentors from "../../../config/Mentors";
import { CardContainer } from "./style";

const Mentors = ({ id }) => {
  return (
    <div
      style={{
        backgroundColor: "var(--background-tertiary)",
        padding: "3em 2em",
        textAlign: "center",
      }}
    >
      <h1>The Alumni</h1>
      <h3>The Mentors guiding everyone in the team</h3>
      <CardContainer>
        {mentors.mentorList.map((elem) => (
          <Card
            src={elem.src}
            alt={elem.alt}
            desc={elem.desc}
            key={elem.id}
            id={elem.id}
            name={elem.name}
            isConnect="true"
          ></Card>
        ))}
      </CardContainer>
    </div>
  );
};

export default Mentors;
