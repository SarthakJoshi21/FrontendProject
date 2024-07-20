/*splice(start,delCount,item1.....itemN)
The splice() method of Array instances changes the contents of an array by removing or replacing
 existing elements and/or adding new elements in place*/
const mon=['jan','feb','mar','jun','jul'];
mon.splice(3,0,'apr','may');
console.log(mon)
mon.splice(3,1,'apr','may');
console.log(mon);