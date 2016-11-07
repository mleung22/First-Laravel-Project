(function(){
  'use strict';
  $(document).ready(function(){
    if(window.location.pathname.indexOf('administration') > 0){

      var HTTP_GET = 'GET';
      var HTTP_DELETE = 'DELETE';
      var HTTP_PUT = 'PUT';
      var HTML_SPACE = '&nbsp;';
      var keys = ['id', 'firstName', 'lastName', 'loginName', 'password'];

      var initializeView = function(){
        populateTable();
      };

      var getTableBody = function(){
        return $('#usersTable').children('tbody');
      };

      var getSelectedNodes = function(){
        return $('#usersTable tr.bg-info');
      };

      var getAllPaginatedNodes = function(){
        return $('#paginationUL').children();
      };

      var enableRowEdit = function(bool){
        return getSelectedNodes().children('td').attr('contentEditable', bool);
      };

      var getSelectedRowData = function(){
        var selectedRowData = getSelectedNodes().children();
        var idx = 0,
            key,
            formattedData = {};

         _.map(selectedRowData, function(row){
           key = keys[idx++];
           formattedData[key] = row.innerHTML.replace(/\s+/g, '');
        });

        formattedData._token = $('meta[name="csrf-token"]').attr('content');

        return formattedData;
      };

      var updateUser = function(){

        var data = getSelectedRowData();

        ajaxCall(HTTP_PUT, '/administration/updateRow', data).done(function(){
          populateTable();
        });

      };

      var confirmDelete = function(){

        var data = getSelectedRowData();
        var msg = 'Are you sure you want to delete user?';
        var title = 'Confirm Delete';

        confirmationDialog(msg, title, function(yesBtnPressed){
          if(yesBtnPressed){

            ajaxCall(HTTP_DELETE, '/administration/deleteRow', data).done(function(){

              populateTable();

            });

          }
        });

      };

      var populateTable = function(){
        ajaxCall(HTTP_GET, '/administration/getTableData').done(function(tableData){

          if(_.isEmpty(tableData.data)){
            displayDataTableIsEmptyText();
          }
          else{
            displayPagination(tableData);
            displayTableData(tableData);
          }

        });
      };

      var displayNextPaginatedData = function(pageNum){
        ajaxCall(HTTP_GET, '/administration/getTableData?page=' + pageNum).done(function(pageData){
          displayTableData(pageData);
        });
      };

      var displayDataTableIsEmptyText = function(){
        var tbody = getTableBody();

        // Clears table before repopulating
        tbody.children().remove();

        tbody.append(
          '<tr class=text-center>' +
            '<td colspan=6>No Data Currently Available</td>' +
          '</tr>'
        );
      };

      var applyRowSelectHighlight = function(){

        // Checks if current selected table row is editable
        var isEditable = $(this).children('td').attr('contentEditable');
        isEditable = isEditable ? JSON.parse(isEditable) : '';

        if($(this).hasClass('bg-info') && !isEditable){
          $(this).removeClass('bg-info');
        }
        else {
          getSelectedNodes().removeClass('bg-info');
          $(this).addClass('bg-info');
        }

      };

      var handleTableButtons = function(){

        var buttonText = $(this).text();
        var trNode = $(this).parent().parent();
        $(this).parent().parent().addClass('bg-info');

        switch(buttonText){
          case 'Edit':
            $(this).text('Save');
            enableRowEdit(true);
            break;

          case 'Save':
            $(this).text('Edit');
            enableRowEdit(false);
            updateUser();
            break;

          case 'Delete':
            confirmDelete();
            break;
        }

      };

      var displayPagination = function(data){
        var idx = 1;

        $('#paginationUL').children().remove();

        if(data.last_page > 1){
          while(idx <= data.last_page){
            if(idx === 1){
              $('#paginationUL').append(
                '<li class=active><a href="#">' + idx + '</a></li>'
              );
            }
            else {
              $('#paginationUL').append(
                '<li><a href="#">' + idx + '</a></li>'
              );
            }

              idx++;
          }
        }
      };

      var displayTableData = function(data){
        var tbody = getTableBody();

        // Clears table before repopulating
        tbody.children().remove();

        // Sorts data before displaying each row to the table
        _.chain(data.data).sortBy('id').forEach(function(row){
          tbody.append(
            '<tr class=text-left>' +
              '<th>' + row.id + '</th>' +
              '<td>' + row.first_name + '</td>' +
              '<td>' + row.last_name  + '</td>' +
              '<td>' + row.login_name + '</td>' +
              '<td>' + row.password   + '</td>' +
              '<th>' +
                '<button class="btn btn-success">Edit</button>' + HTML_SPACE +
                '<button class="btn btn-danger">Delete</button>' +
              '</th>'+
            '</tr>'
          );
        });
      };

      $('#addButton').on('click', function(){
        gotoScreen('addUser');
      });

      $('#usersTable tbody').on('click', 'button', function(){
        handleTableButtons.call(this);
      });

      $('#usersTable tbody').on('click', 'tr', function(e){
        applyRowSelectHighlight.call(this);
      });

      $('#paginationUL').on('click', 'li', function(){
        getAllPaginatedNodes().removeClass('active');
        $(this).addClass('active');
        displayNextPaginatedData($(this).text());
      });

      initializeView();
    }
  });
}).call(this);
