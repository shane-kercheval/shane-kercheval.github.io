$(document).ready(function(e){
  var linkColor = "darkorange";
  var linkColorClicked = "#00ACFF";

  function resetLinkColors(){
    $("#page_numbers .page").css("color", linkColor);//set link color of all pages to default
    //set all the cateory links to default link color, change the clicked color to 'clicked'
    $(".category-list a").css("color",linkColor);
  }

  //clicks on categories
  $(".category-list a").click(function(event){
    event.preventDefault();
    resetLinkColors();
    $(this).css("color", linkColorClicked);//change link color of the one that was clicked

    //get the name of the category that was clicked
    var category_name = $(this).text();
    if(category_name === "Show All"){
      //get all list items that have a 'categories' attribute
      $( "li[categories]" ).show();
    }
    else {
      //"<category> <(#)>"we need to break off the actual <category>
      var category = category_name.split(" ")[0].toLowerCase();
      //hide all the list item elements with a 'categories' attribute
      $("li[categories]").hide();
      //show all the list item attirbutes that match the category - https://api.jquery.com/attribute-contains-word-selector/
      $("li[categories~="+category+"]").show();
    }
  });

  function pageClickCallback( event, page, $link ){
    return function(){
      event.preventDefault();
      resetLinkColors();
      $link.css("color",linkColorClicked);//change link color of the one that was clicked
      //hide all the list items (i.e. blog articles) that have a 'page' attribute
      $("li[page]").hide();
      //show all the list items (i.e. blog articles) for the particular page
      $("li[page~="+page+"]").show();
    }
  }

  var posts_per_page = $( "ul[posts_per_page]" ).attr("posts_per_page");

  if(typeof posts_per_page != 'undefined'){
    //get the number of posts (i.e. highest index)
    var $posts =  $("li[categories]");//every post will have a category attribute
    var number_of_posts = parseInt($posts.size());
    var number_of_pages = Math.ceil(number_of_posts / posts_per_page);

    //display pages for first page
    $posts.each(function(){
      var index = $(this).attr("index_number");
      //set the page attribute on each post so that when clicked, we can easily show the posts for a paricular page
      var page = Math.ceil(index/posts_per_page);
      $(this).attr("page", page);
      //hide all but the first page
      if(page > 1){
        //console.log("hide");
        $(this).hide();
      }
    });

    $page_number_span = $("#page_numbers");//get the page_number span from blog.md
    $page_number_span.append("Pages: ");
    for (var page = 1; page <= number_of_pages; page++) {
        $link = $('<a class="page" href="">'+ page +' </a>');
        $link.click({param1: page},function(event){
              event.preventDefault();
              resetLinkColors();
              $(this).css("color",linkColorClicked);//change link color of the one that was clicked
              //hide all the list items (i.e. blog articles) that have a 'page' attribute
              $("li[page]").hide();
              //show all the list items (i.e. blog articles) for the particular page
              $("li[page~="+event.data.param1+"]").show();
        });

        if(page === 1){
          $link.css("color",linkColorClicked); //default the first page link to 'pressed'
        }
        $page_number_span.append($link);//add the page to the span
    }
  }
});
