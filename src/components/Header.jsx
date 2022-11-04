import React from 'react';

const Header = ({ title }) => (
  <div style={{marginBottom:"10px"}}>
    <p style={{fontFamily: 'Roboto',letterSpacing: "1px"}} className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);

export default Header;
