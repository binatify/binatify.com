var ContentLink = {
  run: function(el) {
    var target = $(el.data("target"));
    var targetContent = "";

    el.find("h3").each(function(i, item) {
      var $el = $(item);
      var link = `content_link_${i}`;
      $el.attr("id", link)
      targetContent += `<li><a href="#${link}">${$el.text()}</a></li>`
    })

    target.html(targetContent);
    
    target.on("click", "a", function(event) {
      event.preventDefault();
      $('html').animate({scrollTop: $($(event.currentTarget).attr("href")).offset().top}, 1000)
    })
  }
}
;

$(document).ready(function() {
  $(".jsAppModule").each(function(_, item){
    target = $(item);
    eval(target.data("module")).run(target);
  })
});
