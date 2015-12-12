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
    $("li[categories]").hide();
    //show all the list item attirbutes that match the category - https://api.jquery.com/attribute-contains-word-selector/
    $("li[categories~="+category+"]").show();

  }
});

function pageClickCallback( page, $link ){
  return function(){
    event.preventDefault();
    $(".page").css("color","darkorange");
    $link.css("color","#00ACFF");

    $("li[page]").hide();
    $("li[page~="+page+"]").show();

  }
}

jQuery( document ).ready(function( $ ) {
  // Code using $ as usual goes here.
    //$( "ul[posts_per_page]" ).hide();
    var posts_per_page = $( "ul[posts_per_page]" ).attr("posts_per_page");
    //console.log("test");
    if(typeof posts_per_page != 'undefined'){
      //get the number of posts (i.e. highest index)
      var $posts =  $("li[categories]");
      var number_of_posts = $posts.size();
      var number_of_pages = Math.ceil(number_of_posts / parseInt(posts_per_page));

      //display pages for first page
      $posts.each(function(){
        var index = $(this).attr("index_number");
        //set the page attribute on each post so that when clicked, we can easily show the posts for a paricular page
        var page = Math.ceil(index/posts_per_page);
        $(this).attr("page", page);
        //hide all but the first page
        if((index / posts_per_page) > 1){
          //console.log("hide");
          $(this).hide();
        }
      });

      $page_number_span = $("#page_numbers");
      $page_number_span.append("Pages: ");
      for (var counter = 0; counter < number_of_pages; counter++) {
          $link = $('<a class="page" href="">'+ (counter + 1) +' </a>');
          $link.click(pageClickCallback( counter+1, $link ));
          if(counter === 0){
            $link.addClass("current_page");
            $link.css("color","#00ACFF");
          }
          $page_number_span.append($link);
      }

      $("")
    }
});
