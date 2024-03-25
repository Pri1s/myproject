document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('classCountForm');
  form.addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent the default form submission

      // Get the value entered by the user
      var classCount = document.getElementById('classCount').value;

      // Perform any necessary actions here
      // For demonstration purposes, let's log the value entered by the user
      console.log('Number of classes entered:', classCount);
      
      // Redirect to class_info.html
      window.location.href = '/class_info/?classCount=' + classCount;
  });
});