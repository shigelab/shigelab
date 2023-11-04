gsap.fromTo(".explain",
    {
        //アニメーション前の記入
        y: 20,
        autoAlpha: 0, //アニメーション開始前の状態
        markers: true,
    },
    {
        scrollTrigger: ".explain",
        start: "top top",
        end: "bottom bottom",
        duration: 3,
        autoAlpha: 1,
        
    });