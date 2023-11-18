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
  RocketLaunchIcon,
  PlayCircleIcon
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <br></br>
      <Link className="sidebar-row" to="/">
        <HomeIcon className="icon"></HomeIcon>
        <span className="title">Home</span>
      </Link>
      <div className="sidebar-row">
        <GlobeAmericasIcon className="icon"></GlobeAmericasIcon>
        <span className="title">World News</span>
      </div>
      <div className="sidebar-row">
        <TrophyIcon className="icon"></TrophyIcon>
        <span className="title">Sports</span>
      </div>
      <div className="sidebar-row">
        <MusicalNoteIcon className="icon"></MusicalNoteIcon>
        <span className="title">Music</span>
      </div>
      <div className="sidebar-row">
        <NewspaperIcon className="icon"></NewspaperIcon>
        <span className="title">Politics</span>
      </div>
      <div className="sidebar-row">
        <RocketLaunchIcon className="icon"></RocketLaunchIcon>
        <span className="title">Gaming</span>
      </div>
      <div className="sidebar-row">
        <ShoppingBagIcon className="icon"></ShoppingBagIcon>
        <span className="title">Fashion</span>
      </div>
      <div className="sidebar-row">
        <CurrencyDollarIcon className="icon"></CurrencyDollarIcon>
        <span className="title">Economy</span>
      </div>
      <div className="sidebar-row">
        <PlayCircleIcon className="icon"></PlayCircleIcon>
        <span className="title">Entertainment</span>
      </div>
    </div>
  );
}
