const cont= document.getElementById('hexag').querySelector('.container-fluid')
const hex=16
const cursor=document.getElementById('cursor');

for(let k=0;k<hex;k++) {
  const r= document.createElement('div')
  r.classList.add('row')
  cont.appendChild(r)
  for(let j=0;j<hex;j++){
  const hexa = document.createElement('div')
  hexa.classList.add('hexagon')
  r.appendChild(hexa)
}
}
cont.onmousemove=function(e){
    cursor.style.left=e.clientX+'px';
    cursor.style.top=e.clientY+'px';
}
