import React, { useState } from "react";
import { supabase } from "../../../client";
import { useLocation } from "react-router-dom";
import { PhotoIcon, PencilIcon } from "@heroicons/react/24/outline";

export default function PostModal() {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [media, setMedia] = useState("");
  const [message, setMessage] = useState("");

  let { state } = useLocation();

  const getColor = (selectedTopic, color) => {
    return selectedTopic === topic ? color : '';
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTopicClick = (e) => {
    setTopic(e.target.id);
  };

  const handleMediaChange = (e) => {
    setMedia(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handlePost = async (event) => {
    event.preventDefault();
    if (message.length > 0 && title.length > 0 && topic != "") {
      const { data, error } = await supabase
        .from("posts")
        .insert([
          {
            post_contents: message,
            topic: topic,
            author_uuid: state.user.uuid,
            title: title,
            media: media,
          },
        ])
        .select();

      setMedia("");
      setMessage("");
      setTitle("");
      setTopic("");
      window.location.href = "/";
    }
  };

  return (
    <div className="container">
      <div className="add-post-container">
        <div className="add-post-media">
          <img
            className="pfp"
            src={state.user.pfp}
            width="50"
            height="50"
          ></img>
          <div className="add-post-media-inputs">
            <div className="input-container">
              <PencilIcon className="add-post-icons-1"></PencilIcon>
              <input
                className="input-title"
                type="text"
                value={title}
                placeholder="Enter title"
                onChange={handleTitleChange}
              ></input>
            </div>
            <div className="input-topic-cards">
              <div className="post-topic-card" id="World News" style={{color: getColor("World News", "#fc0303"), cursor:"pointer"}} onClick={handleTopicClick}>
                World News
              </div>
              <div className="post-topic-card" id="Sports" style={{color: getColor("Sports", "#fff263"), cursor:"pointer"}} onClick={handleTopicClick}>
                Sports
              </div>
              <div className="post-topic-card" id="Music" style={{color: getColor("Music", "#5643fa"), cursor:"pointer"}} onClick={handleTopicClick}>
                Music
              </div>
              <div className="post-topic-card" id="Politics" style={{color: getColor("Politics", "#1cacff"), cursor:"pointer"}} onClick={handleTopicClick}>
                Politics
              </div>
              <div className="post-topic-card" id="Gaming" style={{color: getColor("Gaming", "#bdeaff"), cursor:"pointer"}} onClick={handleTopicClick}>
                Gaming
              </div>
              <div className="post-topic-card" id="Fashion" style={{color: getColor("Fashion", "#ed61e4"), cursor:"pointer"}} onClick={handleTopicClick}>
                Fashion
              </div>
              <div className="post-topic-card" id="Economy" style={{color: getColor("Economy",  "#73ff69"), cursor:"pointer"}} onClick={handleTopicClick}>
                Economy
              </div>
              <div className="post-topic-card" id="Entertainment" style={{color: getColor("Entertainment", "#fcca03"), cursor:"pointer"}} onClick={handleTopicClick}>
                Entertainment
              </div>
            </div>
            <div className="input-container">
              <PhotoIcon className="add-post-icons-2"></PhotoIcon>
              <input
                className="input-media"
                type="text"
                value={media}
                placeholder="Enter Image URL (Optional)"
                onChange={handleMediaChange}
              ></input>
            </div>
            <div>
            </div>
            <textarea
              className="message-box"
              placeholder="Say something about your topic..."
              value={message}
              onChange={handleMessageChange}
              cols={1}
              rows={1}
            ></textarea>
          </div>
        </div>
        <div className="btn-box-2">
          <button className="btn" onClick={handlePost}>
            Post Topic
          </button>
        </div>
      </div>
    </div>
  );
}
