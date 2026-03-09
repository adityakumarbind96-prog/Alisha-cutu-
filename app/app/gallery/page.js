"use client";

import Link from "next/link";

export default function Gallery() {
  return (

    <div style={{textAlign:"center",padding:"40px"}}>

      <h1>📸 Our Memories</h1>

      <p>Best moments with my best friend 💖</p>

      <div style={{
        display:"flex",
        gap:"20px",
        justifyContent:"center",
        flexWrap:"wrap",
        marginTop:"30px"
      }}>

        <img src="https://picsum.photos/200" />
        <img src="https://picsum.photos/201" />
        <img src="https://picsum.photos/202" />

      </div>

      <Link href="/message">
        <button style={{
          marginTop:"30px",
          padding:"10px 20px",
          fontSize:"16px"
        }}>
          Secret Message 🔒
        </button>
      </Link>

    </div>

  );
}
