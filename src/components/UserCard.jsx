import React, { useState, useCallback } from "react";
import UserCardComponent from "./UserCardComponent";
import UserTableComponent from "./UserTableComponent";

const UserData = [
  {
    name: "Sangeetha",
    city: "New York",
    description: "Front-end developer",
    skills: ["UI/UX", "Front-end Development", "HTML", "CSS", "Javascript", "React", "Node"],
    online: false,
    profile: "images/demo2.jpg",
  },
  {
    name: "Mohammed Ijjas",
    city: "Paris",
    description: "Full Stack web developer",
    skills: ["vlogging", "Web Development", "HTML", "CSS", "Javascript", "React", "Angular"],
    online: true,
    profile: "images/demo1.jpg",
  },
  {
    name: "Vidhya",
    city: "California",
    description: "Senior Software developer",
    skills: ["C", "Java", "Python", "MySQL", "MongoDB"],
    online: true,
    profile: "images/demo2.jpg",
  },
];

const Usercard = () => {
  const [view, setView] = useState("card");

  const handleViewChange = useCallback((viewType) => {
    setView(viewType);
  }, []);

  return (
    <>
      <section>
        <div>
          <span onClick={() => handleViewChange("table")}>Table</span>
          <span onClick={() => handleViewChange("card")}>Card</span>
        </div>
        {view === "card" ? (
          UserData.map((user, index) => <UserCardComponent key={index} user={user} />)
        ) : (
          <UserTableComponent users={UserData} />
        )}
      </section>
    </>
  );
};

export default Usercard;
