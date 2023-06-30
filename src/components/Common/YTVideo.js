import React, { Component } from "react";
import ReactPlayer from "react-player";

let factor = 5;

class YTVideo extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ReactPlayer
          url={this.props.url}
          width={`${factor * 16}vw`}
          height={`${factor * 8}vw`}
        />
      </div>
    );
  }
}

export default YTVideo;
