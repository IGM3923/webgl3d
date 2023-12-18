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


function makeCylinder (radialdivision,heightdivision){
    var pi = Math.PI;
    for (i = 0; i < radialdivision; i++)
    {
        x1 = Math.cos(i*(2*pi/radialdivision))*0.5;
        x2 = Math.cos((i+1)*(2*pi/radialdivision))*0.5;
        y1 = Math.sin(i*(2*pi/radialdivision))*0.5;
        y2 = Math.sin((i+1)*(2*pi/radialdivision))*0.5;
        
        addTriangle(-1,0,0.5,x2-1,y2,0.5,x1-1,y1,0.5);
        addTriangle(-1,0,-0.5,x1-1,y1,-0.5,x2-1,y2,-0.5);

        var offset = 1/heightdivision;

        var j=-0.5;
        for(k = 0; k < heightdivision; k++)
        {
            addTriangle(x2-1,y2,j,x1-1,y1,(j+(offset)),x2-1,y2,(j+(offset)));
            addTriangle(x2-1,y2,j,x1-1,y1,j,x1-1,y1,(j+(offset)));
            j += offset;
        }
    }

}


function makeCone (radialdivision, heightdivision) {
    var pi = Math.PI;
    for (i = 0; i < radialdivision; i++)
    {
        x1 = Math.cos(i*(2*pi/radialdivision))*0.5;
        x2 = Math.cos((i+1)*(2*pi/radialdivision))*0.5;
        y1 = Math.sin(i*(2*pi/radialdivision))*0.5;
        y2 = Math.sin((i+1)*(2*pi/radialdivision))*0.5;

        addTriangle(0,0,0,x1,y1,0,x2,y2,0);

        for (j = 0; j < heightdivision; j++)
        {
            addTriangle(x2,y2,j,x1*(heightdivision-1/heightdivision), y1*(heightdivision-1/heightdivision), j + (1/heightdivision), x2*(heightdivision-1/heightdivision), y2*(heightdivision-1/heightdivision), j+(1/heightdivision))
            addTriangle(x2,y2,j,x1,y1,j,x1*(heightdivision-1/heightdivision), y1*(heightdivision-1/heightdivision), j + (1/heightdivision))
        }
    }

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
            addTriangle((x*offset-0.5)-0.5, -0.9, 0.5, ((x+1)*offset-0.5)-0.5, -0.5, 0.5, (x*offset-0.5)-0.5, -0.5, 0.5);
            addTriangle((x*offset-0.5)+0.5, -0.9, 0.5, ((x+1)*offset-0.5)+0.5, -0.5, 0.5, (x*offset-0.5)+0.5, -0.5, 0.5);
            addTriangle((x*offset-0.5)-1.5, -0.9, 0.5, ((x+1)*offset-0.5)-1.5, -0.5, 0.5, (x*offset-0.5)-1.5, -0.5, 0.5);
            addTriangle((x*offset-0.5)+1.5, -0.9, 0.5, ((x+1)*offset-0.5)+1.5, -0.5, 0.5, (x*offset-0.5)+1.5, -0.5, 0.5);
            addTriangle((x*offset-0.5)-0.5, -0.9, 0.5, ((x+1)*offset-0.5)-0.5, -0.9, 0.5, ((x+1)*offset-0.5)-0.5, -0.5, 0.5);
            addTriangle((x*offset-0.5)+0.5, -0.9, 0.5, ((x+1)*offset-0.5)+0.5, -0.9, 0.5, ((x+1)*offset-0.5)+0.5, -0.5, 0.5);
            addTriangle((x*offset-0.5)-1.5, -0.9, 0.5, ((x+1)*offset-0.5)-1.5, -0.9, 0.5, ((x+1)*offset-0.5)-1.5, -0.5, 0.5);
            addTriangle((x*offset-0.5)+1.5, -0.9, 0.5, ((x+1)*offset-0.5)+1.5, -0.9, 0.5, ((x+1)*offset-0.5)+1.5, -0.5, 0.5);
            
            // Back
            addTriangle(((x+1)*offset-0.5)-0.5, -0.9, -0.5, (x*offset-0.5)-0.5, -0.9, -0.5, (x*offset-0.5)-0.5, -0.5, -0.5);
            addTriangle(((x+1)*offset-0.5)+0.5, -0.9, -0.5, (x*offset-0.5)+0.5, -0.9, -0.5, (x*offset-0.5)+0.5, -0.5, -0.5);
            addTriangle(((x+1)*offset-0.5)-1.5, -0.9, -0.5, (x*offset-0.5)-1.5, -0.9, -0.5, (x*offset-0.5)-1.5, -0.5, -0.5);
            addTriangle(((x+1)*offset-0.5)+1.5, -0.9, -0.5, (x*offset-0.5)+1.5, -0.9, -0.5, (x*offset-0.5)+1.5, -0.5, -0.5);
            addTriangle(((x+1)*offset-0.5)-0.5, -0.9, -0.5, (x*offset-0.5)-0.5, -0.5, -0.5, ((x+1)*offset-0.5)-0.5, -0.5, -0.5);
            addTriangle(((x+1)*offset-0.5)+0.5, -0.9, -0.5, (x*offset-0.5)+0.5, -0.5, -0.5, ((x+1)*offset-0.5)+0.5, -0.5, -0.5);
            addTriangle(((x+1)*offset-0.5)-1.5, -0.9, -0.5, (x*offset-0.5)-1.5, -0.5, -0.5, ((x+1)*offset-0.5)-1.5, -0.5, -0.5);
            addTriangle(((x+1)*offset-0.5)+1.5, -0.9, -0.5, (x*offset-0.5)+1.5, -0.5, -0.5, ((x+1)*offset-0.5)+1.5, -0.5, -0.5);

            // Side Left
            addTriangle(-1.5, -0.9, ((y+1)*offset-0.5), -1.5, -0.9, (y*offset-0.5), -1.5, -0.5, (y*offset-0.5));
            addTriangle(-1.5, -0.9, ((y+1)*offset-0.5), -1.5, -0.5, (y*offset-0.5), -1.5, -0.5, ((y+1)*offset-0.5));
            // Side Right
            addTriangle(1.5, -0.9, -0.5, 1.5, -0.5, ((y+1)*offset-0.5), 1.5, -0.5, (y*offset-0.5));
            addTriangle(1.5, -0.9, -0.5, 1.5, -0.9, ((y+1)*offset-0.5), 1.5, -0.5, ((y+1)*offset-0.5));

            // Bottom
            addTriangle(((x+1)*offset-0.5)-0.5, -0.9, (y*offset-0.5), (x*offset-0.5)-0.5, -0.9, ((y+1)*offset-0.5), (x*offset-0.5)-0.5, -0.9, (y*offset-0.5));
            addTriangle(((x+1)*offset-0.5)+0.5, -0.9, (y*offset-0.5), (x*offset-0.5)+0.5, -0.9, ((y+1)*offset-0.5), (x*offset-0.5)+0.5, -0.9, (y*offset-0.5));
            addTriangle(((x+1)*offset-0.5)-1.5, -0.9, (y*offset-0.5), (x*offset-0.5)-1.5, -0.9, ((y+1)*offset-0.5), (x*offset-0.5)-1.5, -0.9, (y*offset-0.5));
            addTriangle(((x+1)*offset-0.5)+1.5, -0.9, (y*offset-0.5), (x*offset-0.5)+1.5, -0.9, ((y+1)*offset-0.5), (x*offset-0.5)+1.5, -0.9, (y*offset-0.5));
            addTriangle(((x+1)*offset-0.5)-0.5, -0.9, (y*offset-0.5), ((x+1)*offset-0.5)-0.5, -0.9, ((y+1)*offset-0.5), (x*offset-0.5)-0.5, -0.9, ((y+1)*offset-0.5));
            addTriangle(((x+1)*offset-0.5)+0.5, -0.9, (y*offset-0.5), ((x+1)*offset-0.5)+0.5, -0.9, ((y+1)*offset-0.5), (x*offset-0.5)+0.5, -0.9, ((y+1)*offset-0.5));
            addTriangle(((x+1)*offset-0.5)-1.5, -0.9, (y*offset-0.5), ((x+1)*offset-0.5)-1.5, -0.9, ((y+1)*offset-0.5), (x*offset-0.5)-1.5, -0.9, ((y+1)*offset-0.5));
            addTriangle(((x+1)*offset-0.5)+1.5, -0.9, (y*offset-0.5), ((x+1)*offset-0.5)+1.5, -0.9, ((y+1)*offset-0.5), (x*offset-0.5)+1.5, -0.9, ((y+1)*offset-0.5));
            // Top
            addTriangle((x*offset-0.5)-0.5, -0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5)-0.5, -0.5, (y*offset-0.5), (x*offset-0.5)-0.5, -0.5, (y*offset-0.5));
            addTriangle((x*offset-0.5)+0.5, -0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5)+0.5, -0.5, (y*offset-0.5), (x*offset-0.5)+0.5, -0.5, (y*offset-0.5));
            addTriangle((x*offset-0.5)-1.5, -0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5)-1.5, -0.5, (y*offset-0.5), (x*offset-0.5)-1.5, -0.5, (y*offset-0.5));
            addTriangle((x*offset-0.5)+1.5, -0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5)+1.5, -0.5, (y*offset-0.5), (x*offset-0.5)+1.5, -0.5, (y*offset-0.5));
            addTriangle(((x+1)*offset-0.5)-0.5, -0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5)-0.5, -0.5, (y*offset-0.5), (x*offset-0.5)-0.5, -0.5, ((y+1)*offset-0.5));
            addTriangle(((x+1)*offset-0.5)+0.5, -0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5)+0.5, -0.5, (y*offset-0.5), (x*offset-0.5)+0.5, -0.5, ((y+1)*offset-0.5));
            addTriangle(((x+1)*offset-0.5)-1.5, -0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5)-1.5, -0.5, (y*offset-0.5), (x*offset-0.5)-1.5, -0.5, ((y+1)*offset-0.5));
            addTriangle(((x+1)*offset-0.5)+1.5, -0.5, ((y+1)*offset-0.5), ((x+1)*offset-0.5)+1.5, -0.5, (y*offset-0.5), (x*offset-0.5)+1.5, -0.5, ((y+1)*offset-0.5));
        }
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
    points.push(y0);  uvs.push (0.0); 
    points.push(z0);  uvs.push (0.0); 
    points.push(1.0);
    indices.push(nverts);
    nverts++;
    
    // push second vertex
    points.push(x1); uvs.push (0.0);
    points.push(y1); uvs.push (1.0);
    points.push(z1); uvs.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++
    
    // push third vertex
    points.push(x2); uvs.push (0.0);
    points.push(y2); uvs.push (0.0);
    points.push(z2); uvs.push (1.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
}

