import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./Layout.js";
import Location from "./Location.js";
import Quotes from "./Quotes.js";
import Photos from "./Photos.js";
import PhotoModal from "./PhotoModal.js";

import { images } from "../utils/index-images.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

class Home extends Component {
  state = { isOpen: false, img: "", imgIdx: -1 };
  openModal = idx => {
    window.scrollTo(0, 0);
    return this.setState({
      isOpen: true,
      img: images[idx],
      imgIdx: idx
    });
  };
  closeModal = () => this.setState({ isOpen: false });
  nextImg = by =>
    this.setState(state => {
      let imgIdx = (state.imgIdx + by) % images.length;
      if (imgIdx < 0) imgIdx = images.length - 1;
      return { img: images[imgIdx], imgIdx: imgIdx };
    });
  render() {
    /** leave as a reminder that both of these are the same
     * The first on is defined manually in index.html as:
     *   <script>window.PUBLIC_URL = "%PUBLIC_URL%";</script>
     * console.log(window.PUBLIC_URL);
     * console.log(process.env.PUBLIC_URL);
     **/
    return (
      <Router>
        <Container>
          <PhotoModal
            show={this.state.isOpen}
            onClose={this.closeModal}
            img={this.state.img}
            nextImg={this.nextImg}
          />
          <Layout active="home">
            <Location />
            <Quotes />
            <Photos images={images} photoModalOpen={this.openModal} />
          </Layout>
        </Container>
      </Router>
    );
  }
}

export default Home;
