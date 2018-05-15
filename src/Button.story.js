import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import Button from "./Button";

storiesOf('Button', module)
  .add('Base', () => <Button className="button" onClick={action('clicked')}>Base-theme Button</Button>)

storiesOf('Button/Themes', module)
  .add('PackManger', () => <Button className="button__PackManager-theme" onClick={action('clicked')}>Base-theme Button</Button>)
  .add('Go', () => <Button className="button__Go-theme" onClick={action('clicked')}>Base-theme Button</Button>)
  .add('QCloud', () => <Button className="button__QCloud-theme" onClick={action('clicked')}>Base-theme Button</Button>)

storiesOf('Button/Style | Function', module)
  .add('Primary', () => <Button className="button__primary" onClick={action('clicked')}>Primary Base-theme Button</Button>)
  .add('Secondary / Neutral', () => <Button className="button__secondary" onClick={action('clicked')}>Secondary Base-theme Button</Button>)
  .add('Plain / Link', () => <Button className="button__plain" onClick={action('clicked')}>Plain Base-theme Button</Button>)
  .add('Affirming', () => <Button className="button__affirming" onClick={action('clicked')}>Affirming Base-theme Button</Button>)
  .add('Destructive', () => <Button className="button__destructive" onClick={action('clicked')}>Destructive Base-theme Button</Button>)
  .add('Floated', () => <Button className="button__floated" onClick={action('clicked')}>Floated Base-theme Button</Button>)

storiesOf('Button/Status', module)
  .add('Disabled', () => <Button className="button__disabled" onClick={action('clicked')}>Disabled Base-theme Primary Button</Button>)
  .add('Loading', () => <Button className="button__loading" onClick={action('clicked')}>Loading Base-theme Primary Button</Button>)

storiesOf('Button/Size', module)
  .add('Lean', () => <Button className="button__lean" onClick={action('clicked')}>Lean Base-theme Primary Button</Button>)
  .add('Fat', () => <Button className="button__fat" onClick={action('clicked')}>Fat Base-theme Primary Button</Button>)
  .add('Full-width', () => <Button className="button__full-width" onClick={action('clicked')}>Full-width Base-theme Primary Button</Button>)

storiesOf('Button/Context', module)
  .add('Form', () => <Button className="" onClick={action('clicked')}>Form Button</Button>)
  .add('Table', () => <Button className="" onClick={action('clicked')}>Table Button</Button>)
  .add('Modal', () => <Button className="" onClick={action('clicked')}>Modal Button</Button>)

storiesOf('Buttonset', module)
  .add('Inline', () =>
    <section class="button-set__inline">
      <Button className="button__primary" onClick={action('clicked')}>Primary Button</Button>
      <Button className="button__secondary" onClick={action('clicked')}>Secondary Button</Button>
      <Button className="button__secondary" onClick={action('clicked')}>Secondary Button</Button>
      <Button className="button__secondary button__disabled" onClick={action('clicked')}>Disabled Button</Button>
  </section>)
  .add('Triggered', () => <section class="button-set__triggered">
      <Button className="button__primary" onClick={action('clicked')}>Primary Button</Button>
      <Button className="button__secondary" onClick={action('clicked')}>Secondary Button</Button>
      <Button className="button__secondary" onClick={action('clicked')}>Secondary Button</Button>
      <Button className="button__secondary button__disabled" onClick={action('clicked')}>Disabled Button</Button>
  </section>)
