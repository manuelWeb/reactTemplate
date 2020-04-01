import React from "react";
import { ITemplate, ITemplateType1, ITemplateType2, ITemplateType3 } from "./types/template";
import Template1 from "./Template1";
import "./App.scss";
import Template2 from "./Template2";

interface IAppState {
  readonly template?: ITemplate;
  readonly template2?: ITemplateType3;
}

class App extends React.Component<any, IAppState> {
  public state: IAppState = {};

  public componentDidMount(): void {
    fetch("templates/template3.json")
      .then(response => response.json())
      .then(data => {
        this.setState({ template2: data.template });
      });
  }

  public render(): JSX.Element {
    return (
      <div className="tac">
        <div>App template type: <strong>{this.state.template ? this.state.template.type : ""}</strong></div>

        <div>
          Choisissez un template :<br />
          <button onClick={this.onButton1Click}>Template 1</button>
          -
          <button onClick={this.onButton2Click}>Template 2</button>
        </div>

        {this.renderTemplate()}

        {this.renderTemplate2()}
      </div>
    );
  }

  private renderTemplate(): JSX.Element | null {
    if (!this.state.template) {
      return null;
    }

    if (this.state.template.type === "template1") {
      return <Template1 template={this.state.template.template as ITemplateType1} />;
    }

    if (this.state.template.type === "template2") {
      return <Template2 template={this.state.template.template as ITemplateType2} />;
    }

    return null;
  }

  private renderTemplate2(): JSX.Element | null {
    if (this.state.template2) {
      return <div><h1>{this.state.template2.label}</h1></div>;
    }

    return null;
  }

  private onButton1Click = (event: any) => {
    fetch("templates/template1.json")
      .then(response => response.json())
      .then(data => {
        this.setState({ template: data });
      });
  }

  private onButton2Click = (event: any) => {
    fetch("templates/template2.json")
      .then(response => response.json())
      .then(data => {
        this.setState({ template: data });
      });
  }
}

export default App;
