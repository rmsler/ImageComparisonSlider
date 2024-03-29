import { DraggableObject } from "./DraggableObject.js";

function RevealingSlider() {
    if (!(this instanceof RevealingSlider)) {
      return new RevealingSlider();
    }
    this.domReference = null;
    this.clicked = 0;
    this.width = 0;
    this.height - 0;
    this.position = null;
    this.image = null;
  }

  RevealingSlider.prototype = Object.create(DraggableObject.prototype);
  Object.assign(RevealingSlider.prototype, {
    constructor: RevealingSlider,
    render: function(image, position) {
      this.width = position.width;
      this.height = position.height;
      this.position = position;
      this.image = image;
      //container element
      let domElement = document.createElement("div");
      domElement.classList.add("img-comp-slider");
      this.domReference = domElement;
      image.parentElement.insertBefore(this.domReference, image);
      /*position the slider in the middle:*/
      this.domReference.style.top = (this.height / 2) - (this.domReference.offsetHeight / 2) + "px";
      this.domReference.style.left = (this.width / 2) - (this.domReference.offsetWidth / 2) + "px";
      //init Comparisons;  
      this._dragInit();
    },
    
    startDrag: function(e) {
      this.clicked = 1;
    },
    stopDrag: function() {
      /*the slider is no longer clicked:*/
      this.clicked = 0;
    },
    drag: function (e) {
      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (this.clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = this.getCursorPos(e)
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > this.position.width) pos = this.position.width;
      /*execute a function that will resize the overlay image according to the cursor:*/
      this.updatePositions(pos);
    },
    getCursorPos: function (e) {
      var a, x = 0;
      e = e || window.event;
      /*calculate the cursor's x coordinate, relative to the image:*/
      x = e.pageX - this.position.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    },
    updatePositions: function (x) {
      /*resize the image:*/
      this.image.style.width = x + "px";
      /*position the slider:*/
      this.domReference.style.left = this.image.offsetWidth - (this.domReference.offsetWidth / 2) + "px";
    }
  });
  export { RevealingSlider };