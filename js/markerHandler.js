AFRAME.registerComponent('markerhandler', {

    init: async function () {
        this.el.addEventListener("markerFound", ()=>{
            console.log("marker is found")
            this.handleMarkerFound();
        })

        this.el.addEventListener("markerLost", ()=>{
            console.log("marker is lost")
            this.handleMarkerLost();
        })
    },

    handleMarkerFound: function() {
        var btndiv = document.getElementById("button-div");
        btndiv.style.display="flex";
        
        var rbtn = document.getElementById("rating-button");
        var obtn = document.getElementById("ordering-button");

        rbtn.addEventListener("click", function(){
            swal({
                icon:"warning",
                title:"RateDish",
                text:"Work In Progress"
            })
        })

        obtn.addEventListener("click", ()=>{
            swal({
                icon:"https://www.linkpicture.com/q/human-hand-giving-ok-thumbs-up-png.webp",
                title:"Thank you for ordering",
                text:"Please wait... Coming Soon"
            })
        })
    },

    handleMarkerLost: function() {
        var btndiv = document.getElementById("button-div");
        btndiv.style.display="none";
    }
})