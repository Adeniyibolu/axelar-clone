import React from "react";
import Header from "../../components/header/Header";
import "./index.css";
import { Images, teams } from "../../components/partner.data";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <section>
      <Header />
      <section className="main">
        <section className="banner">
          <div className="left">
            <h3>
              Axelar <br></br> Connects <br></br> <span>You Wallets</span>
            </h3>

            <p>
              Axelar is a decentralized interoperability network connecting all
              blockchains, assets and apps through a universal set of protocols
              and APIs.
            </p>

            <button>BUY SIPHER</button>
          </div>
          <div className="right">
            <img
              // width="800"
              // height="714"
              src="https://axelar.network/wp-content/uploads/2022/03/axelar-hero-1024x914.jpeg"
              class="attachment-large size-large"
              alt="Axelar Hero"
              loading="lazy"
              sizes="(max-width: 800px) 100vw, 800px"
              title="Axelar Network 1"
            />
          </div>
        </section>

        <section className="after-banner">
          <div></div>
          <div>
            <p>Empowering developers to build scalable, cross-chain dapps</p>
            <div>
              <i className="fab fa-discord"></i>
              <i className="fab fa-telegram"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <h1>The Platform</h1>

          <p>
            Axelar is a decentralized interoperability network connecting all
            blockchains, assets and applications through a universal set of
            protocols and APIs.
          </p>

          <br></br>
          <p>
            Deploy your dApp on the blockchain best suited for your use case.
            Through a single integration with the Axelar API unlock access to
            multiple interconnected Axelar networks, users, assets, liquidity
            and data.
          </p>
        </section>

        <section className="partners" id="partners">
          <div className="partner-header">
            <h1>Ecosystem Partners</h1>
          </div>

          <div className="images">
            {Images.map((image, i) => (
              <img key={i} src={`${image}`} height="111" alt="axelar" />
            ))}
          </div>
        </section>

        <section className="team" id="team">
          <div className="team-header">
            <h1>Team</h1>
          </div>

          <div className="members">
            {teams.map((x, i) => (
              <div className="member">
                <img src={x.url} alt="logo" />
                <p className="name">{x.name}</p>
                <div className="inner">
                  <i className="fab fa-linkedin-in"></i>
                  <p>{x.linkdln}</p>
                </div>

                <p className="description">{x.description}</p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </section>
    </section>
  );
};

export default Homepage;
