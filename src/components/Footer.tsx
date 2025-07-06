import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center p-10 bg-[#7C909A] text-black">
      <nav className="mb-4">
        <div className="flex justify-center gap-4">
          <SocialIcons />
        </div>
      </nav>
      <aside>
        <p className="text-xs">Built and Designed by Steven Le</p>
      </aside>
    </footer>
  )
}
