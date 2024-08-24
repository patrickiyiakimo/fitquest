// src/react-slick.d.ts
declare module "react-slick" {
  import * as React from "react";

  interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    arrows?: boolean;
    // Add other properties as needed from the react-slick documentation
  }

  export default class Slider extends React.Component<Settings> {}
}