/// Program to understand tessellation process in WebGL by coding basic
///     shapes from triangles
/// Author: Isaac Mixon

// TODO: Instead of subdivisions, we will need to update the size of each shape to make sense in
// the scene. We will need to fix the code for cylinders (and spheres, if necessary). Subdivisions
// and sizes can probably be hardcoded to whatever looks the best. 

//
// fill in code that creates the triangles for a cube with dimensions 1x1x1
// on each side (and the origin in the center of the cube). with an equal
// number of subdivisions along each cube face as given by the parameter
//subdivisions
//
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


//
// fill in code that creates the triangles for a cylinder with diameter 1
// and height of 1 (centered at the origin) with the number of subdivisions
// around the base and top of the cylinder (given by radialdivision) and
// the number of subdivisions along the surface of the cylinder given by
//heightdivision.
//
function makeCylinder (radialdivision,heightdivision){
    
    var pi = Math.PI;
    for (i = 0; i < radialdivision; i++)
    {
        x1 = Math.cos(i*(2*pi/radialdivision))*0.5;
        x2 = Math.cos((i+1)*(2*pi/radialdivision))*0.5;
        y1 = Math.sin(i*(2*pi/radialdivision))*0.5;
        y2 = Math.sin((i+1)*(2*pi/radialdivision))*0.5;
        
        addTriangle(0,0,0.5,x2,y2,0.5,x1,y1,0.5);
        addTriangle(0,0,-0.5,x1,y1,-0.5,x2,y2,-0.5);

        var offset = 1/heightdivision;

        var j=-0.5;
        for(k = 0; k < heightdivision; k++)
        {
            addTriangle(x2,y2,j,x1,y1,(j+(offset)),x2,y2,(j+(offset)));
            addTriangle(x2,y2,j,x1,y1,j,x1,y1,(j+(offset)));
            j += offset;
        }
    }

}


//
// fill in code that creates the triangles for a cone with diameter 1
// and height of 1 (centered at the origin) with the number of
// subdivisions around the base of the cone (given by radialdivision)
// and the number of subdivisions along the surface of the cone
//given by heightdivision.
//
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
    
//
// fill in code that creates the triangles for a sphere with diameter 1
// (centered at the origin) with number of slides (longitude) given by
// slices and the number of stacks (lattitude) given by stacks.
// For this function, you will implement the tessellation method based
// on spherical coordinates as described in the video (as opposed to the
//recursive subdivision method).
//
function makeSphere (slices, stacks) {
    // fill in your code here.
    // Could not figure this one out :(
}



////////////////////////////////////////////////////////////////////
//
//  Do not edit below this line
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
    points.push(x0);  bary.push (1.0);
    points.push(y0);  bary.push (0.0);
    points.push(z0);  bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
    
    // push second vertex
    points.push(x1); bary.push (0.0);
    points.push(y1); bary.push (1.0);
    points.push(z1); bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++
    
    // push third vertex
    points.push(x2); bary.push (0.0);
    points.push(y2); bary.push (0.0);
    points.push(z2); bary.push (1.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
}

