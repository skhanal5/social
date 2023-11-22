import React from "react";
import PostUtilities from "./PostUtilities";
import { Link } from "react-router-dom";
import TopicCard from "./TopicCard";

export default function PostCell({
  id,
  author,
  author_id,
  username,
  pfp,
  timestamp,
  topic,
  title,
  message,
  img,
  message_preview,
  upvotes,
  downvotes,
}) {

  return (

    //terrible approach to the URL's
    <Link
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
      to={`/topic/${id}`}
      state={{
        id,
        author,
        author_id,
        username,
        pfp,
        timestamp,
        topic,
        title,
        message,
        img,
        upvotes,
        downvotes,
      }}
    >
      <div className="post">
        <img className="pfp" src={pfp} width="50" height="50"></img>
        <div className="post-content">
          <div className="post-metadata">
            <span>
              <strong>{author}</strong>
            </span>
            <span>{"@" + username}</span>
            <span>{timestamp}</span>
          </div>
          <TopicCard topic={topic}></TopicCard>
          <div className="post-subject">
            <div>{title}</div>
          </div>
          <div className="post-message">{message_preview}</div>
          <PostUtilities
            post_id={id}
            upvotes={upvotes}
            downvotes={downvotes}
          ></PostUtilities>
        </div>
      </div>
    </Link>
  );
}
