function setup() { 

  createCanvas(500, 300); 

  textSize(18); 

  

  background("lightgreen"); 

  text("Click on the buttons below to save different types of files", 20, 20); 

  

  // Create a button for saving text 

  saveTextBtn = createButton("Save Text"); 

  saveTextBtn.position(30, 60); 

  saveTextBtn.mousePressed(saveAsText); 

  

  // Create a button for saving canvas image 

  saveImageBtn = createButton("Save Canvas"); 

  saveImageBtn.position(150, 60); 

  saveImageBtn.mousePressed(saveAsCanvas); 

  

  // Create a button for saving JSON 

  saveJSONBtn = createButton("Save JSON"); 

  saveJSONBtn.position(30, 100); 

  saveJSONBtn.mousePressed(saveAsJSON); 

  

  // Create a button for saving CSV 

  saveCSVBtn = createButton("Save CSV"); 

  saveCSVBtn.position(150, 100); 

  saveCSVBtn.mousePressed(saveAsCSV); 
} 

  

function saveAsText() { 

  let textToSave = ["Hello", "GeeksforGeeks!"]; 

  save(textToSave, "output_text.txt"); 
} 

  

function saveAsCanvas() { 

  save("output_canvas.png"); 
} 

  

function saveAsJSON() { 

  let exampleObj = [ 

    { 

      name: "Samuel", 

      age: 23, 

    }, 

    { 

      name: "Axel", 

      age: 15, 

    }, 

  ]; 

  save(exampleObj, "output_text.json"); 
} 

  

function saveAsCSV() { 

  let exampleTable = new p5.Table(); 

  let newRow = exampleTable.addRow(); 

  exampleTable.addColumn("author"); 

  exampleTable.addColumn("language"); 

  newRow.setString("author", "Dennis Ritchie"); 

  newRow.setString("language", "C"); 

  

  save(exampleTable, "output_CSV.csv"); 
} 