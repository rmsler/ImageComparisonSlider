import { ImageComparison } from "./modules/ImageComparison.js";

var comaprisonSlider = new Object();

$.getJSON("config.json", function(data) {
  comaprisonSlider = new ImageComparison(data);
  comaprisonSlider.init(".img-comp-container");
});
