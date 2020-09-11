import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Imrul",
      age: 24,
      skill: "Laravel",
    },
    {
      id: 2,
      name: "Hasan",
      age: 23,
      skill: "ReactJS",
    },
    {
      id: 3,
      name: "Imu",
      age: 25,
      skill: "JQuery",
    },
    {
      id: 4,
      name: "Backstreet",
      age: 20,
      skill: "Wordpress",
    },
    {
      id: 5,
      name: "Boy",
      age: 21,
      skill: "JavaScript",
    },
  ];

  const PersonList = persons.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));

  const names = ["Imrul", "Hasan", "UAP", "CSE", "Imrul"];
  const NameList = names.map((name, index) => (
    <h2 key={index}>
      {index} : {name}
    </h2>
  ));

  // return <div>{PersonList}</div>;
  return <div> {NameList}</div>;
}

export default NameList;
