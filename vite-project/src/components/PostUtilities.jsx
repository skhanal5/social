import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
export default function PostUtilities({upvotes, downvotes}) {

  return (
    <div className="post-utils">
      <div className="post-util">
        <ArrowUpCircleIcon className="post-util-icon"></ArrowUpCircleIcon>
        <span className="post-util-txt">{upvotes}</span>
      </div>
      <div className="post-util">
        <ArrowDownCircleIcon className="post-util-icon"></ArrowDownCircleIcon>
        <span className="post-util-txt">{downvotes}</span>
      </div>
    </div>
  );
}
