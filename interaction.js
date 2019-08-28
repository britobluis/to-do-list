$(function() {
  var listItems = function() {
    var val = $("input").val();
    if(val !== "") {
       var elem = $("<li></li>").text(val);
      $(elem).append("<button class='rem'>X</button>");
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
});
