// Converts grade parameter to a G.P.A on the 4.0 scale
function unweightedConversion(grade) {

  if (grade >= 93) {
    return 4.0
  } else if (grade >= 90) {
    return 3.7
  } else if (grade >= 87) {
    return 3.3
  } else if (grade >= 83) {
    return 3.0
  } else if (grade >= 80) {
    return 2.7
  } else if (grade >= 77) {
    return 2.3
  } else if (grade >= 73) {
    return 2.0
  } else if (grade >= 70) {
    return 1.7
  } else if (grade >= 67) {
    return 1.3
  } else if (grade >= 65) {
    return 1.0
  } else {
    return 0.0
  }

}

// Converts the G.P.A on the 4.0 scale to a weighted G.P.A given the multipler for the rigor of the class
function weightedConversion(gpa, rigor) {

  if (rigor == 'Regular') {
    return gpa
  } else if (rigor == 'Honors') {
    return gpa * 1.07
  } else if (rigor == 'AP') {
    return gpa * 1.15
  }

}

// Algorithm that finds the average of a list of numbers
function average(list) {
  let sum = 0

  for (let i = 0; i < list.length; i++) {
    sum = sum + Number(list[i]);
  }

  return (sum / list.length).toFixed(2)
}

document.addEventListener('DOMContentLoaded', function() {
  const unweightedSpan = document.getElementById('unweighted-gpa')
  const weightedSpan = document.getElementById('weighted-gpa')
  const restartButton = document.getElementById('restart');
  
  const classInfoJSONString = document.querySelector('#class-info').textContent;
  
  // Parse the JSON data into a JavaScript object
  const classInfo = JSON.parse(classInfoJSONString);

  // Initialize arrays to store unweighted and weighted GPAs
  var unweightedGPAs = [];
  var weightedGPAs = [];

  // Iterate over each class in the classInfo object
  for (var i = 0; i < classInfo.length; i++) {
    var classData = classInfo[i];
    var grade = parseFloat(classData.class_grade);
    var rigor = classData.class_rigor;

    // Convert grade to unweighted GPA
    var unweightedGPA = unweightedConversion(grade);

    // Calculate weighted GPA
    var weightedGPA = weightedConversion(unweightedGPA, rigor);

    // Add calculated GPAs to arrays
    unweightedGPAs.push(unweightedGPA);
    weightedGPAs.push(weightedGPA);
  }

  // Calculate average unweighted GPA
  var averageUnweightedGPA = average(unweightedGPAs);
  console.log('Average Unweighted GPA:', averageUnweightedGPA);

  // Calculate average weighted GPA
  var averageWeightedGPA = average(weightedGPAs);
  console.log('Average Weighted GPA:', averageWeightedGPA);

  unweightedSpan.textContent = averageUnweightedGPA
  weightedSpan.textContent = averageWeightedGPA

  // Check if the restart button has been clicked
  restartButton.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default button action
    window.location.href = '/'; // Redirect user back to the home/index page
  });

});

