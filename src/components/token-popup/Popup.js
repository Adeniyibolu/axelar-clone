import React from "react";
import "./index.css";
const Popup = ({ setOpenTokenModal }) => {
  return (
    <section className="popup">
      <div className="main">
        <div className="class">
          <h1>AXL Public Sale</h1>
          <p>Public Sale Address:</p>
          <p>0x360B8F3A12c58Fb7c55362D1813cD333fae781d6</p>
          <p>
            Allowed Currencies: <span>ETH/BSC / BUSD/USDT</span>
          </p>
        </div>
        <div className="right">
          <img src="../../../image-axel.jpeg" alt="logo" />
        </div>
      </div>

      <p onClick={() => setOpenTokenModal(false)}>X</p>
    </section>
  );
};

export default Popup;
