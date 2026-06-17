export default function Register(){
    return(
        <div className="auth-page">
            <form className="auth-card">
                <h1>สมัครสามาชิก</h1>
                <input type="name" placeholder="ชื่อ-นามสกุล"/>
                <input type="Password" placeholder="รหัส"/>
                <input type="Email" placeholder="อีเมล"/>
                <a href="app/login/page.tsx">
                    <button>Register</button>
                </a>
            </form>
        </div>
    )
}