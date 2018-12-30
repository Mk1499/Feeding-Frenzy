let Canvas = function(id){

    this.canvas = null;
    this.context = null;

    this.create = function(){
        this.canvas = document.getElementById(id);
        this.canvas.height = window.innerHeight;
        this.canvas.width = 700;
        this.context = this.canvas.getContext("2d");

    };

    this.clear = function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
};