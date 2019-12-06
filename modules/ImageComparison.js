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
      let image1 = this.imgArray[0].render();
      $(wrapper).append(image1);
      //render 2nd image
      let image2 = this.imgArray[1].render();
      $(wrapper).append(image2);
      console.log($(image2)[0].offsetWidth)
      //render slider
      let slide = this.slider.render();
      $(image2)[0].parentElement.insertBefore(slide,image2);
    }
});

export {ImageComparison};