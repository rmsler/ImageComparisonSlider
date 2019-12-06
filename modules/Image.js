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
    render: function() {
      //container element
      let domElement = document.createElement("div");
      domElement.classList.add("img-comp-img");
      domElement.classList.add(this.class);
      // image inside container
      let content = document.createElement("img");
      content.setAttribute("src", this.location);
      $(domElement).append(content);

      this.domReference = domElement;
      return domElement;
    }
  });
  export { Image };