AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../assets/car/scene.gltf"},
    clickCount: { type: "number", default: 0 }
  },

  init: function() {
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 0, y: 50, z: 80 };
    const rotation = { x: 0, y: 0, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  },

  update: function(){
    window.addEventListener("click", (e) =>{
      this.data.clickCount = this.data.clickCount + 1;

      if(this.data.clickCount == 1){
        const rotation = {x: 0, y: 60, z: 0};
        this.el.setAttribute("rotation", rotation);
      }

      else if (this.data.clickCount == 2){
        const rotation = {x: 0, y: 120, z: 0};
        this.el.setAttribute("rotation", rotation);
      }

      else if (this.data.clickCount == 3){
        const rotation = {x: 0, y: 180, z: 0};
        this.el.setAttribute("rotation", rotation);
      }

      else if (this.data.clickCount == 4){
        const rotation = {x: 0, y: -120, z: 0};
        this.el.setAttribute("rotation", rotation);
      }
      
      else if (this.data.clickCount == 5){
        const rotation = {x: 0, y: -60, z: 0};
        this.el.setAttribute("rotation", rotation);
      }

      else if (this.data.clickCount == 6){
        const rotation = {x: 0, y: 0, z: 0};
        this.el.setAttribute("rotation", rotation);
        const cameraEl = document.querySelector("#camera");
        const position = { x: 0, y: 195, z: 450 };
        cameraEl.setAttribute("position", position);
        this.data.clickCount = 0;
      }
    })
  }
});
