import React, { useEffect, useRef, useState } from "react";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";
import PrimaryBtn from "../../../component/PrimaryBtn";
import Frame from "../../../assets/AboutUsPageImgs/GetInTouch/Frame.png";

const GetInTouch = () => {
  const wrapRef = useRef(null);
  const [scrollDir, setScrollDir] = useState("down");
  const [visible, setVisible] = useState(false);
  const [bgHeight, setBgHeight] = useState(450); // initial height
  const hasScrolled = useRef(false); // track first user scroll

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      // Mark that the user has scrolled
      if (!hasScrolled.current) hasScrolled.current = true;

      const currentY = window.scrollY;
      setScrollDir(currentY > lastY ? "down" : "up");
      lastY = currentY;

      // Only animate after first scroll
      if (!hasScrolled.current || !wrapRef.current) return;

      const rect = wrapRef.current.getBoundingClientRect();

      // Responsive heights
      let minHeight = 450;
      let maxHeight = 600;
      if (window.innerWidth < 768) {
        minHeight = 350;
        maxHeight = 500;
      } else if (window.innerWidth < 1024) {
        minHeight = 400;
        maxHeight = 550;
      }

      // Animate only after first scroll
      if (rect.top < minHeight && rect.bottom > 0) {
        setVisible(true);
        const newHeight = Math.min(maxHeight, Math.max(minHeight, minHeight + (minHeight - rect.top) / 2));
        setBgHeight(newHeight);
      } else {
        setVisible(false);
        setBgHeight(minHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Content animation
  const animatedStyle = {
    transform: visible
      ? "translateY(0px)"
      : scrollDir === "down"
      ? "translateY(-40px)"
      : "translateY(40px)",
    opacity: visible ? 1 : 0,
    transition: "transform 1500ms ease-out, opacity 1500ms ease-out",
    willChange: "transform, opacity",
  };

  // Background height animation
  const bgAnimatedStyle = {
    backgroundImage: `url(${Frame})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: `${bgHeight}px`,
    transition: visible ? "height 600ms ease-out" : "height 300ms ease-in",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <section className="py-10 border relative max-h: 100%">
      <div style={bgAnimatedStyle}>
        <div
          ref={wrapRef}
          className="container text-center space-y-8 grid grid-cols-1 xl:w-1/3"
          style={animatedStyle}
        >
          <h2 className="uppercase flex gap-2 items-center justify-center font-bold text-xl">
            <img src={svg1} alt="icon" className="h-6 w-6" />
            GET IN TOUCH
            <img src={svg2} alt="icon" className="h-6 w-6" />
          </h2>

          <h1 className="text-5xl md:text-4xl font-bold text-primary font-spacegrotesk">
            Let's Build Something Great Together
          </h1>

          <p className="font-poppins">
            Let’s build something truly remarkable together. Share your ideas,
            and our team will help turn them into reality with the right strategy,
            design, and support.
          </p>

          <div className="flex justify-center">
            <PrimaryBtn className="font-semibold text-base lg:text-xl">
              Contact Us
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
