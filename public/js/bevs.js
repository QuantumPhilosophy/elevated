'use strict'

$(document).ready(function () {
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
