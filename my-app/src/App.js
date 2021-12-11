import React from 'react';
import './App.scss';
import { SprkButton, SprkSpinner, SprkAccordion,SprkHeading, SprkDictionary, SprkAccordionItem } from '@sparkdesignsystem/spark-react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAppLoading: false };
  }
  render() {
    return (
      <>
        <SprkHeading element="h1" variant="displayOne" idString="heading-one">
          The Quick Brown Fox Jumps Over the Lazy Dog
        </SprkHeading>
        <SprkAccordion>
          <SprkAccordionItem
            heading="This is an accordion heading"
            contentAdditionalClasses="sprk-o-Stack sprk-o-Stack--medium"
          >
            <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
              This is an example of accordion content. This is an example of accordion
              content. This is an example of accordion content. This is an example of
              accordion content.
            </p>
          </SprkAccordionItem>

          <SprkAccordionItem heading="This is an accordion heading">
            <p className="sprk-b-TypeBodyTwo">
              This is an example of accordion content. This is an example of accordion
              content. This is an example of accordion content. This is an example of
              accordion content.
            </p>
          </SprkAccordionItem>

          <SprkAccordionItem heading="This is an accordion heading">
            <p className="sprk-b-TypeBodyTwo">
              This is an example of accordion content. This is an example of accordion
              content. This is an example of accordion content. This is an example of
              accordion content.
            </p>
          </SprkAccordionItem>
        </SprkAccordion>
        <SprkDictionary
          idString="dictionary-1"
          keyValuePairs={{
            'Email Address': 'sparkdesignsystem@rocketmortgage.com',
            'Mailing Address': '123 Main Street, Detroit, MI, 48216',
            'Home Phone': '(123) 456-7890',
            'Cell Phone': '(098) 765-4321',
            'Work Phone': '(555) 555-5555',
            'Work Extension': '55555',
          }}
        />
      </>
    );
  }
}
export default App;