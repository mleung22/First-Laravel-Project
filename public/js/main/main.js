
(function(){
  'use strict';
  $(document).ready(function(){
    if(window.location.pathname === '/' || window.location.pathname === '/main'){

      var initializeView = function(){
        clearFields();
      };

      var setLoginButtonState = function(){

        var userInput     = $('#userInput').val(),
            passwordInput = $('#passwordInput').val();

        if(userInput.length > 0 && passwordInput.length > 0){
          enableProp('loginButton');
        }
        else {
          disableProp('loginButton');
        }

      };

      var validateUser = function(){

        var data = {
          login_name: $('#userInput').val(),
          password:   $('#passwordInput').val()
        };

        resetScreen();

        ajaxCall('GET', '/main/validateUser', data).done(function(res){

          if(res.isValid)
            gotoScreen('administration');
          else
            alert(res.text);

        });

      };

      var clearFields = function(){
        $('#userInput').val('');
        $('#passwordInput').val('');
      };

      var resetScreen = function(){
        clearFields();
        disableProp('loginButton');
        $('#userInput').focus();
      };

      $('#userInput').on('keyup', function(e){
        setLoginButtonState();
      });

      $('#passwordInput').on('keyup', function(e){
        setLoginButtonState();
      });

      $('#loginButton').on('click', function(e){
        disableProp('loginButton');
        validateUser();

        if(e.keyCode === 13){
          $('#loginButton').click();
        }
      });

      $('#registerButton').on('click', function(){
        gotoScreen('addUser');
      });

      initializeView();
    }
  });
}).call(this);
