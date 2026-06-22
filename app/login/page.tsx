export default function Login(){
    return(
        <div className="auth-page">
            <form className="auth-card">
                <h1>เข้าสู่ระบบ</h1>
                <input type="Email" placeholder="อีเมล"/>
                <input type="Password" placeholder="รหัส"/>
                <a href="/">
                <button>Login</button>
                </a>
            </form>
        </div>
    )
}