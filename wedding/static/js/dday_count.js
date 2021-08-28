
// D-Day 
const d_day = new Date("2022/05/20 17:20:00").getTime();

setInterval(function() {
  const today = new Date().getTime();
  const gap = d_day - today;
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((gap % (1000 * 60)) / 1000);

  document.getElementById("main_dday_count").innerHTML = day
  document.getElementById("main_dday_count2").innerHTML = "* 예식일이 " + day + "일 " + hour + "시간 " + min + "분 " + sec + "초 남았습니다.";
}, 1000);  