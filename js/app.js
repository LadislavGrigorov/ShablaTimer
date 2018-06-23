// $( document ).ready(function() {
//     setInterval(function time(){
//     var d = new Date('December 17, 1995 03:24:00');
//     var hours = 24 - d.getHours();
//     var min = 60 - d.getMinutes();
//     if((min + '').length == 1){
//       min = '0' + min;
//     }
//     var sec = 60 - d.getSeconds();
//     if((sec + '').length == 1){
//           sec = '0' + sec;
//     }

//     $('#countdown #days').html(days);
//     $('#countdown #hour').html(hours);
//     $('#countdown #min').html(min);
//     $('#countdown #sec').html(sec);
//   }, 1000); });

  var end = new Date('07/27/2018 11:00 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            $('.well').innerHTML = 'Море!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        $('#countdown #days').html( days + 'д. ');
        $('#countdown #hour').html(hours + 'ч. ');
        $('#countdown #min').html(minutes + 'м. ');
        $('#countdown #sec').html(seconds + 'сек. ');
    }
    $( document ).ready(function() {
    timer = setInterval(showRemaining, 1000);
    })