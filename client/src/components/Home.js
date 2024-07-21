import React, { useEffect, useState } from "react";
import Card from "./Card";
import state from "../data/data";
import axios from "axios";

const Home = () => {
  const [cards, setCards] = useState();
  const [loading, setLoading] = useState(true);
  const base_url =
    "http://blogportalnode.eba-am6kumua.ap-south-1.elasticbeanstalk.com";
  const init = async () => {
    await axios.post(`${base_url}/blog/data`).then((res) => {
      setCards(res.data.cards);
      setLoading(false);
    });
  };
  useEffect(() => {
    init();
  });
  return loading ? (
    <h1>loading</h1>
  ) : (
    <>
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default Home;
