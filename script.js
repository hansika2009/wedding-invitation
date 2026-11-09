const openButton=
document.getElementById("openInvitation")
;

const weddingDetails=
document.getElementById("weddingDetails")
;
openButton.addEventListener("click",
  function(){
    weddingDetails.classList.remove("hidden")
    ;
    weddingDetails.scrollIntoView({
      behavior:"smooth"
    });
  });
  const weddingDate=new date("2026-12-20T00:00:00").getTime();
  function updateCountdown(){
    const now=new Date().getTime();
    const difference=weddingDate-now;
    if(difference<=0){
      document.getElementById("days").textContent="00";
      document.getElementById("hours").textContent="00";
      document.getElementById("minutes").textContent="00";
      document.getElementById("seconds").textContent="00";
      return;
    }
    const days= Math.floor(difference/(1000*60*60*24));
    const hours=Math.floor(difference/(1000*60*60)%24);
    const minutes=Math.floor(difference/(1000*60)%60);
    const seconds=Math.floor((difference/1000)%60);
document.getElementById("days").textContent=days;
document.getElementById("hours").textContent=hours;
document.getElementById("minutes").textContent=minutes;
document.getElementById("seconds").textContent=seconds;
  }
  updateCountdown();
  setInterval(updateCountdown,1000);