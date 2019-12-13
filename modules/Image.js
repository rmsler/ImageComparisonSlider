function Image(config) {
    if (!(this instanceof Image)) {
      return new Image(config);
    }
    this.class = config.Class;
    this.location = config.Location;
    this.domReference = null;
  }
  Object.assign(Image.prototype, {
    render: function(wrapper, imageLoadedCallback) {
      //container element
      this.imageLoadedCallback = imageLoadedCallback;
      let domElement = document.createElement("div");
      domElement.classList.add("img-comp-img");
      domElement.classList.add(this.class);
      // image inside container
      let image = document.createElement("img");
      image.setAttribute("src", this.location);
      image.addEventListener("load", this.imgLoaded.bind(this));
      $(domElement).append(image);
      $(wrapper).append(domElement);
      this.domReference = domElement;
      //console.log(this.domReference.getBoundingClientRect(), " inside");
        //console.log(this.domReference.clientHeight);
        //console.log(this.domReference.getBoundingClientRect(), " wrapper");
    
    },
    imgLoaded: function() {
      this.imageLoadedCallback(this.domReference.getBoundingClientRect(), this.class);
    }
  });
  export { Image };