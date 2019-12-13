function RevealingSlider() {
    if (!(this instanceof RevealingSlider)) {
      return new RevealingSlider();
    }
    this.domReference = null;
    this.clicked = 0;
    this.width = 0;
    this.height - 0;
  }
  Object.assign(RevealingSlider.prototype, {
    render: function(image, position) {
      //container element
      let domElement = document.createElement("div");
      domElement.classList.add("img-comp-slider");
      this.domReference = domElement;
      image.parentElement.insertBefore(this.domReference, image);
      //initComparisons();
      console.log("before", position.height);
      this.width = position.width;
      this.height = position.height;
      this.initComparisons(position);
    },
    initComparisons: function(position) {
      
      let compareImages = this.compareImages.bind(this);
      /*find all elements with an "overlay" class:*/
      let x = document.getElementsByClassName("img-comp-overlay");
      console.log($(".img-comp")[0].offsetWidth);
      for (let i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
      }
    },
    compareImages: function (img) {
      /*set the width of the img element to 50%:*/
      img.style.width = (this.width / 2) + "px";
      /*create slider:*/
      let slider = this.domReference;
      //console.log(slider);
      /*position the slider in the middle:*/
      slider.style.top = (this.height / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (this.width / 2) - (slider.offsetWidth / 2) + "px";
      /*execute a function when the mouse button is pressed:*/
      slider.addEventListener("mousedown", this.slideReady);
      /*and another function when the mouse button is released:*/
      window.addEventListener("mouseup", this.slideFinish);
      /*or touched (for touch screens:*/
      slider.addEventListener("touchstart", this.slideReady);
      /*and released (for touch screens:*/
      window.addEventListener("touchstop", this.slideFinish);
      
    },
    slideReady: function(e) {
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*the slider is now clicked and ready to move:*/
      this.clicked = 1;
      /*execute a function when the slider is moved:*/
      window.addEventListener("mousemove", this.slideMove);
      window.addEventListener("touchmove", this.slideMove);
    },
    slideFinish: function() {
      /*the slider is no longer clicked:*/
      this.clicked = 0;
    },
    slideMove: function (e) {
      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (this.clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = this.getCursorPos(e)
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /*execute a function that will resize the overlay image according to the cursor:*/
      this.slide(pos);
    },
    getCursorPos: function (e) {
      var a, x = 0;
      e = e || window.event;
      /*get the x positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x coordinate, relative to the image:*/
      x = e.pageX - a.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    },
    slide: function (x) {
      /*resize the image:*/
      img.style.width = x + "px";
      /*position the slider:*/
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  });
  export { RevealingSlider };