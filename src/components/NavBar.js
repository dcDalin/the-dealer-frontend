import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "semantic-ui-react";

class NavBar extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary>
        <Menu.Item
          to="/"
          as={Link}
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          to="/about"
          as={Link}
          name="about"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Button.Group style={{ padding: 10 }}>
            <Button basic color="red" content="Red">
              Login
            </Button>
            <Button.Or basic color="red" content="Red" />
            <Button basic color="orange" content="orange">
              Signup
            </Button>
          </Button.Group>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default NavBar;
