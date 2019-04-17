let draggingElement;

function onMouseDown(event) {
  if(event.target.matches('.draggable-item')){
  //console.log('mousedown', event);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  draggingElement = event.target;
  
  }
}

function onMouseMove(event) {
  //console.log('mousemove', event);
  draggingElement.style.top = `${event.clientY}px`
  draggingElement.style.left = `${event.clientX}px`
 
}

function onMouseUp(event){
  console.log('mouseup',event);
  document.removeEventListener('mousemove',onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
  
  
  
}

document.addEventListener('mousedown', onMouseDown);
//document.addEventListener('mousemove', onMouseMove);
//document.addEventListener('mouseup', onMouseUp);
