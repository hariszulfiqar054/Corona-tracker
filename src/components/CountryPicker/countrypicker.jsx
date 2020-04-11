import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { getCountries } from "../../ServiceRequests/index";

export default function Countrypicker({ handleCountryChange }) {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await getCountries());
    };
    fetchApi();
    console.log(fetchedCountries);
  }, []);
  return (
    <div className="mt-5 d-flex justify-content-center">
      <FormControl className="w-50">
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Globe</option>
          {fetchedCountries.map((data, i) => (
            <option key={i} value={data}>
              {data}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
