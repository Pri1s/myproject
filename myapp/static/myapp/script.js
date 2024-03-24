function callPythonFunction() {
  $.ajax({
      url: '/my_function/',
      type: 'GET',
      dataType: 'json',
      success: function(response) {
          console.log(response.result);
          // Process the response here
      },
      error: function(xhr, errmsg, err) {
          console.log(xhr.status + ": " + xhr.responseText);
      }
  });
}