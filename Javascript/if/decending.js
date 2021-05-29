let x = 134, y = 644, z = 111, l, m, s;
if ((x > y) && (x > z)) {
    l = x;
}

else {if ((x < y) && (x > z) || (x>y) && (x <z)){ 
    m = x;
}

if ((x < z) && (x < z)) {
    s = x;
}
}
if ((y > z) && (y > x)) {
    l = y;
}

else {if ((y < z) && (y > x) || (y>z) && (y <x)){ 
    m = y;
}

if ((y < z) && (y < x)) {
    s = y;
}
}
if ((z > x) && (z > y)) {
    l = z;
}

else
 {if ((z < x) && ( z > y) || (z>x) && (z <y)){ 
    m = z;
}

if ((z < x) &&( z < y)) {
    s = z;
}
 }

console.log("Ascending number is ",l, m, s, ".");