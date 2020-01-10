import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { loadPodcasts } from "./actions/podcasts_actions";

import Player from "./components/Player";
import Listing from "./components/Listing";

const AppContainer = styled.div`
  width: 500px;
  top: 20px;
  left: calc((100% - 500px) / 2);
  height: calc(100vh - 40px);
  position: fixed;
`;

function App({ loadPodcasts, list, current }) {
  useEffect(() => {
    loadPodcasts();
  }, [loadPodcasts]);
  console.log({ list, current });
  if (!current) {
    return <h1>Loading</h1>;
  }
  return (
    <AppContainer>
      <Player />
      <Listing />
    </AppContainer>
  );
}

const mapStateToProps = state => {
  return {
    list: state.podcasts.list,
    current: state.podcasts.current
  };
};

const actionCreators = {
  loadPodcasts
};

export default connect(mapStateToProps, actionCreators)(App);
