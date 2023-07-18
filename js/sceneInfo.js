const sceneInfo=[{
    type:"sticky",//sticky기능이 있는 것과 없는 것을 구분

  heightNum:10,
  scrollHeight:0,
  objs:{
      container:document.querySelector("#scroll-section"),
       MessageA:document.querySelector("#scroll-section .main-message.a"),
      MessageB:document.querySelector("#scroll-section .main-message.b"),
      MessageC:document.querySelector("#scroll-section .main-message.c"),
      MessageD:document.querySelector("#scroll-section .main-message.d"),
      canvas:document.querySelector("#video-canvas"),
      context:document.querySelector("#video-canvas").getContext('2d'),
      videoImages:[]
  },
  values:{
      videoImageCount:166,
      imageSequence:[0,166],
      canvas_opacity:[1,0,{start:.9, end:1}],
      messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
      messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
      messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
      messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
      messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
      messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
      messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
      messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
      messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
      messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
      messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
      messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
      messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
      messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
      messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
      messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
  }
 }]