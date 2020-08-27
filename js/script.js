function save() {
  let eventType = document.getElementById("type").value;
  let eventTitle = document.getElementById("title").value;
  let eventStartDate = document.getElementById("startDate").value;
  let eventEndDate = document.getElementById("endDate").value;
  let eventPostDate = document.getElementById("postDate").value;

  if (eventType == "invalid") {
    var invalid = "Please Choose an Event Type";
    alert(invalid);
    return false;
  }

  if (eventTitle == "") {
    var invalid = "Please Choose an Event Title";
    alert(invalid);
    return false;
  }

  if (eventStartDate == "") {
    var invalid = "Please Choose an Event Start Date";
    alert(invalid);
    return false;
  }

  if (eventEndDate == "") {
    var invalid = "Please Choose an Event End Date";
    alert(invalid);
    return false;
  }

  if (eventPostDate == "") {
    var invalid = "Please Choose an Posting Date";
    alert(invalid);
    return false;
  }

  alert("A New Event has successfully created");
  return true;
}
