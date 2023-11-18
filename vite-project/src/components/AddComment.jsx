import React, { useState } from "react";
import { supabase } from "../client";

// update this to show authenticated user's information rather than this prop stuff
export default function AddComment({ user, post_id, comments, setComments}) {
  const [input, setInput] = useState("")

  const handleSend = async (event) => {
    event.preventDefault();
    if (input.length > 0) {
      const { data, error } = await supabase.from("comments").insert([
        {
          message: input,
          commenter_id: user.uuid,
          original_post: post_id,
        },
      ]).select();

      setInput("");
      console.log([...comments, data[0]])
      setComments([...comments, data[0]])
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="add-comment-container">
      <div className="add-comment-media">
        <img className="pfp" src={user.pfp} width="50" height="50"></img>
        <textarea
          className="comment-box"
          placeholder="Add a comment..."
          value = {input}
          onChange = {handleChange}
          cols={1}
          rows={1}
        ></textarea>
      </div>
      <div className="btn-box">
        <button className="btn" onClick={handleSend}>
          Send Comment
        </button>
      </div>
    </div>
  );
}
