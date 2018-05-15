import React from "react";
import styled from "styled-components";

const Button = styled.button`
// Type and vertical rythm baseline for the component
  font-size: 1em;
  line-height: 1.25;
  // font-family
  // Use shorthand

// Spacing and sizing
  padding: 1em 2em;
  border: 1px solid transparent; // Use something generic for color
  border-radius: .25rem;

// Style
  cursor: pointer;
  // dropshadow, gradient

// States
  color: white;
  background-color: lime;
  border-color: lime;
  &:hover {
    color: white; // white + 10
    background-color: lime; // lime + 10
    border-color: lime; // lime + 10
  }

// Modifiers

// Themes
  &.button__base-theme{
    color: white;
    background-color: black;
    border-color: black;

    &:hover {
      // darken 10%
    }
  }

// Style / Function
  &.button__primary{
    color: white;
    background-color: blue;
    border-color: blue;

    &:hover {
      // darken 10%
    }
  }

  &.button__secondary{
    color: white;
    background-color: gray;
    border-color: gray;

    &:hover {
      // darken 10%
    }
  } // Neutral

  &.button__plain{
    color: black;
    background-color: transparent;
    border-color: transparent;

    text-decoration: underline;

    &:hover {
      // darken 10%
      text-decoration: none;
    }
  }

  &.button__affirming{
    color: white;
    background-color: green;
    border-color: green;
    &:hover {
      // darken 10%
    }
  }

  &.button__destructive{
    color: white;
    background-color: red;
    border-color: red;
    &:hover {
      // darken 10%
    }
  }

  &.button__floated{
    position: fixed;
    bottom: 1em;
    right: 1em;
    z-index: 100; // highest level
    //dropshadow: TBD;
  }

  // Status

    &.button__disabled{
      opacity: .5;
    }

    &.button__loading{ // responding / submiting
    }

// Structure
  &.button__trigger{

  }
  &.button__iconic{

  }

// Size
  &.button__full-width{

  }

  &.button__mini{

  }

  &.button__maxi{

  }

// Context
  form &.button(__in-form){

  }
  table &.button(__in-table){

  }
  .modal &.button(__in-modal){

  }

`;

export default Button;
