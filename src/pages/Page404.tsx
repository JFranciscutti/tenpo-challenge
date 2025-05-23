import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

export default function Page404() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <AlertCircle size={80} className="text-red-500 mb-4" />
      <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>
      <p className="text-xl text-gray-600 mb-6">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        className="mt-4"
      >
        Volver al inicio
      </Button>
    </div>
  );
}
