function DraggableObject() {}

Object.assign(DraggableObject.prototype, {
    _dragInit: function() {
        this.boundDragStart = this._handleDragStart.bind(this);
        this.boundDragStop = this._handleDragStop.bind(this);
        this.boundDrag = this._handleDrag.bind(this);
        this.domReference.addEventListener("mousedown", this.boundDragStart);
        this._setDragOffets();
    },

    _handleDragStart: function(event) {
        event.preventDefault();
        document.body.addEventListener("mousemove", this.boundDrag);
        document.body.addEventListener("mouseup", this.boundDragStop);

        this.startDrag(event); //specific implementation
    },

    _handleDragStop: function(event) {
        event.preventDefault();
        document.body.removeEventListener("mousemove", this.boundDrag);
        document.body.removeEventListener("mouseup", this.boundDragStop);

        this.stopDrag(event); //specific implementation
    },

    _handleDrag: function(event) {
        event.preventDefault();
        this.drag(event);
    },

    _setDragOffets: function() {
        // sets drag target - grip offsets
    },

    startDrag: function() {
        throw new Error("Missing implementation for startDrag");
    },

    stopDrag: function() {
        throw new Error("Missing implementation for stopDrag");
    },

    drag: function() {
        throw new Error("Missing implementation for drag");
    }
});

export { DraggableObject };