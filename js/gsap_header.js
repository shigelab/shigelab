gsap.to(
    ".header-anime",
    {
        scrollTrigger: {
            trigger: ".black-back",
            start: "center 60%",
            end: "center 60%",
            // markers: true,
            scrub: true
        },
        css: {
            color: "#FCFAF9"
        }
    },
);

gsap.to(
    ".mline",
    {
        scrollTrigger: {
            trigger: ".black-back",
            start: "center 60%",
            end: "center 60%",
            // markers: true,
            scrub: true
        },
        css: {
            backgroundColor: "#FCFAF9"
        }
    },
);