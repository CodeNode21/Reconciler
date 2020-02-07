// This file takes in each file and assigns them to a variable


$(document).ready(function(){

    document.getElementById("fileinput1").addEventListener("change", readFile1, false);
    document.getElementById("fileinput2").addEventListener("change", readFile2, false);
    document.getElementById("fileinput3").addEventListener("change", readFile3, false);

    function readFile1(evt) {
        let f = evt.target.files[0];
        if (f) {
            let r = new FileReader();
            console.log(r);
            r.onload = function(e){
                let contents = e.target.result;
				//contents.push("<li><strong>", escape(f.name), "</strong>")
                //console.log(contents);
                 //alert(`File loaded.
                // name: ${f.name}
                // type: ${f.type}
                // size: ${f.size} 
                 //starts with: ${contents.substr(1, contents.indexOf("\n"))}
                // `);
                //let area = this.options[this.selectedIndex].value;
                //alert(area)
                document.getElementById("area1").value = contents;
                file1 = contents;
                // localStorage.setItem("file1", file1)
	
            }
            r.readAsText(f);
        } else {
            alert("Failed to load file");
        }
    }
	    function readFile2(evt) {
        let f = evt.target.files[0];
        if (f) {
            let r = new FileReader();
            console.log(r);
            r.onload = function(e){
                let contents = e.target.result;
                //console.log(contents);
                 //alert(`File loaded.
                 //name: ${f.name}
                 //type: ${f.type}
                 //size: ${f.size} 
                 //starts with: ${contents.substr(1, contents.indexOf("\n"))}
                 //`);
                //let area = this.options[this.selectedIndex].value;
                //alert(area)
                document.getElementById("area2").value = contents;
				file2 = contents;
	
            }
            r.readAsText(f);
        } else {
            alert("Failed to load file");
        }
    }
	    function readFile3(evt) {
        let f = evt.target.files[0];
        if (f) {
            let r = new FileReader();
            console.log('Loading', r.readyState);
			
            r.onload = function(e){
				console.log('Done', r.readyState);
                let contents = e.target.result;
                //console.log(contents);
                 //alert(`File loaded.
                 //name: ${f.name}
                 //type: ${f.type}
                 //size: ${f.size} 
                 //starts with: ${contents.substr(1, contents.indexOf("\n"))}
                // `);
                //let area = this.options[this.selectedIndex].value;
                //alert(area)
                document.getElementById("area3").value = contents;
				file3 = contents;
	
            }
            r.readAsText(f);
        } else {
            alert("Failed to load file");
        }
    }
})

let file1 = "";
let file2 = "";
let file3 = "";




