// --------------- nav- navmenu sticky

let navbar = document.getElementById("nav");
let sticky;


window.addEventListener("load", () => {

  window.addEventListener("scroll", () => {
    sticky = navbar.offsetTop; //내 영역 위의 공간의 넓이값
    // console.log(sticky)

    window.pageYOffset >= sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
  });
});



// section05-swiper

var swiper = new Swiper(".giants_photo", {
  autoplay: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});




// --------------- section06
let scrollBody = document.querySelector(".fix_motion"); //sticky가 되는 영역 전체
let scrollHeight; //스크롤의 높이
let sectionOffsetTop;
let sectionScrollTop;
let scrollRealHeight; //실제 스크롤이 행해지는 높이
let winScrollTop; //스크롤바의 높이가 담기는 변수
let scrollPercent; //스크롤 백분율
let percent;

let isMobile;

//  모바일 인지 아니니지
function scrollFuc() {
  setProperty();
  if (isMobile) {
    contentInMoblie();
  } else {
    contentIn();
  }
}

function setProperty() {
  isMobile = window.innerWidth <= 1024 ? true : false;
  //화면이 1024보다 작으면 true아니면 false
  scrollHeight = scrollBody.offsetHeight; //fix_motion의 높이값. offsetHeight는 높이값을 끄집어냄.
  sectionOffsetTop = scrollBody.offsetTop; //문서상 fix_motion의 top의 높이값
  scrollRealHeight = scrollHeight - window.innerHeight; // window.innerHeight는 보이는 화면의 높이
  winScrollTop = pageYOffset;
  sectionScrollTop = winScrollTop - sectionOffsetTop; //sticky가 시작되는 부분
  scrollPercent = sectionScrollTop / scrollRealHeight; //스크롤을 몇 퍼센트를 내렸는지 계산
  // console.log(scrollPercent)
  percent = scrollPercent * 100;
  //  console.log(percent)   
}


function contentIn() {
  let deviceImg = document.querySelectorAll(".slide figure");
  let imgWidth = deviceImg[0].offsetWidth //deviceImg배열 0번의 넓이값=이미지 하나의 넓이값


  //여기서 텍스트 컬러 바뀌는거 지정.add("active")
  if (percent >= 273 && percent < 297) {
    document.querySelector(".text_box p.text01").classList.add("active");
    imgChange(imgWidth * 0)
  }
  if (percent >= 297 && percent < 326) {
    document.querySelector(".text_box p.text02").classList.add("active");
    imgChange(imgWidth * 1)
  }
  if (percent >= 326 && percent < 354) {
    document.querySelector(".text_box p.text03").classList.add("active");
    imgChange(imgWidth * 2)
  }
  if (percent >= 354) {
    document.querySelector(".text_box p.text04").classList.add("active");
    imgChange(imgWidth * 3)
  }
  if (percent < 270) {
    document.querySelector(".text_box p.text01").classList.remove("active");
    document.querySelector(".text_box p.text02").classList.remove("active");
    document.querySelector(".text_box p.text03").classList.remove("active");
    document.querySelector(".text_box p.text04").classList.remove("active");
  }

}

function contentInMoblie() {
  let deviceImg = document.querySelectorAll(".slide figure");
  let imgWidth = deviceImg[0].offsetWidth //deviceImg배열 0번의 넓이값=이미지 하나의 넓이값


  //여기서 텍스트 컬러 바뀌는거 지정.add("active")
  if (percent >= 273 && percent < 297) {
    document.querySelector(".text_box p.text01").classList.add("active");

    document.querySelector(".text_box p.text02").classList.remove("active");
    document.querySelector(".text_box p.text03").classList.remove("active");
    document.querySelector(".text_box p.text04").classList.remove("active");

    imgChange(imgWidth * 0)
  }
  if (percent >= 297 && percent < 326) {
    document.querySelector(".text_box p.text02").classList.add("active");

    document.querySelector(".text_box p.text01").classList.remove("active");
    document.querySelector(".text_box p.text03").classList.remove("active");
    document.querySelector(".text_box p.text04").classList.remove("active");

    imgChange(imgWidth * 1)
  }
  if (percent >= 326 && percent < 354) {
    document.querySelector(".text_box p.text03").classList.add("active");

    document.querySelector(".text_box p.text01").classList.remove("active");
    document.querySelector(".text_box p.text02").classList.remove("active");
    document.querySelector(".text_box p.text04").classList.remove("active");

    imgChange(imgWidth * 2)
  }
  if (percent >= 354) {
    document.querySelector(".text_box p.text04").classList.add("active");

    document.querySelector(".text_box p.text01").classList.remove("active");
    document.querySelector(".text_box p.text02").classList.remove("active");
    document.querySelector(".text_box p.text03").classList.remove("active");

    imgChange(imgWidth * 3)
  }
  if (percent < 270) {
    document.querySelector(".text_box p.text01").classList.remove("active");
    document.querySelector(".text_box p.text02").classList.remove("active");
    document.querySelector(".text_box p.text03").classList.remove("active");
    document.querySelector(".text_box p.text04").classList.remove("active");
  }

}

function imgChange(moveX) {
  let img = document.querySelector(".slider_wrap .slide");
  img.style.transform = `translateX(${-moveX}px)`;
}

window.addEventListener("scroll", () => {
  scrollFuc();

})

window.addEventListener("resize", () => {
  scrollFuc();

})
scrollFuc();


// --------------- section07 > cube
let rotationY = 0;
let cube = document.querySelector(".box-area");
cube.style.transform = "rotateX(0deg) rotateY(0deg)";


function rotateYAxis(n) {
  rotationY += (90 * n)
  cube.style.transform = `rotateX(0deg) rotateY(${-rotationY}deg)`
};

// section05 > move ball
let allText = document.querySelectorAll(".ballImg");
let delay = 0;

// allText.forEach((el,idx)=>{}) -> el 각각의 아이템 idx는 아이템의 index번호

allText.forEach((el, idx) => {
    el.style.animationDelay = `${delay}s`;
    el.style.zIndex = allText.length - idx;
    el.classList.add("base-ani");

    delay += .15;
})
document.getElementById("section05").addEventListener("mousemove", (e) => {
    let innerWidth = window.innerWidth; //viewport(지금 보고있는 화면)의 넯이값
    let innerheight = window.innerHeight; //viewport(지금 보고있는 화면)의 높이값

    let clientX = e.clientX;
    let clientY = e.clientY;
    // console.log(clientX,clientY)

    let percentX=clientX/innerWidth;
    //console.log(percentX)
    let maxRangeX=innerWidth*0.15;
    let minX=innerWidth/2 - maxRangeX;
    let maxX=innerWidth/2 + maxRangeX;
    let difX=  maxX - minX;
    let pxOffset = difX * percentX;

    let left=minX + pxOffset;

    let percentY=clientY/innerHeight;
    //console.log(percentX)
    let maxRangeY=innerHeight*0.15;
    let minY=innerHeight/2 - maxRangeY;
    let maxY=innerHeight/2 + maxRangeY;
    let difY=  maxY - minY;
    let pxOffsetY = difY * percentY;

    let top=minY + pxOffsetY;

    allText.forEach((el,idx)=>{
        //el.animate([],{})

        el.animate([
            {top:`${top}px`,left:`${left}px`}
        ],{
            duration:1000,fill:'forwards',delay:idx * 50
        })
    })

})

// ----------------- scrollUp
let scrollup = () => {
  let scrollup = document.getElementById("scroll-up");
  pageYOffset >= 9400 ?
    scrollup.classList.add('show-scroll') :
    scrollup.classList.remove('show-scroll');
  //   console.log(pageYOffset)
}

window.addEventListener("scroll", scrollup)

// --------------Load
let container = document.querySelector('#progress');
let progressText = document.querySelector('.progress-text');
let imgLoad = imagesLoaded('body');
let imgTotal = imgLoad.images.length;
let imgLoaded = 0;
let current = 0;
let progressTimer;
let topValue;

progressTimer = setInterval(updateProgess, 1000 / 60);




imgLoad.on('progress', function (instance, image) {
  imgLoaded++;
});


function updateProgess() {
  let target = (imgLoaded / imgTotal) * 100;
  // console.log(target)
  current += (target - current) * 0.1;
  progressText.innerHTML = Math.ceil(current) + "%"; //ceil=올림

  if (current > 99.9) {
    clearInterval(progressTimer); //setinterval멈추기
    //setInterval을 멈추기 위해선 그 함수를 반드시 변수에서 할당해야함.

    container.classList.add("progress-complete")
    topValue = 0;
    setInterval(() => {
      topValue += 20;
      container.style.top = -topValue + "%";
    }, 10)
  }


}


// ------------splitting
let section = document.querySelector("#section01, #section02, #section03, #section05")
let sliding_h4 = document.querySelector(".sliding_text h4")
let sliding_em = document.querySelector(".sliding_text em")
let sliding_p1 = document.querySelectorAll(".sliding_text .sliding_text_p01")
let sliding_p2 = document.querySelectorAll(".sliding_text .sliding_text_p02")
let sliding_p3 = document.querySelectorAll(".sliding_text .sliding_text_p03")
let weekly_h2 = document.querySelectorAll(".weekly_player_tit")
let giants_h1 = document.querySelectorAll(".giants_photo h1")
let ect_Lh2 = document.querySelectorAll(".ect_Lh2")
let ect_Rh2 = document.querySelectorAll(".ect_Rh2")
let onenter=false;

// 이런식으로 넣으면 잼 https://splitting.js.org/

const initHero = () => {
  gsap.set(sliding_h4, {
    y: '-150%',
  });

  gsap.set(sliding_em, {
    x: '100%',
  });

  gsap.set(sliding_p1, {
    x: '150%',
  });

  gsap.set(sliding_p2, {
    x: '150%',
  });

  gsap.set(sliding_p3, {
    x: '150%',
  });

  gsap.set(weekly_h2, {
    y: '-150%',
  });

  gsap.set(giants_h1, {
    y: '-90%',
  });
  gsap.set(ect_Lh2, {
    x: '-185%',
  });
  gsap.set(ect_Rh2, {
    x: '100%',
  });


  showHero();
}
const showHero = () => {
  var tl = gsap.timeline();
  tl.to(sliding_h4, {
    y: 0,
    duration: 1,
    opacity: 1,
    ease: "expo.out",
  })

  tl.to(sliding_em, {
    x: 0,
    duration: 1,
    opacity: 1,
    ease: "expo.out",
    stagger: 0.2
  }, -0.2)

  tl.to(sliding_p1, {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: "sine.inOut",
    stagger: 0.2
  })

  tl.to(sliding_p2, {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: "sine.inOut",
    stagger: 0.2
  })

  tl.to(sliding_p3, {
    x: 0,
    duration: 0.5,
    opacity: 1,
    ease: "sine.inOut",
    stagger: 0.2
  })

  tl.to(weekly_h2, {
    y: 0,
    duration: 1,
    opacity: 1,
    ease: "bounce.out",
    stagger: 0.2
  })

  tl.to(giants_h1, {
    y: 0,
    duration: 1,
    ease: "power3.in",
    stagger: 0.5
  })
  tl.to(ect_Lh2, {
    x: 0,
     duration: .5,
    ease: "power3.in",
  })
  tl.to(ect_Rh2, {
    x: 0,
     duration: .5,
    ease: "power3.in",
  })


};

window.onload = () => {

  window.addEventListener('scroll', () => {
    if (!onenter &&  pageYOffset > section.offsetTop - 50) {
      initHero();
      // console.log(section.offsetTop)
      onenter=true;
    }

  })


}