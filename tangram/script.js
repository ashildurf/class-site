

var nodeList = document.getElementsByClassName('draggable');
 
  for(var i=0;i<nodeList.length;i++) {
    var obj = nodeList[i];
    obj.addEventListener('touchmove', function(event) {
      var touch = event.targetTouches[0];
      
      // Place element where the finger is
      event.target.style.left = touch.pageX + 'px';
      event.target.style.top = touch.pageY + 'px';
      event.preventDefault();
    }, false);
  }

  //alert

swal("Drag and drop the shapes, creating your own awesome geometric images.");
