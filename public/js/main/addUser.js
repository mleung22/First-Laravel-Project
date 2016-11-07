(function(){
  'use strict';
  $(document).ready(function(){
    if(window.location.pathname.indexOf('addUser') > 0){

      var HTTP_POST = 'POST';

      var initializeView = function(){
        clearInputs();
      };

      var addNewUser = function(){

        var data = {
          '_token'  : $('meta[name="csrf-token"]').attr('content'),
          firstName : $('#firstNameInput').val(),
          lastName  : $('#lastNameInput').val(),
          loginName : $('#loginIdInput').val(),
          password  : $('#passwordInput').val()
        };

        ajaxCall(HTTP_POST, '/addUser/addRow', data).done(function(res){

          if(res.isValid){
            window.history.back();
          }
          else {
            alert(res.text);
            $('#loginIdInput').focus();
          }

        });
      };

      var setAddButtonState = function(){

          var firstName = $('#firstNameInput').val(),
              lastName  = $('#lastNameInput').val(),
              loginName = $('#loginIdInput').val(),
              password  = $('#passwordInput').val();

          if(!_.isEmpty(firstName) && !_.isEmpty(lastName) && !_.isEmpty(loginName) && !_.isEmpty(password)){
            enableProp('addButton');
          }
          else {
            disableProp('addButton');
          }

      };

      var clearInputs = function(){
        $('#firstNameInput').val('');
        $('#lastNameInput').val('');
        $('#loginIdInput').val('');
        $('#passwordInput').val('');
      };

      var allowOnlyLetters = function(e){
        return ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode === 8) || (e.keyCode >= 95 && e.keyCode <= 122);
      };

      $('#addButton').on('click', function(){
        addNewUser();
      });

      $('#cancelButton').on('click', function(){
        window.history.back();
      });

      $('#firstNameInput').on('keypress', function(e){
        return allowOnlyLetters(e);
      });

      $('#lastNameInput').on('keypress', function(e){
        return allowOnlyLetters(e);
      });

      $('#loginIdInput').on('keypress', function(e){
        return e.keyCode !== 32;
      });

      $('#passwordInput').on('keypress', function(e){
        return e.keyCode !== 32;
      });

      $('#addForm').submit(function(){
        return false;
      });

      $('#firstNameInput').on('keyup', setAddButtonState);
      $('#lastNameInput').on('keyup', setAddButtonState);
      $('#loginIdInput').on('keyup', setAddButtonState);
      $('#passwordInput').on('keyup', setAddButtonState);


      initializeView();
    }
  });
}).call(this);
