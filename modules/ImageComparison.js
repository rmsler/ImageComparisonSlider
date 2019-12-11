import { Image } from "./Image.js";
import { RevealingSlider } from "./RevealingSlider.js";

function ImageComparison(imagesArray) {
    if (!(this instanceof ImageComparison)) {
      return new ImageComparison(imagesArray);
    }
    this.imagesArray = imagesArray;
    this.imgArray = [];
    this.slider = null;
  }

  Object.assign(ImageComparison.prototype, {
    init: function(node) {
      //iterate and construct models
      let imgArray = this.imgArray;
      $.each(this.imagesArray["images"], function(index, value) {
        imgArray[index] = new Image(value);
      });
      this.slider = new RevealingSlider();
      this.render(node, imgArray);
    },
    render: function(wrapper) {
      //render 1st image
      this.imgArray[0].render(wrapper);
      //render 2nd image
      this.imgArray[1].render(wrapper);
      //render slider
      let slide = this.slider.render();
      // $(image2)[0].parentElement.insertBefore(slide,image2);
    }
});

export {ImageComparison};