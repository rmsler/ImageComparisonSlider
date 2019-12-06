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
      this.render(node, imgArray);
      let slider = this.slider;
      slider = new RevealingSlider(node);
    },
    render: function(wrapper) {
        //render 1st image
        let image1 = this.imgArray[0].render();
        $(wrapper).append(image1);
        //render slider
        $(wrapper).append(this.slider);
        //render 2nd image
        let image2 = this.imgArray[1].render();
        $(wrapper).append(image2);
    }
});

export {ImageComparison};