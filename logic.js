$(document).ready(function(){
    console.log("ready");
    
    document.getElementById("fileinput1").addEventListener("change", readFile, false);
    document.getElementById("fileinput2").addEventListener("change", readFile, false);
    document.getElementById("fileinput3").addEventListener("change", readFile, false);

    function readFile(evt) {
        let f = evt.target.files[0];
        if (f) {
            let r = new FileReader();
            console.log(r);
            r.onload = function(e){
                let contents = e.target.result;
                console.log(contents);
                // alert(`File loaded.
                // name: ${f.name}
                // type: ${f.type}
                // size: ${f.size} 
                // starts with: ${contents.substr(1, contents.indexOf("\n"))}
                // `);
                let area = this.options[this.selectedIndex].value;
                alert(area)
                // document.getElementById("area").value = contents;
            }
            r.readAsText(f);
        } else {
            alert("Failed to load file");
        }
    }
})