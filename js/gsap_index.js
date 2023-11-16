
gsap.fromTo("body",
    {
        background: "#FCFAF9",
    },
    {
        scrollTrigger: {
            trigger: ".explain-text",
            // markers: true,
            start: "top 75%",
            end: "bottom 20%",
            // endTrigger: ".subtitle",
            toggleActions: 'play reverse restart reverse', // リバースアニメーションを適応させています
        },
        background: "#989796",
    }
);

// gsap.fromTo(".explain-text",
//     {
//         //アニメーション前の記入
//         y: 40,
//     },
//     {
//         scrollTrigger: {
//             trigger: ".explain-text",
//             // markers: true,
//             start: "top center",
//             end: "bottom 25%",
//             toggleActions: 'play reverse restart reverse',
//         },
//         y: 0,
//     }
// );

gsap.fromTo(".explain-text h3",
    {
        autoAlpha: 0,
        x: 300,
    },
    {
        scrollTrigger: {
            trigger: ".explain-text h3",
            start: "top 65%",
            endTrigger: ".subtitle",
            end: "bottom center",
            toggleActions: 'play none none reverse',
            // markers: true,
        },
        x: 0,
        autoAlpha: 1,
    }
);

gsap.fromTo(".explain-text h5",
    {
        autoAlpha: 0,
        x: 300,
    },
    {
        scrollTrigger: {
            trigger: ".explain-text h5",
            start: "top 65%",
            endTrigger: ".subtitle",
            end: "bottom center",
            toggleActions: 'play none none reverse',
        },
        x: 0,
        autoAlpha: 1,
    }
);

gsap.fromTo(".explain-text p",
    {
        autoAlpha: 0,
        x: 300,
    },
    {
        scrollTrigger: {
            trigger: ".explain-text p",
            // markers: true,
            start: "top 65%",
            endTrigger: ".subtitle",
            end: "bottom center",
            toggleActions: 'play none none reverse',
        },
        x: 0,
        autoAlpha: 1,
    }
);

gsap.fromTo(".explain-text button",
    {
        autoAlpha: 0,
    },
    {
        scrollTrigger: {
            trigger: ".explain-text p",
            // markers: true,
            start: "top 65%",
            endTrigger: ".subtitle",
            end: "bottom center",
            toggleActions: 'play none none reverse',
        },
        autoAlpha: 1,
        delay: 0.5,
    }
);

gsap.fromTo(".background",
    {
        scale: 0.8,
        x: 0,
    },
    {
        scrollTrigger: {
            trigger: ".explain-text button",
            // markers: true,
            start: "top 80%",
            endTrigger: ".subtitle",
            end: "bottom center",
            toggleActions: 'play none none reverse',
        },
        scale: 1,
        x: -20,
    }
);

gsap.set('.list-button',
    {
        opacity: 0, // 初期不透明度（非表示）
        x: 20,
    }
);


gsap.to(
    ".header-anime",
    {
        scrollTrigger: {
            trigger: ".black-back",
            start: "center 70%",
            end: "center 70%",
            // markers: true,
            scrub: true
        },
        css: {
            backgroundColor: "#FCFAF9"
        }
    },
);


// gsap.fromTo(".link-access",
//     {
//         x: 1000,
//     },
//     {
//         scrollTrigger: {
//             trigger: ".link-box",
//             // markers: true,
//             start: "top 80%",
//             end: "bottom center",
//             toggleActions: 'play none none none',
//         },
//         x: 0,
//         duration: 1.2,
//     }
// );