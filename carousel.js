import { ImageComparison } from "./modules/ImageComparison.js";

var carousel = new Object();

$.getJSON("config.json", function(data) {
  carousel = new ImageComparison(data);
  carousel.init(".comparison-wrapper");
});
