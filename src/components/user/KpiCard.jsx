import React from "react";
import PeopleIcon from '@mui/icons-material/People';

const KpiCard = (props) => {
  const labels = {
    total: "Total Users",
    per_page: "Users Per Page",
    total_pages: "Total Pages",
    new_ones: "New Ones",
  };


  return (

    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {Object.keys(props.kpi).map((k, i) => (
        <div className="kpi-card info-blue" key={i}>
          <div className="kpi-data">

            <div style={{ padding: 0 }}>
              <div style={{ fontSize: "15px", justifyContent: "center", display: "flex", alignItems: "start" }}>
                {labels[k] ? labels[k] : k}
              </div>

              <div className="count" style={{ fontSize: '30px', fontWeight: 700 }}>
                {props.kpi[k]}
              </div>
            </div>
          </div>

          <div className="kpi-symbol">
            <PeopleIcon />
          </div>
        </div>

      ))}

    </div>

  );
};

export default KpiCard;
