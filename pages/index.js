function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #3A8DFF 0%, #9C6BFF 100%)",
        padding: "20px",
        fontFamily: "'Poppins', 'Nunito', sans-serif",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Conteúdo principal */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          textAlign: "center",
          color: "white",
          overflow: "auto",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 8vw, 3.5rem)",
            fontWeight: "700",
            marginBottom: "clamp(10px, 3vh, 20px)",
            color: "#FFD43B",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            margin: "0",
          }}
        >
          ✨ Em construção
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 4vw, 1.3rem)",
            fontWeight: "500",
            maxWidth: "90%",
            lineHeight: "1.6",
            color: "white",
            marginBottom: "clamp(20px, 5vh, 40px)",
            margin: "0 0 clamp(20px, 5vh, 40px) 0",
          }}
        >
          Em breve você poderá criar / gerenciar as tarefas de seus filhos em um
          ambiente fácil e divertido...
        </p>
        <div
          style={{
            fontSize: "clamp(2rem, 10vw, 4rem)",
            marginTop: "clamp(15px, 3vh, 30px)",
          }}
        >
          🤖
        </div>
      </div>

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
