document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded. Adding event listener for form submission...');
  
  var form = document.getElementById('classInfoForm');
  if (form) {
      console.log('Form found. Adding event listener for form submission...');
      
      form.addEventListener('submit', function(event) {
          event.preventDefault();  // Prevent the default form submission
          console.log('Form submitted. Preventing default form submission...');
          
          var classData = [];
          var formData = new FormData(form);
          console.log('Extracting form data...');
          
          // Process form data and construct classData array
          for (var pair of formData.entries()) {
              var fieldName = pair[0];
              var fieldValue = pair[1];
              var classNumber = fieldName.match(/\d+/)[0]; // Extract class number from field name
              console.log('Processing form field:', fieldName, fieldValue, 'for class', classNumber);
              
              if (!classData[classNumber]) {
                  classData[classNumber] = {};
              }
              
              var fieldNameWithoutNumber = fieldName.replace(/\d+/, '');
              classData[classNumber][fieldNameWithoutNumber] = fieldValue;
          }
          
          // Filter out null values from classData array
          classData = classData.filter(function(item) {
              return item !== null;
          });
          console.log('Filtered classData array:', classData);
          
          var jsonData = JSON.stringify(classData);
          console.log('Form data processed. Converted to JSON:', jsonData);
          
          window.location.href = '/calculations/?classInfo=' + jsonData;
      });
  } else {
      console.error('Element with id "classInfoForm" not found');
  }
});