import React from "react";
import Button from "../components/ButtonPage/Button";
import buttonsArr from "../buttonStyles";
import Credit from "../components/Credit/Credit";

const ButtonPage = () => {
  return (
    <>
      <div>
        <h1 className="font-poppins font-medium text-title text-2xl mb-8">
          Buttons
        </h1>
        <div className="space-y-11">
          {buttonsArr.map((buttonGroup, index) => (
            <div className="flex" key={index}>
              {buttonGroup.map((style, buttonIndex) => (
                <Button
                  {...style}
                  ml={`${buttonIndex === 0 ? "ml-0" : "ml-40"}`}
                  key={buttonIndex}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <Credit />
    </>
  );
};

export default ButtonPage;
