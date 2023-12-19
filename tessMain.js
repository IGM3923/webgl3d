  'use strict';

  // Global variables that are set and used
  // across the application
  let gl,
    program,
    points,
    texture,
    texture1,
    texture2,
    texture3,
    texture4,
    indices,
    uvs;
  
  // VAO stuff
  var myVAO = null;
  var myVertexBuffer = null;
  var myUVBuffer = null;
  var myIndexBuffer = null;
    
  // Other globals with default values;
  var division1 = 3;
  var division2 = 1;
  var updateDisplay = true;
  var anglesReset = [0.0, 0.0, 0.0];
  var angles = [0.0, 0.0, 0.0];
  var angleInc = 5.0;
  // IMAGES/TEXTURE SRC ARRAY
  var images = [];

  // Given an id, extract the content's of a shader script
  // from the DOM and return the compiled shader
  function getShader(id) {
    const script = document.getElementById(id);
    const shaderString = script.text.trim();

    // Assign shader depending on the type of shader
    let shader;
    if (script.type === 'x-shader/x-vertex') {
      shader = gl.createShader(gl.VERTEX_SHADER);
    }
    else if (script.type === 'x-shader/x-fragment') {
      shader = gl.createShader(gl.FRAGMENT_SHADER);
    }
    else {
      return null;
    }

    // Compile the shader using the supplied shader code
    gl.shaderSource(shader, shaderString);
    gl.compileShader(shader);

    // Ensure the shader is valid
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      return null;
    }

    return shader;
  }

  // Create a program with the appropriate vertex and fragment shaders
  function initProgram() {
    const vertexShader = getShader('vertex-shader');
    const fragmentShader = getShader('fragment-shader');

    // Create a program
    program = gl.createProgram();
    // Attach the shaders to this program
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
      
      // link program
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Could not initialize shaders');
    }

    // Use this program instance
    gl.useProgram(program);
    // We attach the location of these shader values to the program instance
    // for easy access later in the code
    program.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
    // set up texture location info
    program.aVertexTextureCoords = gl.getAttribLocation(program, 'aVertexTextureCoords');
    program.uSampler = gl.getUniformLocation(program, 'uSampler');
    // set up angle uniform
    program.uTheta = gl.getUniformLocation(program, 'theta');
    
    // set up textures and image load and value
    // TEXTURE 0 (wall)
    texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, images[0]);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    gl.bindTexture(gl.TEXTURE_2D, null);

    // TEXTURE 1 (sky)
    texture1 = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, texture1);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, images[1]);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    gl.bindTexture(gl.TEXTURE_2D, null);

    // TEXTURE 2 (grass)
    texture2 = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, images[2]);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    gl.bindTexture(gl.TEXTURE_2D, null);

    // TEXTURE 3 (door)
    texture3 = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, texture3);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, images[3]);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    gl.bindTexture(gl.TEXTURE_2D, null);

    // TEXTURE 4 (peach)
    texture4 = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, texture4);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, images[4]);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    gl.bindTexture(gl.TEXTURE_2D, null);


    // CALLS TO CREATE SHAPES
    createBase();
    createSideTower();
    createSideTowerRoof();
    createDoor();
    createPeach();
    createTerrain();
  }

  async function loadImages(imgs) {
    images = await Promise.all(imgs.map(loadImage));
  }

  function loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.crossOrigin = 'anonymous';
      img.src = url;
    });
  }

  function createBase() {
      
      // clear your points and elements
      points = [];
      indices = [];
      uvs = [];

      // make your shape based on type
      makeBase(5);
      //makeCylinder(20,2);
          
      //create and bind VAO
      if (myVAO == null) myVAO = gl.createVertexArray();
      gl.bindVertexArray(myVAO);
      
      // create and bind vertex buffer
      if (myVertexBuffer == null) myVertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, myVertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(program.aVertexPosition);
      gl.vertexAttribPointer(program.aVertexPosition, 4, gl.FLOAT, false, 0, 0);
      
      // create and bind uv buffer
      if (myUVBuffer == null) myUVBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, myUVBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(program.aVertexTextureCoords);
      // note that texture uv's are 2d, which is why there's a 2 below
      gl.vertexAttribPointer(program.aVertexTextureCoords, 2, gl.FLOAT, false, 0, 0);

      // uniform values
      gl.uniform3fv (program.uTheta, new Float32Array(angles));
     
      // Setting up the IBO
      if (myIndexBuffer == null) myIndexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, myIndexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

      // Clean
      gl.bindVertexArray(null);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        
      updateDisplay = true;
      draw(0);
  }
  function createSideTower() {
      
    // clear your points and elements
    points = [];
    indices = [];
    uvs = [];

    //corner tower 1
    makeCylinder(10,10,[-1.0,-0.5,-0.5],0.25,1.5);
    //corner tower 2
    makeCylinder(10,10,[-1.0,0.5,-0.5],0.25,1.5);
    //corner tower 3
    makeCylinder(10,10,[1.0,-0.5,-0.5],0.25,1.5);
    //corner tower 4
    makeCylinder(10,10,[1.0,0.5,-0.5],0.25,1.5);
    //middle tower
    makeCylinder(10,10,[0,0,0.5],0.3,0.5);
    makeCone(10,1,[0,0,1],0.3,0.4);
    makeCylinder(10,10,[0,0,1],0.2,0.5);
    makeCone(10,1,[0,0,1.5],0.2,0.25);
    //new roof
    makeRoof(4,1,[0,0,0.5],0.5,0.5,0.25)

        
    //create and bind VAO
    if (myVAO == null) myVAO = gl.createVertexArray();
    gl.bindVertexArray(myVAO);
    
    // create and bind vertex buffer
    if (myVertexBuffer == null) myVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, myVertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(program.aVertexPosition);
    gl.vertexAttribPointer(program.aVertexPosition, 4, gl.FLOAT, false, 0, 0);
    
    // create and bind uv buffer
    if (myUVBuffer == null) myUVBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, myUVBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(program.aVertexTextureCoords);
    // note that texture uv's are 2d, which is why there's a 2 below
    gl.vertexAttribPointer(program.aVertexTextureCoords, 2, gl.FLOAT, false, 0, 0);

    // uniform values
    gl.uniform3fv (program.uTheta, new Float32Array(angles));
   
    // Setting up the IBO
    if (myIndexBuffer == null) myIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, myIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // Clean
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      
    updateDisplay = true;
    draw(0);
  }
  function createSideTowerRoof() {
    // clear your points and elements
    points = [];
    indices = [];
    uvs = [];
    //corner tower 1
    makeCone(10,1,[-1.0,-0.5,1],0.25,0.25);
    //corner tower 2
    makeCone(10,1,[-1.0,0.5,1],0.25,0.25);
    //corner tower 3
    makeCone(10,1,[1.0,-0.5,1],0.25,0.25);
    //corner tower 4
    makeCone(10,1,[1.0,0.5,1],0.25,0.25);
    //middle tower
    makeCone(10,1,[0,0,1.5],0.2,0.25);
    makeCone(10,1,[0,0,1],0.3,0.4);

        
    //create and bind VAO
    if (myVAO == null) myVAO = gl.createVertexArray();
    gl.bindVertexArray(myVAO);
    
    // create and bind vertex buffer
    if (myVertexBuffer == null) myVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, myVertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(program.aVertexPosition);
    gl.vertexAttribPointer(program.aVertexPosition, 4, gl.FLOAT, false, 0, 0);
    
    // create and bind uv buffer
    if (myUVBuffer == null) myUVBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, myUVBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(program.aVertexTextureCoords);
    // note that texture uv's are 2d, which is why there's a 2 below
    gl.vertexAttribPointer(program.aVertexTextureCoords, 2, gl.FLOAT, false, 0, 0);

    // uniform values
    gl.uniform3fv (program.uTheta, new Float32Array(angles));
   
    // Setting up the IBO
    if (myIndexBuffer == null) myIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, myIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // Clean
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      
    updateDisplay = true;
    draw(1);
  }

  function createPeach() {
      
    // clear your points and elements
    points = [];
    indices = [];
    uvs = [];

    // make your shape based on type
    makePeach(5);
        
    //create and bind VAO
    if (myVAO == null) myVAO = gl.createVertexArray();
    gl.bindVertexArray(myVAO);
    
    // create and bind vertex buffer
    if (myVertexBuffer == null) myVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, myVertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(program.aVertexPosition);
    gl.vertexAttribPointer(program.aVertexPosition, 4, gl.FLOAT, false, 0, 0);
    
    // create and bind uv buffer
    if (myUVBuffer == null) myUVBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, myUVBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(program.aVertexTextureCoords);
    // note that texture uv's are 2d, which is why there's a 2 below
    gl.vertexAttribPointer(program.aVertexTextureCoords, 2, gl.FLOAT, false, 0, 0);

    // uniform values
    gl.uniform3fv (program.uTheta, new Float32Array(angles));
   
    // Setting up the IBO
    if (myIndexBuffer == null) myIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, myIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // Clean
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      
    updateDisplay = true;
    draw(4);
}

  function createDoor() {
      
    // clear your points and elements
    points = [];
    indices = [];
    uvs = [];

    // make your shape based on type
    makeDoor(5);
        
    //create and bind VAO
    if (myVAO == null) myVAO = gl.createVertexArray();
    gl.bindVertexArray(myVAO);
    
    // create and bind vertex buffer
    if (myVertexBuffer == null) myVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, myVertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(program.aVertexPosition);
    gl.vertexAttribPointer(program.aVertexPosition, 4, gl.FLOAT, false, 0, 0);
    
    // create and bind uv buffer
    if (myUVBuffer == null) myUVBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, myUVBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(program.aVertexTextureCoords);
    // note that texture uv's are 2d, which is why there's a 2 below
    gl.vertexAttribPointer(program.aVertexTextureCoords, 2, gl.FLOAT, false, 0, 0);

    // uniform values
    gl.uniform3fv (program.uTheta, new Float32Array(angles));
   
    // Setting up the IBO
    if (myIndexBuffer == null) myIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, myIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // Clean
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      
    updateDisplay = true;
    draw(3);
}

  function createTerrain() {
      
    gl.disable(gl.CULL_FACE);
    // clear your points and elements
    points = [];
    indices = [];
    uvs = [];

    // make your shape based on type
    makeTerrain(5);
        
    //create and bind VAO
    if (myVAO == null) myVAO = gl.createVertexArray();
    gl.bindVertexArray(myVAO);
    
    // create and bind vertex buffer
    if (myVertexBuffer == null) myVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, myVertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(program.aVertexPosition);
    gl.vertexAttribPointer(program.aVertexPosition, 4, gl.FLOAT, false, 0, 0);
    
    // create and bind uv buffer
    if (myUVBuffer == null) myUVBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, myUVBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(program.aVertexTextureCoords);
    // note that texture uv's are 2d, which is why there's a 2 below
    gl.vertexAttribPointer(program.aVertexTextureCoords, 2, gl.FLOAT, false, 0, 0);

    // uniform values
    gl.uniform3fv (program.uTheta, new Float32Array(angles));
   
    // Setting up the IBO
    if (myIndexBuffer == null) myIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, myIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // Clean
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      
    updateDisplay = true;
    draw(2);
}

  // We call draw to render to our canvas
  function draw(tex) {
    // THIS DRAW USES TEXTURE IN IMAGE[0] POSITION
    // Clear the scene
    //gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    // Bind the VAO
    gl.bindVertexArray(myVAO);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, myIndexBuffer);

    if (tex == 0){
      // bind the texture
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(program.uSampler, 0);

      // Draw to the scene using triangle primitives
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    }
    if (tex == 1){
      // bind the texture
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture1);
      gl.uniform1i(program.uSampler, 0);
  
      // Draw to the scene using triangle primitives
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    }
    if (tex == 2){
      // bind the texture
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture2);
      gl.uniform1i(program.uSampler, 0);
  
      // Draw to the scene using triangle primitives
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    } 
    if (tex == 3){
      // bind the texture
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture3);
      gl.uniform1i(program.uSampler, 0);
  
      // Draw to the scene using triangle primitives
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    }
    if (tex == 4){
      // bind the texture
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture4);
      gl.uniform1i(program.uSampler, 0);
  
      // Draw to the scene using triangle primitives
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    }

    // Clean
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
  }

  // Entry point to our application
  async function init() {
    await loadImages(['walltexture.jpg', 'testroof.png', 'grass.jpg', 'doortexture.png', 'peach.png']);
    // Retrieve the canvas
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) {
      console.error(`There is no canvas with id ${'webgl-canvas'} on this page.`);
      return null;
    }

    // deal with keypress
    window.addEventListener('keydown', gotKey , false);

    // Retrieve a WebGL context
    gl = canvas.getContext('webgl2');
    // Set the clear color to be black
    gl.clearColor(0, 0, 0, 1);
      
    // some GL initialization
    // these var's are necessary for texturing:
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LESS);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    //
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
    gl.frontFace(gl.CCW);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);

    // Read, compile, and link your shaders
    initProgram();
    // note: initProgram has an async file read that will finish last 
    // and it will need to call the rest of the functions for showing the texture without an
    // extra load/draw after it loads.
    
  }
