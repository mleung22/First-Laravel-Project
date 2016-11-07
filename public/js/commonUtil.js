
var gotoScreen = function(screenId){
  setTimeout(function(){
    window.location.href = ('/' + screenId);
  }, 0);
};

var ajaxCall = function(httpMethod, url, data){
  return $.ajax({
    method: httpMethod,
    url: url,
    data: data,
  });
};

var enableProp = function(elementId){
  return $('#' + elementId).prop('disabled', false);
};

var disableProp = function(elementId){
  return $('#' + elementId).prop('disabled', true);
};

window.confirmationDialog = function(message, title, callback){

  $('body').append(
    '<div class="modal" id="confirmation_modal" data-backdrop="static" data-keyboard="false">' +
      '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
          '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close" id="xButton">' +
              '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '<h4 class="modal-title" id="title"></h4>' +
          '</div>' +
          '<div class="modal-body">' +
            '<p id="message"></p>' +
          '</div>' +
          '<div class="modal-footer">' +
            '<button type="button" class="btn btn-primary" id="yesButton">Yes</button>' +
            '<button type="button" class="btn btn-danger" id="noButton">No</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>'
  );

  $('#confirmation_modal #message').text(message);
  $('#confirmation_modal #title').text(title);
  $('#confirmation_modal').modal().show();
  $('.modal-backdrop').show();

  $('#xButton').on('click', function(e){
    e.stopImmediatePropagation();
    $('#confirmation_modal').remove();
    $('.modal-backdrop').remove();
    callback(false);
  });

  $('#yesButton').on('click', function(e){
    e.stopImmediatePropagation();
    $('#confirmation_modal').remove();
    $('.modal-backdrop').remove();
    callback(true);
  });

  $('#noButton').on('click', function(e){
    e.stopImmediatePropagation();
    $('#confirmation_modal').remove();
    $('.modal-backdrop').remove();
    callback(false);
  });

};
