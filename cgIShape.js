/// Program to understand tessellation process in WebGL by coding basic
///     shapes from triangles
/// Author: Isaac Mixon

////////////////////////////////////////////////////////////////////
//
//  BASE SHAPE CODE
//
///////////////////////////////////////////////////////////////////


function makeCube (subdivisions)  {
    var offset = (1 / subdivisions);
    // vertical subdivisions
    for (x = 0; x < subdivisions; x++)
    {
        for (y = 0; y < subdivisions; y++)
        {
            // Front
            addTriangle(((x+1)*offset-0.5), (y*offset-0.5), -0.5, (x*offset-0.5), (y*offset-0.5), -0.5, (x*offset-0.5), ((y+1)*offset-0.5), -0.5);
            addTriangle(((x+1)*offset-0.5), (y*offset-0.5), -0.5, (x*offset-0.5), ((y+1)*offset-0.5), -0.5, ((x+1)*offset-0.5), ((y+1)*offset-0.5), -0.5);
            addTriangle((x*offset-0.5), (y*offset-0.5), 0.5, ((x+1)*offset-0.5), (y*offset-0.5), 0.5, (x*offset-0.5), ((y+1)*offset-0.5), 0.5);
            addTriangle((x*offset-0.5), ((y+1)*offset-0.5), 0.5, ((x+1)*offset-0.5), (y*offset-0.5), 0.5, ((x+1)*offset-0.5), ((y+1)*offset-0.5), 0.5);
            // Side 
            addTriangle(-0.5, (x*offset-0.5), ((y+1)*offset-0.5), -0.5, ((x+1)*offset-0.5), (y*offset-0.5), -0.5, (x*offset-0.5), (y*offset-0.5));
            addTriangle(-0.5, ((x+1)*offset-0.5), ((y+1)*offset-0.5), -0.5, ((x+1)*offset-0.5), (y*offset-0.5), -0.5, (x*offset-0.5), ((y+1)*offset-0.5));
            addTriangle(0.5, ((x+1)*offset-0.5), (y*offset-0.5), 0.5, (x*offset-0.5), ((y+1)*offset-0.5), 0.5, (x*offset-0.5), (y*offset-0.5));
            addTriangle(0.5, ((x+1)*offset-0.5), (y*offset-0.5), 0.5, ((x+1)*offset-0.5), ((y+1)*offset-0.5), 0.5, (x*offset-0.5), ((y+1)*offset-0.5));
            // Top
            addTriangle(((x+1)*offset-0.5), -0.5, (y*offset-0.5), (x*offset-0.5), -0.5, ((y+1)*offset-0.5), (x*offset-0.5), -0.5, (y*offset-0.5));
            addTriangle(((x+1)*offset-0.5), -0.5, (y*offset-0.5), ((x+1)*offset-0.5), -0.5, ((y+1)*offset-0.5), (x*offset-0.5), -0.5, ((y+1)*offset-0.5));
            addTriangle((x*offset-0.5), 0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5), 0.5, (y*offset-0.5), (x*offset-0.5), 0.5, (y*offset-0.5));
            addTriangle(((x+1)*offset-0.5), 0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5), 0.5, (y*offset-0.5), (x*offset-0.5), 0.5, ((y+1)*offset-0.5));
        }
    }
}

// Alt of makeCube used for base of castle
function makeBase (subdivisions)  {
    var offset = (1 / subdivisions);
    // vertical subdivisions
    for (x = 0; x < subdivisions; x++)
    {
        for (y = 0; y < subdivisions; y++)
        {
            // Back
            addTriangle(((x+1)*offset-0.5)-0.5, (y*offset-0.5), -0.5, (x*offset-0.5)-0.5, (y*offset-0.5), -0.5, (x*offset-0.5)-0.5, ((y+1)*offset-0.5), -0.5);
            addTriangle(((x+1)*offset-0.5)+0.5, (y*offset-0.5), -0.5, (x*offset-0.5)+0.5, (y*offset-0.5), -0.5, (x*offset-0.5)+0.5, ((y+1)*offset-0.5), -0.5);
            addTriangle(((x+1)*offset-0.5)-0.5, (y*offset-0.5), -0.5, (x*offset-0.5)-0.5, ((y+1)*offset-0.5), -0.5, ((x+1)*offset-0.5)-0.5, ((y+1)*offset-0.5), -0.5);
            addTriangle(((x+1)*offset-0.5)+0.5, (y*offset-0.5), -0.5, (x*offset-0.5)+0.5, ((y+1)*offset-0.5), -0.5, ((x+1)*offset-0.5)+0.5, ((y+1)*offset-0.5), -0.5);
            // Front
            addTriangle((x*offset-0.5)-0.5, (y*offset-0.5), 0.5, ((x+1)*offset-0.5)-0.5, (y*offset-0.5), 0.5, (x*offset-0.5)-0.5, ((y+1)*offset-0.5), 0.5);
            addTriangle((x*offset-0.5)+0.5, (y*offset-0.5), 0.5, ((x+1)*offset-0.5)+0.5, (y*offset-0.5), 0.5, (x*offset-0.5)+0.5, ((y+1)*offset-0.5), 0.5);
            addTriangle((x*offset-0.5)-0.5, ((y+1)*offset-0.5), 0.5, ((x+1)*offset-0.5)-0.5, (y*offset-0.5), 0.5, ((x+1)*offset-0.5)-0.5, ((y+1)*offset-0.5), 0.5);
            addTriangle((x*offset-0.5)+0.5, ((y+1)*offset-0.5), 0.5, ((x+1)*offset-0.5)+0.5, (y*offset-0.5), 0.5, ((x+1)*offset-0.5)+0.5, ((y+1)*offset-0.5), 0.5);

            // Side Left
            addTriangle(-1, (x*offset-0.5), ((y+1)*offset-0.5), -1, ((x+1)*offset-0.5), (y*offset-0.5), -1, (x*offset-0.5), (y*offset-0.5));
            addTriangle(-1, ((x+1)*offset-0.5), ((y+1)*offset-0.5), -1, ((x+1)*offset-0.5), (y*offset-0.5), -1, (x*offset-0.5), ((y+1)*offset-0.5));
            // Side Right
            addTriangle(1, ((x+1)*offset-0.5), (y*offset-0.5), 1, (x*offset-0.5), ((y+1)*offset-0.5), 1, (x*offset-0.5), (y*offset-0.5));
            addTriangle(1, ((x+1)*offset-0.5), (y*offset-0.5), 1, ((x+1)*offset-0.5), ((y+1)*offset-0.5), 1, (x*offset-0.5), ((y+1)*offset-0.5));
            
            // Bottom
            addTriangle(((x+1)*offset-0.5)-0.5, -0.5, (y*offset-0.5), (x*offset-0.5)-0.5, -0.5, ((y+1)*offset-0.5), (x*offset-0.5)-0.5, -0.5, (y*offset-0.5));
            addTriangle(((x+1)*offset-0.5)+0.5, -0.5, (y*offset-0.5), (x*offset-0.5)+0.5, -0.5, ((y+1)*offset-0.5), (x*offset-0.5)+0.5, -0.5, (y*offset-0.5));
            addTriangle(((x+1)*offset-0.5)-0.5, -0.5, (y*offset-0.5), ((x+1)*offset-0.5)-0.5, -0.5, ((y+1)*offset-0.5), (x*offset-0.5)-0.5, -0.5, ((y+1)*offset-0.5));
            addTriangle(((x+1)*offset-0.5)+0.5, -0.5, (y*offset-0.5), ((x+1)*offset-0.5)+0.5, -0.5, ((y+1)*offset-0.5), (x*offset-0.5)+0.5, -0.5, ((y+1)*offset-0.5));
            // Top
            addTriangle((x*offset-0.5)-0.5, 0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5)-0.5, 0.5, (y*offset-0.5), (x*offset-0.5)-0.5, 0.5, (y*offset-0.5));
            addTriangle((x*offset-0.5)+0.5, 0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5)+0.5, 0.5, (y*offset-0.5), (x*offset-0.5)+0.5, 0.5, (y*offset-0.5));
            addTriangle(((x+1)*offset-0.5)-0.5, 0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5)-0.5, 0.5, (y*offset-0.5), (x*offset-0.5)-0.5, 0.5, ((y+1)*offset-0.5));
            addTriangle(((x+1)*offset-0.5)+0.5, 0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5)+0.5, 0.5, (y*offset-0.5), (x*offset-0.5)+0.5, 0.5, ((y+1)*offset-0.5));
        }
    }
}

/**
 * 
 * @param {*} radialdivision 
 * @param {*} heightdivision 
 * @param {*} origin [x,y,z]
 * @param {*} radius 
 * @param {*} height 
 */
function makeCylinder (radialdivision,heightdivision,origin,radius,height){

    var xorg = origin[0];
    var yorg = origin[1];
    var zorg = origin[2];

    var top = zorg + height
    
    var pi = Math.PI;
    for (i = 0; i < radialdivision; i++)
    {
        x1 = xorg + Math.cos(i*(2*pi/radialdivision))*radius;
        x2 = xorg + Math.cos((i+1)*(2*pi/radialdivision))*radius;
        y1 = yorg + Math.sin(i*(2*pi/radialdivision))*radius;
        y2 = yorg + Math.sin((i+1)*(2*pi/radialdivision))*radius;
        
        //addTriangle(0,0,0.5,x2,y2,0.5,x1,y1,0.5);
        addTriangle(xorg,top,yorg,x2,top,y2,x1,top,y1);
        //addTriangle(0,0,-0.5,x1,y1,-0.5,x2,y2,-0.5);
        addTriangle(xorg,zorg,yorg,x1,zorg,y1,x2,zorg,y2);


        var offset = height/heightdivision;

        var j=zorg;
        for(k = 0; k < heightdivision; k++)
        {
            //addTriangle(x2,y2,j,x1,y1,(j+(offset)),x2,y2,(j+(offset)));
            addTriangle(x2,j,y2,x1,(j+(offset)),y1,x2,(j+(offset)),y2);
            //addTriangle(x2,y2,j,x1,y1,j,x1,y1,(j+(offset)));
            addTriangle(x2,j,y2,x1,j,y1,x1,(j+(offset)),y1);
            j += offset;
        }
    }

}

/**
 * 
 * @param {*} radialdivision 
 * @param {*} heightdivision 
 * @param {*} origin 
 * @param {*} radius 
 * @param {*} height 
 */
function makeCone (radialdivision, heightdivision,origin,radius,height) {

    var xorg = origin[0];
    var yorg = origin[1];
    var zorg = origin[2];
    var top = zorg + height
    
    var pi = Math.PI;
    for (i = 0; i < radialdivision; i++)
    {
        x1 = xorg + Math.cos(i*(2*pi/radialdivision))*radius;
        x2 = xorg + Math.cos((i+1)*(2*pi/radialdivision))*radius;
        y1 = yorg + Math.sin(i*(2*pi/radialdivision))*radius;
        y2 = yorg + Math.sin((i+1)*(2*pi/radialdivision))*radius;

        //addTriangle(0,0,0,x1,y1,0,x2,y2,0);
        addTriangle(xorg,zorg,yorg,x1,zorg,y1,x2,zorg,y2);

        for (j = 0; j < heightdivision; j++)
        {
            if (heightdivision - 1 == 0){
                addTriangle(x2,zorg,y2,x1,zorg,y1,xorg,zorg+height,yorg);
            }
            //addTriangle(x2,j+zorg,y2,x1*(heightdivision-1/heightdivision), j + zorg + (1/heightdivision), y1*(heightdivision-1/heightdivision), x2*(heightdivision-1/heightdivision), j+zorg+(1/heightdivision), y2*(heightdivision-1/heightdivision))
            //addTriangle(x2,zorg+j,y2,x1,zorg+j,y1,x1*(heightdivision-1/heightdivision),j + zorg+(1/heightdivision), y1*(heightdivision-1/heightdivision))
        }
    }

}


function roofHelp(x1,x2,y1,y2,origin,height,slice){

    var xorg = origin[0];
    var yorg = origin[1];
    var zorg = origin[2];

    ratio = height/slice;
    x3 = (x1+xorg)/ratio;
    x4 = (x2+xorg)/ratio;
    y3 = (y1+yorg)/ratio;
    y4 = (y2+yorg)/ratio;
    //top
    addTriangle(x3,zorg+slice,y3,xorg,zorg+slice,yorg,x4,zorg+slice,y4);

    //side
    addTriangle(x2,zorg,y2,x1,zorg,y1,x3,zorg+slice,y3)
    addTriangle(x3,zorg+slice,y3,x4,zorg+slice,y4,x2,zorg,y2);
}

/**
 * 
 * @param {*} radialdivision 
 * @param {*} heightdivision 
 * @param {*} origin 
 * @param {*} radius 
 * @param {*} height 
 * @param {*} slice, height of slice
 */
function makeRoof (radialdivision, heightdivision,origin,radius,height,slice) {

    var xorg = origin[0];
    var yorg = origin[1];
    var zorg = origin[2];
    var top = zorg + height
    
    var pi = Math.PI;

    addTriangle(-1,zorg,-0.5,-1,zorg,0.5,1,zorg,-0.5);
    addTriangle(-1,zorg,0.5,1,zorg,0.5,1,zorg,-0.5)

    roofHelp(1,1,0.5,-0.5,origin,height,slice);
    roofHelp(-1,-1,-0.5,0.5,origin,height,slice);
    roofHelp(-1,1,0.5,0.5,origin,height,slice);
    roofHelp(1,-1,-0.5,-0.5,origin,height,slice);

}
    

function makeSphere (slices, stacks) {
    return null;
    // UNIMPLEMENTED 
}

////////////////////////////////////////////////////////////////////
//
//  CODE FOR SPECIFIC PIECES OF SCENE
//
///////////////////////////////////////////////////////////////////


// Alt of makeCube used for the base of castle building
function makeBase (subdivisions)  {
    var offset = (1 / subdivisions);
    // vertical subdivisions
    for (x = 0; x < subdivisions; x++)
    {
        for (y = 0; y < subdivisions; y++)
        {
            // Back
            addTriangle(((x+1)*offset-0.5)-0.5, (y*offset-0.5), -0.5, (x*offset-0.5)-0.5, (y*offset-0.5), -0.5, (x*offset-0.5)-0.5, ((y+1)*offset-0.5), -0.5);
            addTriangle(((x+1)*offset-0.5)+0.5, (y*offset-0.5), -0.5, (x*offset-0.5)+0.5, (y*offset-0.5), -0.5, (x*offset-0.5)+0.5, ((y+1)*offset-0.5), -0.5);
            addTriangle(((x+1)*offset-0.5)-0.5, (y*offset-0.5), -0.5, (x*offset-0.5)-0.5, ((y+1)*offset-0.5), -0.5, ((x+1)*offset-0.5)-0.5, ((y+1)*offset-0.5), -0.5);
            addTriangle(((x+1)*offset-0.5)+0.5, (y*offset-0.5), -0.5, (x*offset-0.5)+0.5, ((y+1)*offset-0.5), -0.5, ((x+1)*offset-0.5)+0.5, ((y+1)*offset-0.5), -0.5);
            // Front
            addTriangle((x*offset-0.5)-0.5, (y*offset-0.5), 0.5, ((x+1)*offset-0.5)-0.5, (y*offset-0.5), 0.5, (x*offset-0.5)-0.5, ((y+1)*offset-0.5), 0.5);
            addTriangle((x*offset-0.5)+0.5, (y*offset-0.5), 0.5, ((x+1)*offset-0.5)+0.5, (y*offset-0.5), 0.5, (x*offset-0.5)+0.5, ((y+1)*offset-0.5), 0.5);
            addTriangle((x*offset-0.5)-0.5, ((y+1)*offset-0.5), 0.5, ((x+1)*offset-0.5)-0.5, (y*offset-0.5), 0.5, ((x+1)*offset-0.5)-0.5, ((y+1)*offset-0.5), 0.5);
            addTriangle((x*offset-0.5)+0.5, ((y+1)*offset-0.5), 0.5, ((x+1)*offset-0.5)+0.5, (y*offset-0.5), 0.5, ((x+1)*offset-0.5)+0.5, ((y+1)*offset-0.5), 0.5);
            
            // Side Left
            addTriangle(-1, (x*offset-0.5), ((y+1)*offset-0.5), -1, ((x+1)*offset-0.5), (y*offset-0.5), -1, (x*offset-0.5), (y*offset-0.5));
            addTriangle(-1, ((x+1)*offset-0.5), ((y+1)*offset-0.5), -1, ((x+1)*offset-0.5), (y*offset-0.5), -1, (x*offset-0.5), ((y+1)*offset-0.5));
            // Side Right
            addTriangle(1, ((x+1)*offset-0.5), (y*offset-0.5), 1, (x*offset-0.5), ((y+1)*offset-0.5), 1, (x*offset-0.5), (y*offset-0.5));
            addTriangle(1, ((x+1)*offset-0.5), (y*offset-0.5), 1, ((x+1)*offset-0.5), ((y+1)*offset-0.5), 1, (x*offset-0.5), ((y+1)*offset-0.5));
            
            // Bottom
            addTriangle(((x+1)*offset-0.5)-0.5, -0.5, (y*offset-0.5), (x*offset-0.5)-0.5, -0.5, ((y+1)*offset-0.5), (x*offset-0.5)-0.5, -0.5, (y*offset-0.5));
            addTriangle(((x+1)*offset-0.5)+0.5, -0.5, (y*offset-0.5), (x*offset-0.5)+0.5, -0.5, ((y+1)*offset-0.5), (x*offset-0.5)+0.5, -0.5, (y*offset-0.5));
            addTriangle(((x+1)*offset-0.5)-0.5, -0.5, (y*offset-0.5), ((x+1)*offset-0.5)-0.5, -0.5, ((y+1)*offset-0.5), (x*offset-0.5)-0.5, -0.5, ((y+1)*offset-0.5));
            addTriangle(((x+1)*offset-0.5)+0.5, -0.5, (y*offset-0.5), ((x+1)*offset-0.5)+0.5, -0.5, ((y+1)*offset-0.5), (x*offset-0.5)+0.5, -0.5, ((y+1)*offset-0.5));
            // Top
            addTriangle((x*offset-0.5)-0.5, 0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5)-0.5, 0.5, (y*offset-0.5), (x*offset-0.5)-0.5, 0.5, (y*offset-0.5));
            addTriangle((x*offset-0.5)+0.5, 0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5)+0.5, 0.5, (y*offset-0.5), (x*offset-0.5)+0.5, 0.5, (y*offset-0.5));
            addTriangle(((x+1)*offset-0.5)-0.5, 0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5)-0.5, 0.5, (y*offset-0.5), (x*offset-0.5)-0.5, 0.5, ((y+1)*offset-0.5));
            addTriangle(((x+1)*offset-0.5)+0.5, 0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5)+0.5, 0.5, (y*offset-0.5), (x*offset-0.5)+0.5, 0.5, ((y+1)*offset-0.5));
        }
    }
}

// Alt of makeCube used for the flat terrain
function makeTerrain (subdivisions)  {
    var offset = (1 / subdivisions);
    // vertical subdivisions
    for (x = 0; x < subdivisions; x++)
    {
        for (y = 0; y < subdivisions; y++)
        {
            // Front
            addTriangle((x*offset-0.5)-0.5, -0.9, 1.8, ((x+1)*offset-0.5)-0.5, -0.5, 1.8, (x*offset-0.5)-0.5, -0.5, 1.8);
            addTriangle((x*offset-0.5)+0.5, -0.9, 1.8, ((x+1)*offset-0.5)+0.5, -0.5, 1.8, (x*offset-0.5)+0.5, -0.5, 1.8);
            addTriangle((x*offset-0.5)-1.5, -0.9, 1.8, ((x+1)*offset-0.5)-1.5, -0.5, 1.8, (x*offset-0.5)-1.5, -0.5, 1.8);
            addTriangle((x*offset-0.5)+1.5, -0.9, 1.8, ((x+1)*offset-0.5)+1.5, -0.5, 1.8, (x*offset-0.5)+1.5, -0.5, 1.8);
            addTriangle((x*offset-0.5)-0.5, -0.9, 1.8, ((x+1)*offset-0.5)-0.5, -0.9, 1.8, ((x+1)*offset-0.5)-0.5, -0.5, 1.8);
            addTriangle((x*offset-0.5)+0.5, -0.9, 1.8, ((x+1)*offset-0.5)+0.5, -0.9, 1.8, ((x+1)*offset-0.5)+0.5, -0.5, 1.8);
            addTriangle((x*offset-0.5)-1.5, -0.9, 1.8, ((x+1)*offset-0.5)-1.5, -0.9, 1.8, ((x+1)*offset-0.5)-1.5, -0.5, 1.8);
            addTriangle((x*offset-0.5)+1.5, -0.9, 1.8, ((x+1)*offset-0.5)+1.5, -0.9, 1.8, ((x+1)*offset-0.5)+1.5, -0.5, 1.8);
            
            // Back
            addTriangle(((x+1)*offset-0.5)-0.5, -0.9, -1.8, (x*offset-0.5)-0.5, -0.9, -1.8, (x*offset-0.5)-0.5, -0.5, -1.8);
            addTriangle(((x+1)*offset-0.5)+0.5, -0.9, -1.8, (x*offset-0.5)+0.5, -0.9, -1.8, (x*offset-0.5)+0.5, -0.5, -1.8);
            addTriangle(((x+1)*offset-0.5)-1.5, -0.9, -1.8, (x*offset-0.5)-1.5, -0.9, -1.8, (x*offset-0.5)-1.5, -0.5, -1.8);
            addTriangle(((x+1)*offset-0.5)+1.5, -0.9, -1.8, (x*offset-0.5)+1.5, -0.9, -1.8, (x*offset-0.5)+1.5, -0.5, -1.8);
            addTriangle(((x+1)*offset-0.5)-0.5, -0.9, -1.8, (x*offset-0.5)-0.5, -0.5, -1.8, ((x+1)*offset-0.5)-0.5, -0.5, -1.8);
            addTriangle(((x+1)*offset-0.5)+0.5, -0.9, -1.8, (x*offset-0.5)+0.5, -0.5, -1.8, ((x+1)*offset-0.5)+0.5, -0.5, -1.8);
            addTriangle(((x+1)*offset-0.5)-1.5, -0.9, -1.8, (x*offset-0.5)-1.5, -0.5, -1.8, ((x+1)*offset-0.5)-1.5, -0.5, -1.8);
            addTriangle(((x+1)*offset-0.5)+1.5, -0.9, -1.8, (x*offset-0.5)+1.5, -0.5, -1.8, ((x+1)*offset-0.5)+1.5, -0.5, -1.8);

            // Side Left
            addTriangle(-1.5, -0.9, ((y+1)*offset-0.5)-1.5, -1.5, -0.9, (y*offset-0.5)+1.5, -1.5, -0.5, (y*offset-0.5)+1.5);
            addTriangle(-1.5, -0.9, ((y+1)*offset-0.5)-1.5, -1.5, -0.5, (y*offset-0.5)+1.5, -1.5, -0.5, ((y+1)*offset-0.5)-1.5);
            // Side Right
            addTriangle(1.5, -0.9, -1.8, 1.5, -0.9, 1.8, 1.5, -0.5, 1.8);
            addTriangle(1.5, -0.5, 1.8, 1.5, -0.5, -1.8, 1.5, -0.9, -1.8);

            // Bottom
            addTriangle((x*offset-0.5)-0.5, -0.9, ((y+1)*offset-0.5)-1.5, ((x+1)*offset-0.5)-0.5, -0.9, (y*offset-0.5)+1.5, (x*offset-0.5)-0.5, -0.9, (y*offset-0.5)+1.5);
            addTriangle((x*offset-0.5)+0.5, -0.9, ((y+1)*offset-0.5)-1.5, ((x+1)*offset-0.5)+0.5, -0.9, (y*offset-0.5)+1.5, (x*offset-0.5)+0.5, -0.9, (y*offset-0.5)+1.5);
            addTriangle((x*offset-0.5)-1.5, -0.9, ((y+1)*offset-0.5)-1.5, ((x+1)*offset-0.5)-1.5, -0.9, (y*offset-0.5)+1.5, (x*offset-0.5)-1.5, -0.9, (y*offset-0.5)+1.5);
            addTriangle((x*offset-0.5)+1.5, -0.9, ((y+1)*offset-0.5)-1.5, ((x+1)*offset-0.5)+1.5, -0.9, (y*offset-0.5)+1.5, (x*offset-0.5)+1.5, -0.9, (y*offset-0.5)+1.5);
            addTriangle(((x+1)*offset-0.5)-0.5, -0.9, ((y+1)*offset-0.5)-1.5, ((x+1)*offset-0.5)-0.5, -0.9, (y*offset-0.5)+1.5, (x*offset-0.5)-0.5, -0.9, ((y+1)*offset-0.5)-1.5);
            addTriangle(((x+1)*offset-0.5)+0.5, -0.9, ((y+1)*offset-0.5)-1.5, ((x+1)*offset-0.5)+0.5, -0.9, (y*offset-0.5)+1.5, (x*offset-0.5)+0.5, -0.9, ((y+1)*offset-0.5)-1.5);
            addTriangle(((x+1)*offset-0.5)-1.5, -0.9, ((y+1)*offset-0.5)-1.5, ((x+1)*offset-0.5)-1.5, -0.9, (y*offset-0.5)+1.5, (x*offset-0.5)-1.5, -0.9, ((y+1)*offset-0.5)-1.5);
            addTriangle(((x+1)*offset-0.5)+1.5, -0.9, ((y+1)*offset-0.5)-1.5, ((x+1)*offset-0.5)+1.5, -0.9, (y*offset-0.5)+1.5, (x*offset-0.5)+1.5, -0.9, ((y+1)*offset-0.5)-1.5);
            
            // Top
            addTriangle((x*offset-0.5)-0.5, -0.5, ((y+1)*offset-0.5)-1.5, ((x+1)*offset-0.5)-0.5, -0.5, (y*offset-0.5)+1.5, (x*offset-0.5)-0.5, -0.5, (y*offset-0.5)+1.5);
            addTriangle((x*offset-0.5)+0.5, -0.5, ((y+1)*offset-0.5)-1.5, ((x+1)*offset-0.5)+0.5, -0.5, (y*offset-0.5)+1.5, (x*offset-0.5)+0.5, -0.5, (y*offset-0.5)+1.5);
            addTriangle((x*offset-0.5)-1.5, -0.5, ((y+1)*offset-0.5)-1.5, ((x+1)*offset-0.5)-1.5, -0.5, (y*offset-0.5)+1.5, (x*offset-0.5)-1.5, -0.5, (y*offset-0.5)+1.5);
            addTriangle((x*offset-0.5)+1.5, -0.5, ((y+1)*offset-0.5)-1.5, ((x+1)*offset-0.5)+1.5, -0.5, (y*offset-0.5)+1.5, (x*offset-0.5)+1.5, -0.5, (y*offset-0.5)+1.5);
            addTriangle(((x+1)*offset-0.5)-0.5, -0.5, ((y+1)*offset-0.5)-1.5, ((x+1)*offset-0.5)-0.5, -0.5, (y*offset-0.5)+1.5, (x*offset-0.5)-0.5, -0.5, ((y+1)*offset-0.5)-1.5);
            addTriangle(((x+1)*offset-0.5)+0.5, -0.5, ((y+1)*offset-0.5)-1.5, ((x+1)*offset-0.5)+0.5, -0.5, (y*offset-0.5)+1.5, (x*offset-0.5)+0.5, -0.5, ((y+1)*offset-0.5)-1.5);
            addTriangle(((x+1)*offset-0.5)-1.5, -0.5, ((y+1)*offset-0.5)-1.5, ((x+1)*offset-0.5)-1.5, -0.5, (y*offset-0.5)+1.5, (x*offset-0.5)-1.5, -0.5, ((y+1)*offset-0.5)-1.5);
            addTriangle(((x+1)*offset-0.5)+1.5, -0.5, ((y+1)*offset-0.5)-1.5, ((x+1)*offset-0.5)+1.5, -0.5, (y*offset-0.5)+1.5, (x*offset-0.5)+1.5, -0.5, ((y+1)*offset-0.5)-1.5);
            
        }
    }
}

// Alt of makeCube used for the door of castle building
function makeDoor (subdivisions = 0)  {
            addTriangle(0.25, -0.5, -0.515, -0.25, -0.5, -0.515, 0.25, 0, -0.515);
            addTriangle(-0.25, -0.5, -0.515, 0.25, 0, -0.515, -0.25, 0, -0.515);
            radialdivision = 10;
            radius = 0.25;
            origin = [0,0,-0.505];
            var xorg = origin[0];
            var yorg = origin[1];
            var zorg = origin[2];
            var pi = Math.PI;
            for (i = 0; i < radialdivision; i++)
            {
                x1 = xorg + Math.cos(i*(2*pi/radialdivision))*radius;
                x2 = xorg + Math.cos((i+1)*(2*pi/radialdivision))*radius;
                y1 = yorg + Math.sin(i*(2*pi/radialdivision))*radius;
                y2 = yorg + Math.sin((i+1)*(2*pi/radialdivision))*radius;
                
                addTriangle(xorg,yorg,zorg,x1,y1,zorg,x2,y2,zorg);
            }

}
function makePeach (subdivisions = 0)  {
    radialdivision = 10;
    radius = 0.2;
    origin = [0,0.75,-0.3];
    var xorg = origin[0];
    var yorg = origin[1];
    var zorg = origin[2];
    
    var pi = Math.PI;
    for (i = 0; i < radialdivision; i++)
    {
        x1 = xorg + Math.cos(i*(2*pi/radialdivision))*radius;
        x2 = xorg + Math.cos((i+1)*(2*pi/radialdivision))*radius;
        y1 = yorg + Math.sin(i*(2*pi/radialdivision))*radius;
        y2 = yorg + Math.sin((i+1)*(2*pi/radialdivision))*radius;
        addTriangle(xorg,yorg,zorg,x1,y1,zorg,x2,y2,zorg);
    }

}


////////////////////////////////////////////////////////////////////
//
//  PROVIDED CODE
//
///////////////////////////////////////////////////////////////////

function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {

    
    var nverts = points.length / 4;
    
    // push first vertex
    points.push(x0);  uvs.push (1.0); 
    points.push(y0);  uvs.push (1.0); 
    points.push(z0);  //uvs.push (1.0); 
    points.push(1.0);
    indices.push(nverts);
    nverts++;
    
    // push second vertex
    points.push(x1); uvs.push (0.0);
    points.push(y1); uvs.push (0.0);
    points.push(z1); //uvs.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++
    
    // push third vertex
    points.push(x2); uvs.push (0.0);
    points.push(y2); uvs.push (0.0);
    points.push(z2); //uvs.push (1.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
}

