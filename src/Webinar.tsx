import { useEffect } from "react";

const Webinar = () => {
  useEffect(() => {
    window.location.replace("https://sarmakpro.netlify.app/");
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#d4af37",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      Opening SARMAK Webinar...
    </div>
  );
};

export default Webinar;