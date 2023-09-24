// Create a new Blob object with the text content
var blob = new Blob(["This is some text content."], { type: "text/plain;charset=utf-8" });

// Create a new FileSaver object
var fileSaver = new FileSaver();

// Save the file to the local computer
fileSaver.save(blob, "my-file.txt");