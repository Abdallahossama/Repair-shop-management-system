import { LoginForm } from "@/components/login-form";

export default function Home() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-[image:var(--cover-image)] bg-cover bg-center relative ">
      <div
        className="absolute inset-0 pointer-events-none bg-black/50
"
      ></div>
      <div className="w-full max-w-lg z-2">
        <h1 className="text-7xl text-white text-center mb-5">Repair Shop</h1>
        <LoginForm />
      </div>
    </div>
  );
}
