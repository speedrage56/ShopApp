jQuery(document).ready(function() {
$('.addStuff').on('click', function() {
var htmlStr = '<div class = "appItem"> <div class = "priority"> Priority: <select> <option value="high"> High</option> <option value="medium"> Medium</option> <option value="low"> Low </option> </select> </div> Done: <input type = "checkbox" class = "checkDone" name = "status" value = "done" /> <br/> To do item: <input type ="text" class = "listItem"  name = "item" /> </div>';
$(this).closest('#outsideBox').append(htmlStr);
});

$('.removeStuff').on('click',function(){

 $(this).closest('#outsideBox').find('.checkDone').is(':checked').addClass('hideMe');

});
});
