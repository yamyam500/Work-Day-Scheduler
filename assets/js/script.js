$(document).ready(function () {
  // Initialize the calendar with empty events
  var calendarData = Array(8).fill("");

  // Render the calendar
  renderCalendar();

  // Save event when the save button is clicked
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val();

    renderCalendar();
    console.log(hour, eventText);
  });
  const saveBtn = document.querySelector(".saveBtn");
  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("savebtncllick");
  });

  // Render the calendar based on the calendarData array
  function renderCalendar() {
    var calendarHtml = "";

    for (var hour = 0; hour < calendarData.length; hour++) {
      calendarHtml += '<div class="hour">' + formatHour(hour) + "</div>";
      calendarHtml +=
        '<div class="event"><input type="text" id="event-' +
        hour +
        '" value="' +
        calendarData[hour] +
        '">';
      calendarHtml +=
        '<button class="save-btn" data-hour="' + hour + '">Save</button></div>';
    }

    $("#calendar").html(calendarHtml);
  }

  // Format the hour to display in 12-hour format
  function formatHour(hour) {
    var displayHour = (hour + 9) % 12;
    if (displayHour === 0) {
      displayHour = 12;
    }
    var amPm = hour + 9 < 12 ? "AM" : "PM";
    return displayHour + " " + amPm;
  }
});
