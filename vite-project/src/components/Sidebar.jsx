import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  NewspaperIcon,
  MusicalNoteIcon,
  ShoppingBagIcon,
  TrophyIcon,
  GlobeAmericasIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <br></br>
      <Link className="sidebar-row" to="/">
        <HomeIcon className="icon"></HomeIcon>
        <span className="title">Home</span>
      </Link>
      <Link className="sidebar-row" to="/gallery">
        <GlobeAmericasIcon className="icon"></GlobeAmericasIcon>
        <span className="title">World News</span>
      </Link>
      <Link className="sidebar-row" to="/gallery">
        <TrophyIcon className="icon"></TrophyIcon>
        <span className="title">Sports</span>
      </Link>
      <Link className="sidebar-row" to="/gallery">
        <MusicalNoteIcon className="icon"></MusicalNoteIcon>
        <span className="title">Music</span>
      </Link>
      <Link className="sidebar-row" to="/create">
        <NewspaperIcon className="icon"></NewspaperIcon>
        <span className="title">Politics</span>
      </Link>
      <Link className="sidebar-row" to="/create">
        <RocketLaunchIcon className="icon"></RocketLaunchIcon>
        <span className="title">Gaming</span>
      </Link>
      <Link className="sidebar-row" to="/create">
        <ShoppingBagIcon className="icon"></ShoppingBagIcon>
        <span className="title">Fashion</span>
      </Link>
      <Link className="sidebar-row" to="/create">
        <CurrencyDollarIcon className="icon"></CurrencyDollarIcon>
        <span className="title">Finance</span>
      </Link>
    </div>
  );
}
