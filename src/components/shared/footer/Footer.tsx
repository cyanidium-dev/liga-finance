import Logo from "../logo/Logo";

export default function Footer() {
  return (
    <footer className="w-dvw bg-main pt-[50px] pb-10">
      <div className="container max-w-[1920px]">
        <Logo className="w-6 xl:w-[45px] h-auto" />
      </div>
    </footer>
  );
}
