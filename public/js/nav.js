(function(){
  'use strict';
  $(document).ready(function(){


      var initializeView = function(){
        setNavButtonDisplay();
      };

      var setNavButtonDisplay = function(){
        if((document.referrer.indexOf('main') > 0 || window.location.pathname === '/main') && window.location.pathname !== '/administration'){
          $('#navButtons').hide();
        }
        else {
          $('#navButtons').removeAttr('hidden');
        }
      };

      $('#navManageButton').on('click', function(){
        gotoScreen('administration');
      });

      $('#navDLButton').on('click', function(){
        gotoScreen('downloads');
      });

      $('#navLogoutButton').on('click', function(){
        sessionStorage.clear();
        gotoScreen('main');
      });


      initializeView();
  });
}).call(this);
