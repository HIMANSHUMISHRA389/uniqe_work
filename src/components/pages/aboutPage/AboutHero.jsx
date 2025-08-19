import React from "react";
import workerImage from "../../../assets/aboutHerowebP.webp"; // Left image
import bgGradient from "../../../assets/bgwebP.webp"; // Background gradient image

const AboutHero = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%", // Full width
        maxWidth: "1280px", // Responsive limit
        height: "742px",
        margin: "60px auto",
        borderRadius: "32.64px",
        overflow: "hidden",
      }}
    >
      {/* Background Gradient on Right */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "410px", // keep same offset for layout
          width: "calc(100% - 410px)",
          height: "100%",
          borderRadius: "32.64px",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <img
          src={bgGradient}
          alt="Background Gradient"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "32.64px",
          }}
          fetchpriority="high" // ✅ preload background
        />
      </div>

      {/* Left Image */}
      <div
        style={{
          position: "absolute",
          width: "620px",
          height: "576px",
          top: "82px",
          left: "0px",
          borderRadius: "32.64px",
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        <img
          src={workerImage}
          alt="Construction Worker"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "32.64px",
          }}
          fetchpriority="high" // ✅ preload worker image
        />
      </div>

      {/* Text Content */}
      <div
        style={{
          position: "absolute",
          top: "200px",
          left: "750px",
          maxWidth: "450px",
          zIndex: 3,
        }}
      >
        <h1
          style={{
            fontWeight: 600,
            fontSize: "52px",
            lineHeight: "100%",
            color: "#1D1D1D",
            marginBottom: "20px",
          }}
        >
          We Are Experts <br /> in Building Dreams
        </h1>

        <p
          style={{
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "140%",
            color: "#737373",
            marginBottom: "20px",
          }}
        >
          Construction is a general term meaning the art and science to form
          objects, systems, or organizations, and comes from Latin constructio
          and Old French construction.
        </p>

        <button
          style={{
            backgroundColor: "#C2F445",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "500",
            border: "none",
            cursor: "pointer",
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutHero;
