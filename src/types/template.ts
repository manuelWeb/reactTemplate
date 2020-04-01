import { CSSProperties } from "react";

export interface ITemplate {
  type: string;
  template: ITemplateType1 | ITemplateType2 | ITemplateType3;
}

export interface ITemplateType1 {
  top: {
    left: {
      style?: CSSProperties,
      button: {
        "label": string;
      }
    },
    right: {
      button: {
        "label": string;
      }
    }
  };
  bottom: {
    left: {
      button: {
        "label": string;
      }
    },
    right: {
      button: {
        "label": string;
      }
    }
  };
}

export interface ITemplateType2 {
  image?: {
    url: string;
    alt: string;
  };
  link: {
    href: string;
    text: string;
  };
}

export interface ITemplateType3 {
  label: string;
}