"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      background:"linear-gradient(135deg,#ff9a9e,#fad0c4)",
      fontFamily:"sans-serif",
      textAlign:"center"
    }}>

      <h1>💖 Welcome Best Friend 💖</h1>

      <p>You are very special in my life ✨</p>

      <Link href="/gallery">
        <button style={{
          padding:"12px 25px",
          marginTop:"20px",
          fontSize:"18px",
          borderRadius:"10px",
          border:"none",
          background:"#ff4b5c",
          color:"white"
        }}>
          Open Surprise 🎁
        </button>
      </Link>

    </div>
  );
}
