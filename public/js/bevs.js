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

  var reviewUser
  var reviewBev
  var reviewTxt
  var reviewRtg

  $('#review-submit').click(function (event) {
    event.preventDefault()
    reviewUser = $('#user-id').val()
    reviewBev = $('#bev-id').val()
    reviewRtg = $('input[name=group1]:checked')[0].value
    reviewTxt = $('#review-text').val()

    let createReview = function () {
      $.post('/api/bevReview', {
        user_id: reviewUser,
        bev_id: reviewBev,
        bev_review: reviewTxt,
        bev_rating: reviewRtg })
        .then(function (data) {
          console.log(data)
        })
    }
    createReview()
  })
})
