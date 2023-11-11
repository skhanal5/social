import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
export default function PostUtilities() {
  return (
    <div className="post-utils">
      <div className="post-util">
        <ArrowUpCircleIcon className="post-util-icon"></ArrowUpCircleIcon>
        <span className="post-util-txt">14</span>
      </div>
      <div className="post-util">
        <ArrowDownCircleIcon className="post-util-icon"></ArrowDownCircleIcon>
        <span className="post-util-txt">30</span>
      </div>
    </div>
  );
}
