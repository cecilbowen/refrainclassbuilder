import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import * as Classes from "../classes";

const asterKnight = ["asterKnight.png"];
const marginalMaze = ["marginalMaze.png"];
const shinobushi = ["shinobushi.png"];
const peerFortress = ["peerFortress.png"];
const theatricalStar = ["theatricalStar.png"];
const madRaptor = ["madRaptor.png"];
const gothicCoppelia = ["gothicCoppelia.png"];
const demonReaper = ["demonReaper.png"];

const images = [
  asterKnight,
  marginalMaze,
  shinobushi,
  peerFortress,
  theatricalStar,
  madRaptor,
  gothicCoppelia,
  demonReaper
];

const CharacterPortrait = ({ className }) => {
  const [backgroundImage, setBackgroundImage] = useState(className);

  const grabCharacterPortrait = () => {
    let index = Classes.names.indexOf(className);
    const imageName = images[index][Math.floor(Math.random() * images[index].length)];
    return `${process.env.PUBLIC_URL}/images/${imageName}`;
  };

  useEffect(() => {
    setBackgroundImage(grabCharacterPortrait());
    console.log(className, grabCharacterPortrait());
  }, [className]);

  return (
    <div
      className={"CharacterPortrait"}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    ></div>
  );
};

CharacterPortrait.propTypes = {
  className: PropTypes.string
};

export default CharacterPortrait;
