
gsap.timeline({
    scrollTrigger: {
        trigger: ".first-text",
        toggleActions: "play none none reverse",
        start: "top center",
        end: "bottom center"
    },
}).fromTo(".first-text h5", {
    autoAlpha: 0,
},
    {
        duration: 1.2,
        autoAlpha: 1,
    }).fromTo(".first1", {
        autoAlpha: 0,
    },
        {
            duration: .8,
            autoAlpha: 1,

        }).fromTo(".first2", {
            autoAlpha: 0,
        },
            {
                duration: .8,
                autoAlpha: 1,

            }).fromTo(".first3", {
                autoAlpha: 0,
            },
                {
                    duration: .8,
                    autoAlpha: 1,

                }).fromTo(".brain-human", {
                    autoAlpha: 0,
                    scale: 1.1,
                },
                    {
                        duration: .8,
                        autoAlpha: .15,
                        scale: 1,
                    }).fromTo(".vr-glasses", {
                        autoAlpha: 0,
                        scale: 1.1,
                    },
                        {
                            duration: .8,
                            autoAlpha: .15,
                            scale: 1,
                        });

gsap.utils.toArray(".ani").forEach((target) => {
    gsap.fromTo(
        target, // アニメーションさせる要素
        {
            autoAlpha: 0, // アニメーション開始前は透明
        },
        {
            duration: 1.2,
            autoAlpha: 1, // アニメーション後に出現(透過率0)
            scrollTrigger: {
                trigger: target, // アニメーションが始まるトリガーとなる要素
                toggleActions: "play none none none", // 上スクロールで戻る
                start: "top center", // アニメーションの開始位置
                // markers: true, // マーカー表示
            },
        });
});
