import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './IFrameWebPart.module.scss';
import * as strings from 'IFrameWebPartStrings';

export interface IIFrameWebPartProps {
  url: string;
}

export default class IFrameWebPart extends BaseClientSideWebPart<IIFrameWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.iFrame}">
        <iframe src="${ this.properties.url}" class="${ styles.content }" />
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupFields: [
                PropertyPaneTextField('url', {
                  label: strings.UrlFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
