"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login(){

    const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/dashboard");
      router.refresh();
    } else {
      alert("Login failed");
    }
  }


    return(
        <div className="auth-page" onSubmit={handleSubmit}>
            <form className="auth-card">
                <h1>เข้าสู่ระบบ</h1>
                <input 
                type="Email" 
                placeholder="อีเมล"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                 type="Password" 
                 placeholder="รหัส"
                 onChange={(e) => setForm({ ...form, password: e.target.value })}
                 />
                <a href="/">
                <button>Login</button>
                </a>
            </form>
        </div>
    )
}