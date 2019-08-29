$(function() {
  var listItems = function() {
    var val = $("input").val();
    if(val !== "") {
      var elem = $("<li></li>").text(val);
      $(elem).append("<span class='rem'>X</span>");
      $(".mylist").append(elem);
      $("input").val("");
      $(".rem").on('click', function(){
        $(this).parent().remove();
      });
    };
  };
  $(".add").click(listItems);
  $("input").keypress(function(event) {
    if (event.keyCode == 13) listItems();
  });
  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

});
