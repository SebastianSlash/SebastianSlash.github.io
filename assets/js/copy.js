const copied_email = document.querySelector(".copy_msg.email");
const copied_phone = document.querySelector(".copy_msg.phone");

function show_copy_msg(type) {
  if (type == 'email') {
    copied_email.classList.toggle("show");
    setTimeout(() => {  copied_email.classList.toggle("show"); }, 1500);
  } else if (type == 'phone') {
    copied_phone.classList.toggle("show");
    setTimeout(() => {  copied_phone.classList.toggle("show"); }, 1500);
  } else {
    console.log('Unrecognized copy message type');
  }
}

var copyEmailBtn = document.querySelector('.js-emailcopybtn');
copyEmailBtn.addEventListener('click', function(event) {
  // Select the email text
  var emailLink = document.getElementById('EmailAddress');
  var range = document.createRange();
  range.selectNode(emailLink);
  window.getSelection().addRange(range);

  try {
    // Now that we've selected the anchor text, execute the copy command
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copy email copy command was ' + msg);
    show_copy_msg('email');
  } catch(err) {
    console.log('Oops, unable to copy');
  }

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported
  window.getSelection().removeAllRanges();
});

var copyPhoneBtn = document.querySelector('.js-phonecopybtn');
copyPhoneBtn.addEventListener('click', function(event) {
  // Select the phone text
  var cellNumber = document.getElementById('PhoneNumber');
  var range = document.createRange();
  range.selectNode(cellNumber);
  window.getSelection().addRange(range);

  try {
    // Now that we've selected the anchor text, execute the copy command
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copy phone number copy command was ' + msg);
    show_copy_msg('phone');
  } catch(err) {
    console.log('Oops, unable to copy');
  }

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported
  window.getSelection().removeAllRanges();
});
