import React from "react";
import { Grid, Image } from "semantic-ui-react";
import myImage from "./car.jpg";

const Home = () => (
  <Grid divided="vertically">
    <Grid.Row columns={1} style={{ padding: 0, margin: 0 }}>
      <Grid.Column>
        <Image src={myImage} />
        <h1>Home Page</h1>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Home;
