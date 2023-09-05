import React from "react";

const Credit = () => {
  return (
    <div className="mt-11 text-text2 font-ubuntu-mono text-xs p-5">
      <a href="https://material.io/resources/icons/?style=round">
        Icons: https://material.io/resources/icons/?style=round
      </a>
      <p className="mt-11 text-text3 font-montserrat text-sm">
        created by{" "}
        <span className="font-semibold underline-offset-4">
          <a href="https://github.com/yudhaCode" target="_blank">
            Faisal Yudha Nugraha
          </a>
        </span>
        - devChallenges.io
      </p>
    </div>
  );
};

export default Credit;
