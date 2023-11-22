import React from "react";

export default function TopicCard({topic}) {

    const getColor = () => {
        let category = topic
        if (category === "World News") {
            return "#fc0303"
        } else if (category == "Sports") {
            return "#fff263"
        } else if (category == "Music") {
            return "#5643fa"
        } else if (category == "Politics") {
            return "#1cacff"
        } else if (category == "Gaming") {
            return "#bdeaff"
        } else if (category == "Fashion") {
            return "#ed61e4"
        } else if (category == "Economy") {
            return "#73ff69"
        } else if (category == "Entertainment") {
            return "#fcca03"
        }
    }

    return (
        <div className="topic-card" style={{color: getColor()}}>
            {topic}
        </div>
    )
}