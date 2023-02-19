function triangleArea(line1, line2, line3) {
    line1 = Math.abs(line1);
    line2 = Math.abs(line2);
    line3 = Math.abs(line3);
    const shomoBahu = (line1==line2) && (line1==line3);
    const bishomoBahu = (line1!=line2) && (line1!=line3);
    if(shomoBahu){
        return (Math.sqrt(3)/4)*(Math.pow(line1, 2));
    } else if(bishomoBahu){
        const s = (line1 + line2 + line3)/2;
        return (Math.sqrt(s*(s-line1)*(s-line2)*(s-line3)))
    }
}

const line1 = 12;
const line2 = 10;
const line3 = 9;

const area = triangleArea(line1, line2, line3);

console.log(area);