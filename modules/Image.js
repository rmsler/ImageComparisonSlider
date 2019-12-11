function Image(config) {
    if (!(this instanceof Image)) {
      return new Image(config);
    }
    this.name = config.Name;
    this.class = config.Class;
    this.location = config.Location;
    this.domReference = null;
  }
  Object.assign(Image.prototype, {
    render: function(wrapper) {
      //container element
      let domElement = document.createElement("div");
      domElement.classList.add("img-comp-img");
      domElement.classList.add(this.class);
      // image inside container
      let image = document.createElement("img");
      image.setAttribute("src", this.location);
      image.addEventListener("load", this.imgLoaded);
      $(domElement).append(image);
      $(wrapper).append(domElement);
      this.domReference = domElement;
      console.log(this.domReference.getBoundingClientRect(), " inside");
        //console.log(this.domReference.clientHeight);
        //console.log(this.domReference.getBoundingClientRect(), " wrapper");
    
    },
    imgLoaded: function() {
      
      console.log(this.getBoundingClientRect(), " wrapper");
    }
  });
  export { Image };