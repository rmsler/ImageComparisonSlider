function RevealingSlider(config) {
    if (!(this instanceof RevealingSlider)) {
      return new RevealingSlider(config);
    }
    this.name = config.Name;
    this.text = config.Text;
    this.location = config.Location;
    this.domReference = null;
  }
  Object.assign(RevealingSlider.prototype, {
    render: function() {
      //container element
      let domElement = document.createElement("div");
      domElement.classList.add("img-comp-img");
      // RevealingSlider inside container
      let content = document.createElement("img");
      content.setAttribute("src", this.location);
      $(domElement).append(content);

      this.domReference = domElement;
      return domElement;
    }
  });
  export { RevealingSlider };