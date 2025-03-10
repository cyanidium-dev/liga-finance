import LocaleSwitcher from "./LocaleSwitcher";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="py-6">
      <div className="flex justify-between container max-w-[1920px]">
        <Logo />
        <LocaleSwitcher />
      </div>
    </header>
  );
}
