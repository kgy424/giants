(function () {
  let yOffset = 0; // 전체 스크롤 값
  let prevScrollHeight = 0; //현재 활성화된 section 이전의 높이값
  let currentScene = 0; //현재 활성화된(화면에 보이는) section
  let enterNewScene = false; //새로운section에 진입했을때 알려주는 역할

  function setCanvasImages() {
    //canvas에 이미지를 그리기위한 함수
    let imgEle;
    for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
      //imgEle=document.createElement('img');
      imgEle = new Image();
      imgEle.src = `../img/video/img_${i}.jpg`;
      sceneInfo[0].objs.videoImages.push(imgEle);
    }
    // console.log(sceneInfo[0].objs.videoImages)
   
  }

  setCanvasImages();

  function setLayout() {
    //각 영역의 높이값을 셋팅
    //for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[0].scrollHeight = sceneInfo[0].heightNum * window.innerHeight;
      sceneInfo[0].objs.container.style.height = `${sceneInfo[0].scrollHeight}px`;
    //}
    yOffset = pageYOffset;

    let totalScrollHeight = 0;

    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[0].scrollHeight;
      if (totalScrollHeight >= yOffset) {
        currentScene = 0;
        //break;
      }
    }

    document.body.setAttribute("id", `show-scene-${currentScene}`);

    //canvas  크기조절
    //   const heightRatio=window.innerHeight/1080;
    const heightRatio = window.innerHeight / 900;
    // console.log(heightRatio)
    sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%,0) scale(${heightRatio})`;
  } /* //setLayout */

  function calcValues(values, currentYOffset){
    let rv;
    let scrollHeight=sceneInfo[0].scrollHeight;
    let scrollRatio=currentYOffset/scrollHeight;
    // console.log("scrollHeight",scrollHeight)
    //console.log("scrollRatio",scrollRatio)
    //console.log(values,values.length)
    if(values.length === 3){
        //values의 요소가 3개인지 확인
        //start~end사이에 애니메이션이 실행
        //시작점 구하기
        let partScrollStart=values[2].start*scrollHeight;
        let partScrollEnd=values[2].end*scrollHeight;
        let partScrollHeight=partScrollEnd - partScrollStart;

        //console.log("partScrollStart",partScrollStart)
        //console.log("partScrollEnd",partScrollEnd)
        //console.log("partScrollHeight",partScrollHeight)
        if(currentYOffset>=partScrollStart && currentYOffset<=partScrollEnd){
            rv=(currentYOffset - partScrollStart)/partScrollHeight*(values[1]-values[0])+values[0];
        }else if(currentYOffset<partScrollStart){
            rv=values[0];
        }else if(currentYOffset>partScrollEnd){
            rv=values[1];
          
          
        }

    }else{
        rv=scrollRatio*(values[1]-values[0])+values[0]
      //  console.log("values[1]",values[1])
      //  console.log("values[0]",values[0])
      //  console.log("scrollRatio",scrollRatio)
    }
    return rv;
  }

  function playAnimation() {
    let objs = sceneInfo[0].objs;
    let values = sceneInfo[0].values;

    let currentYOffset = yOffset - prevScrollHeight;
    let scrollHeight = sceneInfo[0].scrollHeight;
    let scrollRatio = currentYOffset / scrollHeight;
     switch (0) {
     case 0:
        let sequence = Math.round(
          calcValues(values.imageSequence, currentYOffset)
        );
          
        
        // console.log("jung",sequence)
        if(sequence<166){

          objs.context.drawImage(objs.videoImages[sequence], 0, 0, 1920, 1080);
        }

        //canvas opacity
        objs.canvas.style.opacity = calcValues(
          values.canvas_opacity,
          currentYOffset
        );

        //console.log('0 play');
        if (scrollRatio <= 0.22) {
          objs.MessageA.style.opacity = calcValues(
            values.messageA_opacity_in,
            currentYOffset
          );
          objs.MessageA.style.transform = `translateY(${calcValues(
            values.messageA_translateY_in,
            currentYOffset
          )}%)`;
        } else {
          objs.MessageA.style.opacity = calcValues(
            values.messageA_opacity_out,
            currentYOffset
          );
          objs.MessageA.style.transform = `translateY(${calcValues(
            values.messageA_translateY_out,
            currentYOffset
          )}%)`;
        }

        if (scrollRatio <= 0.42) {
          // in
          objs.MessageB.style.opacity = calcValues(
            values.messageB_opacity_in,
            currentYOffset
          );
          objs.MessageB.style.transform = `translate3d(0, ${calcValues(
            values.messageB_translateY_in,
            currentYOffset
          )}%, 0)`;
        } else {
          // out
          objs.MessageB.style.opacity = calcValues(
            values.messageB_opacity_out,
            currentYOffset
          );
          objs.MessageB.style.transform = `translate3d(0, ${calcValues(
            values.messageB_translateY_out,
            currentYOffset
          )}%, 0)`;
        }

        if (scrollRatio <= 0.62) {
          // in
          objs.MessageC.style.opacity = calcValues(
            values.messageC_opacity_in,
            currentYOffset
          );
          objs.MessageC.style.transform = `translate3d(0, ${calcValues(
            values.messageC_translateY_in,
            currentYOffset
          )}%, 0)`;
        } else {
          // out
          objs.MessageC.style.opacity = calcValues(
            values.messageC_opacity_out,
            currentYOffset
          );
          objs.MessageC.style.transform = `translate3d(0, ${calcValues(
            values.messageC_translateY_out,
            currentYOffset
          )}%, 0)`;
        }

        if (scrollRatio <= 0.82) {
          // in
          objs.MessageD.style.opacity = calcValues(
            values.messageD_opacity_in,
            currentYOffset
          );
          objs.MessageD.style.transform = `translate3d(0, ${calcValues(
            values.messageD_translateY_in,
            currentYOffset
          )}%, 0)`;
        } else {
          // out
          objs.MessageD.style.opacity = calcValues(
            values.messageD_opacity_out,
            currentYOffset
          );
          objs.MessageD.style.transform = `translate3d(0, ${calcValues(
            values.messageD_translateY_out,
            currentYOffset
          )}%, 0)`;
        }
        break;
      }
  } /* //playAnimation */

  function scrollLoop() {
    enterNewScene = false;
    
    //console.log(currentScene)
    document.body.setAttribute("id", `show-scene-${currentScene}`);

    if (enterNewScene) {
      return;
    }
    //글자애니메이션을 별도 함수로 설정
    playAnimation();
  }

  window.addEventListener("scroll", () => {
    yOffset = pageYOffset;
    //console.log(yOffset);
    scrollLoop();
  });
  window.addEventListener("resize", setLayout);
  window.addEventListener("load", () => {
    setLayout();
    sceneInfo[0].objs.context.drawImage(
      sceneInfo[0].objs.videoImages[0], 0, 0,1920,1080);
  });
})();
