function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "98vh",
        background: "linear-gradient(135deg, #979898ff 0%, #353536ff 100%)",
        padding: "20px",
        fontFamily: "'Poppins', 'Nunito', sans-serif",
        boxSizing: "border-box",
        overflow: "hidden",
        textAlign: "left",
      }}
    >
      {/* Conteúdo principal */}

      <h1
        style={{
          fontWeight: "700",
          marginBottom: "clamp(10px, 3vh, 20px)",
          color: "#FFD43B",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          margin: "0",
        }}
      >
        👷 em construção
      </h1>

      {/* Rodapé */}
      <footer
        style={{
          textAlign: "center",
          color: "rgba(255, 255, 255, 0.8)",
          fontSize: "clamp(0.75rem, 2vw, 0.95rem)",
          paddingTop: "clamp(10px, 2vh, 20px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          width: "100%",
          margin: "0",
          flexShrink: 0,
        }}
      >
        <p style={{ margin: "0" }}>
          Feito por{" "}
          <a
            href="https://github.com/renatoaranda"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#FFD43B",
              textDecoration: "none",
              fontWeight: "600",
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            Renato Aranda
          </a>
        </p>
      </footer>
    </div>
  );
}

function teste() {
  console.log("oi");
}

function teste2() {
  console.log("oi2");
}

export default Home;
