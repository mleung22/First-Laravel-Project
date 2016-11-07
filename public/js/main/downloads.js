(function(){
  'use strict';
  $(document).ready(function(){
    if(window.location.pathname.indexOf('downloads') > 0){

      var HTTP_GET = 'GET';
      var currentExportedData;
      var currentFileName;

      var initializeView = function(){

        if(_.isEmpty(sessionStorage)){
          displayDataTableIsEmptyText();
        }
        else {
          displayTableData();
        }

      };

      var getTableBody = function(){
        return $('#downloadsTable').children('tbody');
      };

      var displayDataTableIsEmptyText = function(){
        var tbody = getTableBody();

        // Clears table before repopulating
        tbody.children().remove();

        tbody.append(
          '<tr class=text-center>' +
            '<td colspan=3>No Data Currently Available</td>' +
          '</tr>'
        );
      };

      var displayTableData = function(data){
        var tbody = getTableBody();

        // Clears table before repopulating
        tbody.children().remove();

        $.each(sessionStorage, function(key, val){
          val = JSON.parse(val);
          tbody.append(
            '<tr class=text-left>' +
              '<td><a href="javascript:void(0)">' + val[1]  + '</a></td>' +
              '<td>' + val[3]  + '</td>' +
              '<td>' + val[2]  + '</td>' +
            '</tr>'
          );

        });


      };

      var downloadCSV = function(){
        var data,
            link,
            filename = $(this).text();

        data = JSON.parse(sessionStorage.getItem(filename));

        link = document.createElement('a');
        link.setAttribute('href', encodeURI(data[0]));
        link.setAttribute('download', filename);
        link.click();

      };

      var exportData = function(){
        ajaxCall(HTTP_GET, '/downloads/exportUserTable').done(function(res){

          var currentData = {};
          currentExportedData = 'data:text/csv;charset=utf-8,' + res.exportData;
          currentFileName = res.fileName;

          currentData = [
            currentExportedData,
            currentFileName,
            res.fileSize,
            res.dateTime
          ];

          sessionStorage.setItem(currentFileName, JSON.stringify(currentData));
          displayTableData(res);

        });
      };

      $('#exportButton').on('click', function(){
        exportData();
      });

      $('#downloadsTable tbody').on('click', 'td',function(){

        var hasAnchor = $(this).children('a').length > 0;

        if(hasAnchor){
          downloadCSV.call(this);
        }

      });

      initializeView();
    }
  });
}).call(this);
