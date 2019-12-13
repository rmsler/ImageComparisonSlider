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
      this.imgArray[0].render(wrapper, this.imageLoadedCallback.bind(this));
      //render 2nd image
      this.imgArray[1].render(wrapper, this.imageLoadedCallback.bind(this));
      //render slider
      
    },
    imageLoadedCallback: function(boundingClientRect, element){
      if(element === "img-comp-overlay"){
        /* position the second image in the middle: */
        this.imgArray[1].domReference.style.width = (boundingClientRect.width / 2) + "px";
        /* render the slider */
        this.slider.render(this.imgArray[1].domReference, boundingClientRect);
      }
    }
});

export {ImageComparison};