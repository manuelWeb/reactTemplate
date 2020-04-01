import React from "react";
import { ITemplate, ITemplateType1 } from "./types/template";

interface IProps {
  template: ITemplateType1;
}

const Template1: React.FC<IProps> = props => {
  return (
    <div className="template1">
      <div className="top">
        <div className="left" style={props.template.top.left.style}>
          top left<br />
          <button>{props.template.top.left.button.label}</button>
        </div>
        <div className="right">
          top right<br />
          <button>{props.template.top.right.button.label}</button>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          bottom left<br />
          <button>{props.template.bottom.left.button.label}</button>
        </div>
        <div className="right">
          bottom right<br />
          <button>{props.template.bottom.right.button.label}</button>
        </div>
      </div>
    </div>
  );
};

export default Template1;
