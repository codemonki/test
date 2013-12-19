/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function incorrectAnswer()
{
    var $messageDiv = $('#message'); // get the reference of the div
    $messageDiv.show().html('X'); // show and set the message
    setTimeout(function() {
        $messageDiv.hide().html('');
    }, 1800); // 3 seconds later, hide
    // and clear the message
}
function correctAnswer()
{
    $('.panel').hide();
    $('.panel#number').show();
}
function arrow()
{
   $('.panel button.continue').addClass('active');
}