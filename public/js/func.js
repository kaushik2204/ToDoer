$("input").keypress(function(e){
    //detecting enter key 
    if(e.which === 13){
        var todo_item=$(this).val();
        $(this).val('');
        $("ul").append('<li><span class="delIcon"><i class="fa fa-trash-o"></i></span>'+ todo_item +'</li>');
    }
});

$("ul").on("click",".delIcon",function(){
    $(this).parent().remove();
});

$("ul").on("click","li",function(){
    $(this).toggleClass("marked");
});

$(".fa-plus").click(function(){
    $("input").fadeToggle();
});

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
  $("a").fadeToggle();
}