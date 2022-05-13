let input = document.querySelector('input');
let textarea = document.querySelector('textarea');
input.addEventListener('change', () => {
    let files = input.files;
    if(files.length == 0) return;
    const file = files[0];
    let reader = new FileReader();
	
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        textarea.value = lines.join('\n');
    };
	var items = [files];
	
	var datnesSaturs; // mainīgais, kurā tiks saglabāts datnes saturs
  
  
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

for (var i = 0; i < files.length; i++) {


for (var j = 0; j < files[i].length; j++) {

ctx.fillRect(files[i][j],files[i][j], 2,2 );
ctx.stroke();
}
}
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file); 
    
});
