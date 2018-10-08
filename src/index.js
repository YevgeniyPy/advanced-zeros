module.exports = function getZerosCount(number, base) {
  // your implementation
  let zerosCount=0;
  let prNum;
  let d; 
  let x=base;
  let y;
  if (x<4){prNum=x;}
  if (!(x & (x-1))) {d=2}
  else { while (!(x & 1)) {x /= 2}
    d=3;
    while (x>1) {
    while (!(x%d)){
       x/=d;
    }
    d+=2;
  }
  d=d-2;
  }
  prNum=d;
  for (y=0;base%d==0;y++){
    base /= d;
  }
  for (let i = d ; number / i >= 1; i *= d){
    zerosCount += Math.floor(number / i);
  }
  return Math.floor(zerosCount/y);
}
