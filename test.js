


export function maskGenerator(progress=0,direction='right') {
  const linearGradient = [];
  let gradientNumber = 0;
  let dif = 3.33;
  let transition = 0.13;

  for (let i = 1; i <= 45; i++) {
    if (i > 15) {
      let black;
      if (i > 45 - progress) {
        if (transition <= 3.33) {
          black = `black ${gradientNumber}% ${ gradientNumber + dif - transition }%,transparent ${gradientNumber + dif - transition}% ${ gradientNumber + dif }%`;
        }
        else {
          black = `black ${gradientNumber}% ${gradientNumber}%,transparent ${gradientNumber}% ${ gradientNumber + dif }%`;
        }
      }
      else {
        black = `black ${gradientNumber}% ${ gradientNumber + dif }%,transparent ${gradientNumber + dif}% ${gradientNumber + dif}%`;
      }

      linearGradient.push(black);
      gradientNumber += dif;
    }

      if (i > 45 - progress) { transition += 0.25; }
      
  }
    
    return `linear-gradient(to ${direction},${linearGradient.join(",")})`

 
}


