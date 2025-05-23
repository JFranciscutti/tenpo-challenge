import { LoginForm } from "./LoginForm";

const LoginPage = () => {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-violet-600 p-16">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white mb-4">Bienvenido</h1>
          <p className="text-white/90 text-xl">
            Inicia sesión para acceder a la plataforma y visualizar toda tu información.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-100 p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <h1 className="text-3xl font-bold mb-2">Bienvenido</h1>
            <p className="text-gray-600">Inicia sesión para acceder a la plataforma</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
