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
        <span>Home</span>
      </Link>
      <Link className="sidebar-row" to="/gallery">
        <GlobeAmericasIcon className="icon"></GlobeAmericasIcon>
        <span>World News</span>
      </Link>
      <Link className="sidebar-row" to="/gallery">
        <TrophyIcon className="icon"></TrophyIcon>
        <span>Sports</span>
      </Link>
      <Link className="sidebar-row" to="/gallery">
        <MusicalNoteIcon className="icon"></MusicalNoteIcon>
        <span>Music</span>
      </Link>
      <Link className="sidebar-row" to="/create">
        <NewspaperIcon className="icon"></NewspaperIcon>
        <span>Politics</span>
      </Link>
      <Link className="sidebar-row" to="/create">
        <RocketLaunchIcon className="icon"></RocketLaunchIcon>
        <span>Gaming</span>
      </Link>
      <Link className="sidebar-row" to="/create">
        <ShoppingBagIcon className="icon"></ShoppingBagIcon>
        <span>Fashion</span>
      </Link>
      <Link className="sidebar-row" to="/create">
        <CurrencyDollarIcon className="icon"></CurrencyDollarIcon>
        <span>Finance</span>
      </Link>
    </div>
  );
}
