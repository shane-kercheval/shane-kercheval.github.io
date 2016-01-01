---

---

{% assign siteInfo = site.data.contacts['site'] %}
{% assign form = site.data.contact-form %}

"use strict";
$(document).ready(function(e){

/********************
**  /blogs
*********************/
  var linkColor = "darkorange";
  var linkColorClicked = "#00ACFF";

  function resetLinkColors(){
    $(".page_numbers .page").css("color", linkColor);//set link color of all pages to default
    //set all the category links to default link color, change the clicked color to 'clicked'
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

    var $page_number_span = $(".page_numbers");//get the page_number span from blog.md
    $page_number_span.append("Pages: ");
    for (var page = 1; page <= number_of_pages; page++) {
        var $link = $('<a class="page" href="">'+ page +' </a>');
        $link.click({param1: page},function(event){
              event.preventDefault();
              resetLinkColors();
              $(".page:contains('"+$(this).text()+"')").css("color",linkColorClicked);
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

/********************
**  contact-form.html
NOTE: The downside for adding JavaScript is that Google Tag Manager cannot hook into this and I can't track form submission events via GTM. I'll have to add custom code
*********************/
  function stringStartsWith (string, prefix) {
    return string.slice(0, prefix.length) == prefix;
  }
  function gtmPush(category, action, label, value) {
    {% if site.google_tag_manager_id and jekyll.environment != "development" %} //only make the call if configured in jekyll configuration file, otherwise the final generated site/code won't contain the code

      if(stringStartsWith(window.location.href, 'http://127.0.0.1:4000/')){
        category = "(TEST) " + category;
        action = "(TEST) " + action;
        label = "(TEST) " + label;
      }

      dataLayer.push({
        'event' : 'GAEvent',
        'eventCategory' : category,
        'eventAction' : action,
        'eventLabel' : label,
        'eventValue' : value
      });
    {% endif %}
  }

  if($('#contact-form-container').length >0 ){//ONLY EXECUTE THIS CODE ON PAGES THAT THE CONCACT FORM EXISTS
    // 1) remove action & method attributes from form (that way, if javascript is disabled, they will still be able to send message via form post)
    $("#contact-form").removeAttr("action");
    $("#contact-form").removeAttr("method");

    //dynamically add overlay (assume JavaScript is enabled)
    var $overlay = $('<div id="overlay"><p>Not Set.. Error</p><button class="button contact-form-item">Send Another Message</button></div>');
    $('#contact-form-container').append($overlay);

    // 2) when the form is submitted, then check the validity of the form, and if it valid, send the data and display the appropriate message
    $('#contact-form').submit(function(event){
      if(this.checkValidity())
      {
        event.preventDefault();
        var replyToEmail = $("#contact-form").find("input[name='_replyto']").val()

        $.ajax({
          url: "//formspree.io/{{ form.email }}",
          method: "POST",
          data: {
            _replyto: replyToEmail,
            message: $("#contact-form").find("textarea[name='message']").val()
          },
          dataType: "json",
          success: function() {
            $("#overlay p").text("Your message was sent. I will reply to '"+replyToEmail+"' as soon as I can.");
            $overlay.fadeIn();//these needs to go in success? or success/error needs to set message;
            gtmPush('contact-form', 'submit_success', window.location.href, undefined);
          },
          error: function() {
            $("#overlay p").text("There was an error sending the message. Please try again, or reach out using twitter (@{{ siteInfo.twitter_username }}) or email me directly ({{ form.email }}). Sorry for the inconvenience!");
            $overlay.fadeIn();//these needs to go in success? or success/error needs to set message;
            gtmPush('contact-form', 'submit_failure', window.location.href, undefined);
          }
        });
      }
    });

    //allow the user to get back to the form and resubmit
    $("#overlay button").click(function(event){
        $("#overlay").fadeOut();
    });

    /*Need this because safari for some brilliant reason doesn't support html form validation
        http://stackoverflow.com/questions/16251987/html5-validation-with-opera-and-safari */
    var loadScript = function(src, loadCallback) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = src;
      s.onload = loadCallback;
      document.body.appendChild(s);
    };

    // http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    if (isSafari || isOpera) {

      loadScript('//cdnjs.cloudflare.com/ajax/libs/webshim/1.15.10/dev/polyfiller.js', function () {
        webshims.setOptions('forms', {
          overrideMessages: true,
          replaceValidationUI: false
        });
        webshims.setOptions({
          waitReady: true
        });
        webshims.polyfill();
      });
    }
  }
});
