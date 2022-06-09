const accordion = document.getElementsByClassName('acc-container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}


var divs = ["Dashboard", "Settings", "MyProfile", "MyDocuments", "MyCalendar", "MyFriends", "MySearches", "MyNotes", "Checklist", "Amazon", "Networking", "BehavioralQuestions", "TechnicalQuestions", "JavascriptGeneral", "Node", "CSTheory", "QuestionsforInterviewers", "Resources"];
var visibleId = null;
function show(id) {
  if(visibleId !== id) {
    visibleId = id;
  } 
  hide();
}
function hide() {
  var div, i, id;
  for(i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if(visibleId === id) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
} 