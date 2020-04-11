import axios from "axios";

const url = "https://covid19.mathdro.id/api";
export const getGlobleData = async (country) => {
  let changeUrl = url;
  if (country) changeUrl = `${url}/countries/${country}`;
  try {
    const req = await axios.get(changeUrl);
    const { confirmed, recovered, deaths, lastUpdate } = await req.data;

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (err) {}
};

export const getCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (err) {}
};

export const getDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (err) {}
};
