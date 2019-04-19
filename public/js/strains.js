'use strict'

$(document).ready(function () {
  $.get('/api/user_data').then(function (data) {
    $('.member-name').text(data.email)
  })

  const ratings = $('.rateYo')
  for (let i = 0; i < ratings.length; i++) {
    $(`#rateYo-${ratings[i].dataset.id}`).rateYo({
      halfStar: true,
      rating: ratings[i].dataset.averageRating
    })
  }

  // jQuery for materialize modals.
  $('.modal').modal()

  $('#review-submit').click(function (event) {
    event.preventDefault()
    const reviewUser = $('#user-id').val()
    const reviewStrain = $('#strain-id').val()
    const reviewRtg = $('input[name=group1]:checked')[0].value
    const reviewTxt = $('#review-text').val()

    let createReview = function () {
      $.post('/api/strainReview', {
        user_id: reviewUser,
        strain_id: reviewStrain,
        strain_review: reviewTxt,
        strain_rating: reviewRtg })
        .then(function (data) {
          console.log(data)
        })
    }
    createReview()
  })
})
