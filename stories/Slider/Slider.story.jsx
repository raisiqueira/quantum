import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  Title,
  Heading,
  TabbedView,
  Tab,
  SimpleHighlight,
  CodeExample,
  AutoPropsApi,
} from '@catho/quantum-storybook-ui';
import { StoryContainer } from '@catho/quantum-storybook-ui/dist/components';
import { Col, Row } from '../../components/Grid';
import Slider from '../../components/Slider';
import List from '../../components/List';
import * as Samples from './examples';

const importSlider = `import { Slider } from '@cathodevel/quantum';`;

const ColSample = styled(Col)`
  padding-top: 15px;
`;

storiesOf('Forms', module).add('Slider', () => (
  <>
    <Heading name="Slider">
      Slider is a component to select a value from a predefined range. Through
      component props it&apos;s possible to set the minimum and maximum values
      to be selected, format tooltip and label texts or disable the component
      itself.
    </Heading>

    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing Slider</Title>
          <SimpleHighlight>{importSlider}</SimpleHighlight>

          <Row>
            <Col xsmall={4} small={8} medium={12}>
              <p>
                You can use some helper props to display the correct information
                desired.
              </p>
              <List>
                <List.Item>
                  <strong>min</strong>: accepted min value (default: 0)
                </List.Item>
                <List.Item>
                  <strong>max</strong>: accepted max value (default: 100)
                </List.Item>
                <List.Item>
                  <strong>tipFormatter</strong>: format tooltip text
                </List.Item>
                <List.Item>
                  <strong>minMaxFormatter</strong>: format {'<Slider />'} label
                  text
                </List.Item>
              </List>
            </Col>
          </Row>
          <Title as="h2">Slider usage</Title>
          <p>Just set value prop with a Number value.</p>
          <Row>
            <Col xsmall={2} small={4} medium={6}>
              <CodeExample code={Samples.Slider.code} showTitle={false} />
            </Col>
            <ColSample xsmall={2} small={4} medium={6}>
              <Samples.Slider />
            </ColSample>
          </Row>
          <Title as="h2">Min & Max props</Title>
          <p>You can limit the available range to be selected</p>
          <Row>
            <Col xsmall={2} small={4} medium={6}>
              <CodeExample code={Samples.MinMax.code} showTitle={false} />
            </Col>
            <ColSample xsmall={2} small={4} medium={6}>
              <Samples.MinMax />
            </ColSample>
          </Row>
          <Title as="h2">Range usage</Title>
          <p>
            Set value prop with an Object with &quot;to&quot; and
            &quot;from&quot; properties.
          </p>
          <Row>
            <Col xsmall={2} small={4} medium={6}>
              <CodeExample code={Samples.Range.code} showTitle={false} />
            </Col>
            <ColSample xsmall={2} small={4} medium={6}>
              <Samples.Range />
            </ColSample>
          </Row>
          <Title as="h2">Formatting tooltip text</Title>
          <p>
            You can format tooltip text through <strong>tipFormatter</strong>{' '}
            prop.
          </p>
          <p>
            It receives a function and should return a string.{' '}
            <em>
              <small>(hover {'<Slider />'} to see.)</small>
            </em>
          </p>
          <Row>
            <Col xsmall={2} small={4} medium={6}>
              <CodeExample code={Samples.TipFormatter.code} showTitle={false} />
            </Col>
            <ColSample xsmall={2} small={4} medium={6}>
              <Samples.TipFormatter />.
            </ColSample>
          </Row>

          <Title as="h2">Formatting min and max labels text</Title>
          <p>
            You can format both <code>min</code> and <code>max</code> labels
            text through <strong>minMaxFormatter</strong> prop.
          </p>
          <p>It receives a function and should return a string. </p>
          <Row>
            <Col xsmall={2} small={4} medium={6}>
              <CodeExample
                code={Samples.MinMaxFormatter.code}
                showTitle={false}
              />
            </Col>
            <ColSample xsmall={2} small={4} medium={6}>
              <Samples.MinMaxFormatter />.
            </ColSample>
          </Row>

          <Title as="h2">Controlled Slider</Title>
          <p>
            it&apos;s needed an{' '}
            <a
              href="https://reactjs.org/docs/forms.html#controlled-components"
              rel="noopener noreferrer"
              target="_blank"
              title="controlled component"
            >
              controlled component
            </a>{' '}
            to change the {'<Slider />'} value.
          </p>
          <p>The same is applied when is passed an object to value prop.</p>
          <Row>
            <Col xsmall={2} small={4} medium={6}>
              <CodeExample
                code={Samples.ControlledSlider.code}
                showTitle={false}
              />
            </Col>
            <ColSample xsmall={2} small={4} medium={6}>
              <Samples.ControlledSlider />.
            </ColSample>
          </Row>
        </StoryContainer>
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={Slider} />
      </Tab>
    </TabbedView>
  </>
));
