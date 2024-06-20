import Link from "next/link";

export default function BaseLayout({ children }) {
  return (
    <div>
      <nav
        className="fixed flex justify-between p-2 text-white bg-gray-600 border backdrop-filter backdrop-blur-md bg-opacity-10"
        style={{ width: "100%", zIndex: "9999" }}
      >
        <Link href="/">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/img/logo.png"
              alt="logo"
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            <h1>Restoran Ampera</h1>
          </div>
        </Link>
        <Link href="/create">
          <div
            className="px-4 py-1 border rounded-full cursor-pointer"
            style={{ borderRadius: "9999px" }}
          >
            <h1>Tambah Menu</h1>
          </div>
        </Link>
      </nav>
      <div style={{ paddingTop: "100px" }}>{children}</div>
    </div>
  );
}
