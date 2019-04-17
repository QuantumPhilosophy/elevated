'use strict'

$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $('form.signup')
  var emailInput = $('input#email-input')
  var passwordInput = $('input#password-input')
  const dobInput = $('input#dob-input')

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on('submit', function (event) {
    event.preventDefault()
    var userData = {
      email: emailInput.val().trim(),
      dob: dobInput.val().trim(),
      password: passwordInput.val().trim()
    }

    if (!userData.email || !userData.password || !userData.dob) {
      return
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.dob)
    emailInput.val('')
    passwordInput.val('')
    dobInput.val('')
  })

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser (email, password, dob) {
    $.post('/api/signup', {
      email: email,
      dob: dob,
      password: password
    }).then(function (data) {
      window.location.replace(data)
      redirectMembers()
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr)
  }

  function redirectMembers () {
    $.get('/login')
  }

  function handleLoginErr (err) {
    $('#alert .msg').text(err.responseJSON)
    $('#alert').fadeIn(500)
  }
})
