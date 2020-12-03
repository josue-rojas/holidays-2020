import React, { useEffect, useState } from "react";
import "./App.css";
import Icon from "components/Icon";
const snow0 = require("./images/snowflake-0.svg");
const snow1 = require("./images/snowflake-1.svg");
const snow2 = require("./images/snowflake-2.svg");
// const snow3 = require("./images/snowflake-3.svg");
const mistletoe = require("./images/mistletoe-5.svg");
const bauble = require("./images/bauble-5.svg");
const bell = require("./images/bells-1.svg");

const Block = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        height: "100px",
        justifyContent: "center",
        width: "100px",
      }}
    >
      {children}
    </div>
  );
};

const images = [
  snow0.default,
  bell.default,
  snow1.default,
  // snow3.default,
  mistletoe.default,
  snow2.default,
  bauble.default,
];

function App() {
  const [posPercent, setPosPercent] = useState(1);

  const getBlocks = (num: number): JSX.Element[] => {
    const blocks: JSX.Element[] = [];
    let altRot = false;
    const rotPos = posPercent;
    const rotNeg = posPercent * -1;
    // console.log("rotate", rotPos);
    for (let i = 0; i < num; i++) {
      blocks.push(
        <Block>
          <Icon
            rotate={altRot ? rotNeg : rotPos}
            image={images[i % images.length]}
          />
        </Block>
      );
      altRot = !altRot;
    }
    return blocks;
  };

  useEffect(() => {
    const scrollFunction = (e: Event) => {
      const nextRot =
        Math.floor((window.scrollY / window.outerHeight) * 100) + 1;
      setPosPercent(nextRot);
    };
    window.addEventListener("scroll", scrollFunction);
    setPosPercent(0);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  return (
    <div
      className="App"
      style={{
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "24px 16px 16px",
      }}
    >
      <span className="title">Happy Holidays</span>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingBottom: "16px",
          paddingTop: "24px",
        }}
      >
        {getBlocks(54)}
      </div>
      <a
        className="link"
        href="https://github.com/josuerojasrojas/christmas-2020"
      >
        source
      </a>
    </div>
  );
}

export default App;
