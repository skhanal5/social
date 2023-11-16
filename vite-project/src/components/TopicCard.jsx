import React from "react";

export default function TopicCard({topic}) {

    const getColor = () => {
        let category = topic
        if (category === "World News") {
            return "#e63c3c"
        } else if (category == "Sports") {
            return "#ffbe4f"
        } else if (category == "Music") {
            return "#5056fa"
        } else if (category == "Politics") {
            return "#1542d6"
        } else if (category == "Gaming") {
            return "#616ded"
        } else if (category == "Fashion") {
            return "#ed61e4"
        } else if (category == "Economy") {
            return "#73ff69"
        } else if (category == "Entertainment") {
            return "#d0d615"
        }
    }

    return (
        <div className="post-topic-card" style={{color: getColor()}}>
            {topic}
        </div>
    )
}