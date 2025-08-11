function createToaster(config){
    return function(str){
        let div = document.createElement("div");
        let parent = document.querySelector(".parent");
        div.textContent = str;
        div.className = `inline-block ${config.theme==="dark"? "bg-gray-800 text-white":"bg-gray-100 text-black"} px-6 py-3 rounded shadow-jg pointer-events-none transition-`;
        parent.appendChild(div);
        if(config.positionX !== "left" || config.positionY !== "top"){
            parent.className += ` ${config.positionX === "right"? " right-5":" left-5"} ${config.positionY === "bottom"? " bottom-5":" top-5"}`;
        }
        setTimeout(()=>{
            document.querySelector(".parent").removeChild(div);
            
        },config.duration)
    }
}

let toaster = createToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "light",
    duration: 3000
})
toaster("Downloading Started");
setTimeout(()=>{
    toaster("Downloading complete");
},1000);