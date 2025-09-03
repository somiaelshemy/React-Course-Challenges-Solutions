import React from "react";
import ReactDom from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar></Avatar>
      <div className="data">
        <Intro></Intro>
        <SkillList></SkillList>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg"
      alt="cat"
    ></img>
  );
}

function Intro() {
  return (
    <div>
      <h1>dumb cat</h1>
      <p>
        I eat salmon, Tuna, potatoes and carrots. yummy yummy yummy in my tummy
        tummy tummy.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((el) => (
        <Skill skill={el.skill} level={el.level} color={el.color}></Skill>
      ))}
    </ul>
  );
}

function Skill(probs) {
  return (
    <li className="skill" style={{ backgroundColor: probs.color }}>
      <span>{probs.skill}</span>
      <span>
        {probs.level === "beginner"
          ? "🐤"
          : probs.level === "intermediate"
          ? "🦆"
          : "🦃"}
      </span>{" "}
    </li>
  );
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
