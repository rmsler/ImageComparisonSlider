function ImageComparison(imagesArray) {
    if (!(this instanceof ImageComparison)) {
      return new ImageComparison(imagesArray);
    }
    this.imagesArray = imagesArray;
    this.imgArray = [];
  }

  Object.assign(CarouselComponent.prototype, {
    init: function() {
      //iterate and construct models
      
    }
});

export {ImageComparison};