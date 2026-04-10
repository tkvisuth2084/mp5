import Link from "next/link";

export default function Header() {
    return (
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "60px", padding: "0 2rem", borderBottom: "1px solid #ddd", backgroundColor: "white" }}>
            <h2 style={{ color: "#ec4899", fontSize: "1.25rem", fontWeight: "600" }}>URL Shortener</h2>
            <Link href="/" style={{ color: "#ec4899", textDecoration: "none", fontSize: "0.9rem" }}>Home</Link>
        </header>
    );
}