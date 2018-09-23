import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class App extends Component {
  state = {
    value: 0,
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="login">
        <div>
          <Tabs value={value} onChange={this.handleChange} indicatorColor="primary" textColor="primary" centered>
            <Tab label="sign In" />
            <Tab label="Sign Up" />
          </Tabs>
          {/* {value === 0 && <TabContainer>Item One</TabContainer>}
					{value === 1 && <TabContainer>Item Two</TabContainer>} */}
        </div>
      </div>
    );
  }
}

export default App;
