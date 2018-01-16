//= require modules/ContentLink

$(document).ready(function() {
  $(".jsAppModule").each(function(_, item){
    target = $(item);
    eval(target.data("module")).run(target);
  })
});
