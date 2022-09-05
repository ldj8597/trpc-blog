import Link from "next/link";

const links = [
  { text: "Home", target: "/" },
  { text: "Create", target: "/create" },
];

const Header = () => {
  return (
    <div className="py-5 flex items-center justify-between">
      {/* Logo */}
      <Link href="/">
        <a className="text-3xl font-bold">Lark</a>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-16">
        <div className="flex gap-5">
          {links.map((link, index) => (
            <Link key={index} href={link.target}>
              <a className="text-xl">{link.text}</a>
            </Link>
          ))}
        </div>
        <div className="flex gap-5">
          <button className="text-xl">Sign in</button>
          <button className="text-xl bg-indigo-500 text-white px-5 py-2 rounded-lg">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
