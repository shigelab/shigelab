gsap.fromTo(
    ".subtitle", // アニメーションさせる要素
    {
        x: -300, // アニメーション開始前の横位置(右に100px)
        autoAlpha: 0, // アニメーション開始前は透明
    },
    {
        x: 0, // アニメーション後の横位置(左に100px)
        autoAlpha: 1, // アニメーション後に出現(透過率0)
        scrollTrigger: {
            trigger: ".subtitle", // アニメーションが始まるトリガーとなる要素
            // toggleActions: "play none none reverse", // 上スクロールで戻る
            start: "top center", // アニメーションの開始位置
            // markers: true, // マーカー表示
        },
    }
);