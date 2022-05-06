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
	
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file); 
    
});
var ground = []; // Initialize array
for (var i = 0 ; i < 15; i++) {
    ground[i] = []; // Initialize inner array
    for (var j = 0; j < 9; j++) { // i++ needs to be j++
        ground[i][j] = (Math.random() * 5 | 0) + 6;
    }
}