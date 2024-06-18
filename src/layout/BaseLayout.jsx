import Link from "next/link";

export default function BaseLayout({ children }) {
    return (
        <div className="min-h-screen">
            <nav>
                <Link href="/">
                    <h1>Restoran</h1>
                </Link>
            </nav>
            <div>{children}</div>
        </div>
    )
}