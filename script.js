var timeDisplayEl = $('#time-display');

function displayTime(){
    var now = moment();
    timeDisplayEl.text(now.format('MMM DD, YYYY [at] hh:mm:ss a'));
}
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
setInterval(displayTime, 1000);
