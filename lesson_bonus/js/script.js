document.addEventListener("DOMContentLoaded", function () {
  var editButtons = document.querySelectorAll(".item-history__edit");
  editButtons.forEach(function (editButton) {
    editButton.addEventListener("click", function () {
      var submitButtonImg = document.querySelector(".form-history__submit img");
      if (submitButtonImg) {
        submitButtonImg.src = "img/save.svg";
        submitButtonImg.alt = "Save Icon";
      }
      var listItem = editButton.closest(".history__item");
      var itemName = listItem.querySelector(".item-history__name").textContent;
      document.getElementById("name").value = itemName;
      var itemId = listItem.querySelector(".item-history__uuid").textContent;
      document.getElementById("id").value = itemId;
      var submitButton = document.querySelector("#history-button > img");
      submitButton.src = "img/save.svg";
    });
  });
});
