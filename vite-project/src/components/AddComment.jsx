import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function AddComment() {
  return (
    <div className="add-comment-container">
      <div className="add-comment-media">
        <img className="pfp" width="50" height="50"></img>
        <textarea
          className="comment-box"
          placeholder="Add a comment..."
          cols={1}
          rows={1}
        ></textarea>
      </div>
      <div className="btn-box">
        <button className="send-btn">Send Comment</button>
      </div>
    </div>
  );
}
