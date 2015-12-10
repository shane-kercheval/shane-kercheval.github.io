//clicks on categories
$(".category-list a").click(function(event){
  event.preventDefault();

  //get the name of the category that was clicked
  var category_name = $(this).text();
  if(category_name === "Show All"){
    $( "li[categories]" ).show();
  }
  else {
    //"<category> <(#)>we need to break off the actual <category>
    var category = category_name.split(" ")[0].toLowerCase();

    //hide all the list item elements with a category attribute
    $( "li[categories]" ).hide();
    //show all the list item attirbutes that match the category - https://api.jquery.com/attribute-contains-word-selector/
    $( "li[categories~="+category+"]" ).show();

  }
})
