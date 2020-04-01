import React from "react";
import { ITemplate, ITemplateType2 } from "./types/template";

interface IProps {
  template: ITemplateType2;
}

const Template2: React.FC<IProps> = props => {
  const renderPicture = () => {
    if (props.template.image) {
      return (
        <div>
          <img src={props.template.image.url} alt={props.template.image.url} />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="template2">
      <a href={props.template.link.href}>{props.template.link.text}</a>

      {renderPicture()}
    </div>
  );
};

export default Template2;
