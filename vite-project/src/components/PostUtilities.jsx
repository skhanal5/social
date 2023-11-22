import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { supabase } from "../../client";


// on refresh the logic for getting upvotes/downvotes doesn't work
// needs to be a  query it seems

export default function PostUtilities({ upvotes, downvotes, post_id }) {
  let [upvote, setUpvote] = useState(parseInt(upvotes, 10))
  let [downvote, setDownvote] = useState(parseInt(downvotes, 10))
  const handleUpvote = async () => {
    setUpvote(upvote+1)
    const { error } = await supabase
      .from("posts")
      .update({ upvotes: upvote })
      .eq("post_id", post_id);
  };

  const handleDownvote = async () => {
    setDownvote(downvote-1)
    const { error } = await supabase
      .from("posts")
      .update({ downvotes: downvote})
      .eq("post_id", post_id);
  };


  return (
    <div className="post-utils">
      <div className="post-util">
        <ArrowUpCircleIcon
          className="post-util-icon"
          onClick={handleUpvote}
        ></ArrowUpCircleIcon>
        <span className="post-util-txt">{upvote}</span>
      </div>
      <div className="post-util">
        <ArrowDownCircleIcon
          className="post-util-icon"
          onClick={handleDownvote}
        ></ArrowDownCircleIcon>
        <span className="post-util-txt">{downvote}</span>
      </div>
    </div>
  );
}
