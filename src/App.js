import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactPlayer from "react-player";
import TenStreamers from "./twitchFiles/getTenStreamers";
import SpinningWheel from "./spinningwheel/displayComponent";

class BasicExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      viewing: "",
      name: "",
      game: "",
      wedgesSource: {},
      result: ""
    };
    this.getStreamers = this.getStreamers.bind(this);
    this.displayStream = this.displayStream.bind(this);
  }

  getStreamers() {
    const streamers = new TenStreamers();
    return streamers.getTenStreams().then(payload => {
      streamers.getTenImagesAndURLS(payload);
      return streamers.imagesAndURLS;
    });
  }

  displayStream(spinResult) {
    return <ReactPlayer url={`${spinResult}`} width={"inherit"} />;
  }

  render() {
    return (
      <Router>
        <Fragment>
          <SpinningWheel
            sources={this.getStreamers}
            displayResult={this.displayStream.bind(this)}
            buttonColor={"orange"}
            backgroundStart={"black"}
            backgroundSpinning={"orange"}
            outerRingColor={"white"}
          />
        </Fragment>
      </Router>
    );
  }
}

export default BasicExample;
