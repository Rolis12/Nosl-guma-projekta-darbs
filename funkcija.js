function createArray(row,column) {
let arr = [];

for(var i=0; i<row; i++){
    arr[i] = [Math.floor = 5000000 ];

    for(var j=0;j<column;j++){
        arr[i][j]= [Math.floor = 0];
    }
}

return arr;
}

var arrVal = createArray(5000000, 0);

console.log(arrVal);
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

