gsap.utils.toArray(".subtitle").forEach((target) => {
    gsap.fromTo(
        target, // アニメーションさせる要素
        {
            x: -300, // アニメーション開始前の横位置(右に100px)
            autoAlpha: 0, // アニメーション開始前は透明
        },
        {
            x: 0, // アニメーション後の横位置(左に100px)
            autoAlpha: 1, // アニメーション後に出現(透過率0)
            scrollTrigger: {
                trigger: target, // アニメーションが始まるトリガーとなる要素
                toggleActions: "play none none reverse", // 上スクロールで戻る
                start: "top bottom", // アニメーションの開始位置
            },
        });
});

gsap.fromTo(
    ".header-anime",
    {
        y: -100,
        autoAlpha: 0
    },
    {
        y: 0,
        autoAlpha: 1,
        duration: 2,
    }
)

// gsap.to(
//     ".header-anime",
//     {
//         scrollTrigger: {
//             trigger: ".gray-back",
//             start: "top 80%",
//             end: "center center",
//             // markers: true,
//             scrub: true
//         },
//         css: {
//             color: "#FCFAF9"
//         }
//     },
// );

// gsap.to(
//     ".header-anime",
//     {
//         scrollTrigger: {
//             trigger: ".white-back",
//             start: "top center",
//             end: "bottom center",
//             scrub: true
//         },
//         css: {
//             color: "#333333"
//         }
//     }
// );