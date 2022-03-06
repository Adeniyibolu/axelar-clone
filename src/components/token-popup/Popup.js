import React from "react";
import "./index.css";
const Popup = ({ setOpenTokenModal }) => {
  return (
    <section className="popup">
      <div className="main">
        <div className="class">
          <h1>$LGX Public Sale</h1>
          <p>Public Sale Address:</p>
          <p>0x42D36bec614113c986ecC18b537dba97420b8232</p>
          <p>
            Allowed Currencies: <span>ETH/BSC / BUSD/USDT</span>
          </p>
        </div>
        <div className="right">
          <img
            src="https://legionnetwork.pages.dev/images/wallet.jpg"
            alt="logo"
          />
        </div>
      </div>

      <p onClick={() => setOpenTokenModal(false)}>X</p>
    </section>
  );
};

export default Popup;
