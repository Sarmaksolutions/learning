import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();

  const orderId =
    searchParams.get("order_id") || "N/A";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "#111",
          border: "1px solid #d4af37",
          borderRadius: "22px",
          padding: "50px",
          textAlign: "center",
          boxShadow: "0 0 35px rgba(212,175,55,0.2)",
        }}
      >
        <img
          src="/logo.png"
          alt="SARMAK Logo"
          style={{
            width: "120px",
            marginBottom: "20px",
          }}
        />

        <h1
          style={{
            color: "#d4af37",
            fontSize: "38px",
          }}
        >
          SARMAK Learning Portal
        </h1>

        <div
          style={{
            width: "90px",
            height: "3px",
            background: "#d4af37",
            margin: "20px auto 30px",
          }}
        />

        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            border: "3px solid #d4af37",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto 25px",
            color: "#d4af37",
            fontSize: "50px",
          }}
        >
          ✓
        </div>

        <h1
          style={{
            color: "#d4af37",
            fontSize: "38px",
          }}
        >
          Payment Successful!
        </h1>

        <h2>
          Welcome to the AI & Technology Career Bootcamp
        </h2>

        <p
          style={{
            color: "#ddd",
            fontSize: "17px",
            lineHeight: "1.7",
          }}
        >
          Your registration is confirmed. 🎉
          <br />
          <br />
          Your journey toward understanding the complete
          technology ecosystem starts here.
        </p>

        <div
          style={{
            margin: "30px auto",
            padding: "20px",
            background: "#1b1b1b",
            border: "1px solid #444",
            borderRadius: "12px",
            maxWidth: "300px",
          }}
        >
          <div
            style={{
              color: "#999",
              fontSize: "13px",
              marginBottom: "8px",
            }}
          >
            AMOUNT PAID
          </div>

          <div
            style={{
              color: "#d4af37",
              fontSize: "36px",
              fontWeight: "bold",
            }}
          >
            ₹9
          </div>
        </div>

        <div
          style={{
            margin: "25px auto",
            padding: "10px 15px",
            border: "1px solid #555",
            borderRadius: "20px",
            color: "#ddd",
            fontSize: "13px",
          }}
        >
          Order ID: {orderId}
        </div>

        <div
          style={{
            marginTop: "30px",
            padding: "25px",
            border: "1px solid #d4af37",
            borderRadius: "12px",
            color: "#ddd",
            lineHeight: "1.7",
          }}
        >
          <strong
            style={{
              color: "#d4af37",
              fontSize: "18px",
            }}
          >
            AI → Cloud & DevOps → Databases
            → Operating Systems → Networking
          </strong>
        </div>

        <h2 style={{ marginTop: "30px" }}>
          What You'll Gain
        </h2>

        <div
          style={{
            textAlign: "left",
            color: "#ddd",
            lineHeight: "1.8",
          }}
        >
          <div>✓ Understand modern technology</div>
          <div>✓ Learn AI, Cloud and Data</div>
          <div>✓ Build strong technology fundamentals</div>
          <div>✓ Understand databases and networking</div>
          <div>✓ Develop practical industry knowledge</div>
        </div>

        <h3
          style={{
            color: "#d4af37",
            marginTop: "30px",
          }}
        >
          🚀 Your learning journey starts here.
        </h3>

        <a
          href="/dashboard"
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: "14px 38px",
            background: "#d4af37",
            color: "#111",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Back to Learning Portal
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;