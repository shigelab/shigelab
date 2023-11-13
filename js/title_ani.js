gsap.fromTo(
    ".title", // アニメーションさせる要素
    {
        autoAlpha: 0, // アニメーション開始前は透明
    },
    {
        duration: 2,
        autoAlpha: 1, // アニメーション後に出現(透過率0)
        scrollTrigger: {
            trigger: ".title", // アニメーションが始まるトリガーとなる要素
            toggleActions: "play none none reverse", // 上スクロールで戻る
            start: "top center", // アニメーションの開始位置
            // markers: true, // マーカー表示
        },
    }
);