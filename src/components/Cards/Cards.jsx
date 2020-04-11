import React from "react";
import CountUp from "react-countup";
export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  if (!confirmed) return "Loading...";

  return (
    <div className="row mt-5 d-flex justify-content-around">
      <div
        style={{ backgroundColor: "#f4e04d" }}
        className="col-lg-3 col-md-3 col-sm-12"
      >
        <div className="card">
          <div className="card-body">
            <h6 className="card-title text-center">Infected</h6>
            <span className="d-flex justify-content-center p-2">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.75}
                separator=","
              />
            </span>
            <h6 className="text-center">
              {new Date(lastUpdate).toDateString()}
            </h6>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#639a67" }}
        className="col-lg-3 col-md-3 col-sm-12"
      >
        <div className="card">
          <div className="card-body">
            <h6 className="card-title text-center">Reccovered</h6>
            <span className="d-flex justify-content-center p-2">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.75}
                separator=","
              />
            </span>
            <h6 className="text-center">
              {new Date(lastUpdate).toDateString()}
            </h6>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#ff5733" }}
        className="col-lg-3 col-md-3 col-sm-12"
      >
        <div className="card">
          <div className="card-body">
            <h6 className="card-title text-center">Deaths</h6>
            <span className="d-flex justify-content-center p-2">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.75}
                separator=","
              />
            </span>
            <h6 className="text-center">
              {new Date(lastUpdate).toDateString()}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
