document.querySelector("span.Leave").addEventListener("click", function() {
    const elementsToDelete = document.querySelectorAll(".del");
    elementsToDelete.forEach(function(element) {
      element.remove();
    });
  });
  