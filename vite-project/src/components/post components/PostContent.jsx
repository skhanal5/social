import React, { useState } from "react";
import PostUtilities from "./PostUtilities";
import TopicCard from "./TopicCard";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { supabase } from "../../../client";
// delete this later cuase this is just a repeat of PostCell
export default function PostContent({
  id,
  author,
  author_id,
  user,
  username,
  pfp,
  timestamp,
  topic,
  title,
  message,
  img,
  upvotes,
  downvotes,
}) {
  const [input, setInput] = useState(message);
  const [editing, setEditing] = useState(false);
  const handleDelete = async () => {
    console.log(user);
    console.log(id);
    console.log(author);
    if (user.uuid == author_id) {
      const { error } = await supabase.from("posts").delete().eq("post_id", id);
    }
    window.location.href = "/";
  };

  const handleEdit = () => {
    if (!editing && user.uuid == author_id) {
      setEditing(true);
    }
  };

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const submitEdits = async () => {
    if (user.uuid == author_id) {
      const { error } = await supabase
        .from("posts")
        .update({ post_contents: input })
        .eq("post_id", id);
      setInput(input);
      setEditing(false);
    }
  };

  return (
    <div className="post">
      <img className="pfp" src={pfp} width="50" height="50"></img>
      <div className="post-content">
        <div className="post-metadata">
          <div className="post-metadata-text">
            <strong>{author}</strong>
            <div>{"@" + username}</div>
            <div>{timestamp}</div>
          </div>
          <div className="admin-utils">
            <PencilSquareIcon
              className="trash-icon"
              onClick={handleEdit}
            ></PencilSquareIcon>
            <TrashIcon
              className="trash-icon"
              onClick={handleDelete}
            ></TrashIcon>
          </div>
        </div>
        <TopicCard topic={topic}></TopicCard>
        <div className="post-subject">
          <div>{title}</div>
        </div>
        <div>
          {
            img ? 
            <img className="post-img" src={img}></img>
            :
            <></>
          }
        </div>
        {editing ? (
          <div>
            <textarea
              className="edit-message-box"
              placeholder="Say something about your topic..."
              value={input}
              onChange={updateInput}
              cols={1}
              rows={1}
            ></textarea>
            <div className="btn-box-2">
              <button className="btn" onClick={submitEdits}>
                Edit Topic
              </button>
            </div>
          </div>
        ) : (
          <div className="post-message">{input}</div>
        )}
        <PostUtilities
          post_id={id}
          upvotes={upvotes}
          downvotes={downvotes}
        ></PostUtilities>
      </div>
    </div>
  );
}
