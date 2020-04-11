import React from "react";
import { getGlobleData, getCountries } from "../src/ServiceRequests/index";
import Cards from "./components/Cards/Cards";

import Countrypicker from "./components/CountryPicker/countrypicker";
import Chart from "./components/Chart/Chart";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const getData = await getGlobleData();
    this.setState({ data: { ...getData } });
    console.log(this.state.data);
  }

  handleCountryChange = async (country) => {
    const getData = await getGlobleData(country);
    this.setState({ data: { ...getData }, country: country });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center mt-5">
          <img className="img-fluid" src="https://i.ibb.co/7QpKsCX/image.png" />
        </div>
        <Cards data={this.state.data} />

        <Countrypicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}
export default App;
