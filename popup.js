document.addEventListener('DOMContentLoaded', function() {
    var popupWindow = document.getElementById("popup-window");
    var closeButton = document.getElementById("close-button");
  
    closeButton.addEventListener("click", function() {
      window.close();
    });
  
    var isDragging = false;
    var offsetX, offsetY;
  
    popupWindow.addEventListener('mousedown', function(event) {
      isDragging = true;
      offsetX = event.clientX - popupWindow.getBoundingClientRect().left;
      offsetY = event.clientY - popupWindow.getBoundingClientRect().top;
    });
  
    document.addEventListener('mousemove', function(event) {
      if (isDragging) {
        popupWindow.style.left = (event.clientX - offsetX) + 'px';
        popupWindow.style.top = (event.clientY - offsetY) + 'px';
      }
    });
  
    document.addEventListener('mouseup', function() {
      isDragging = false;
    });
  });
  