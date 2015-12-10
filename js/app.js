//clicks on categories
$(".category-list a").click(function(event){
  event.preventDefault();

  $(".post-by-category").hide();

  //we ne
  var category_name = $(this).text();
  var category = category_name.split(" ")[0].toLowerCase();

  $(".post-list").hide();
  $(".category-list").show();
  $("."+category).show();

})
