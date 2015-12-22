- author is defaulted in _config.yml for all posts
- each page should include a 'keywords' front-matter attribute (built in head.html)
- each post can turn off comments by including "comments: false". (defaulted to true in _config.yml)
- each post can override author
- pages that should not be displayed in the menu should remove: include_in_nav: true
- validate twitter card links: https://cards-dev.twitter.com/validator
- can do something like the following for twitter block quote
  > [{% include icon-twitter.svg %}  The goal is to validate/invalidate your assumptions as quickly and inexpensively as possible.]( https://twitter.com/intent/tweet?text=The%20goal%20is%20to%20validate%2Finvalidate%20your%20assumptions%20as%20quickly%20and%20inexpensively%20as%20possible.%20{{ site.url }}{{ page.url }}){:target="\_blank"}
