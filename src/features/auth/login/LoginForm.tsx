import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useAuth } from "../../../contexts/AuthContext";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";

type LoginFormData = {
  email: string;
  password: string;
};

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es requerido"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es requerida"),
});

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setIsLoading(true);

    await login(data.email, data.password);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Box>
          <Typography variant="body1" fontWeight="medium" mb={1}>
            Email
          </Typography>
          <TextField
            {...register("email")}
            type="email"
            placeholder="john_doe@example.com"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail size={20} />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        <Box>
          <Typography variant="body1" fontWeight="medium" mb={1}>
            Contraseña
          </Typography>
          <TextField
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="********"
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock size={20} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
          fullWidth
          sx={{
            mt: 2,
            py: 1.5,
            bgcolor: "#9333ea",
            "&:hover": { bgcolor: "#7e22ce" },
          }}
          endIcon={!isLoading && <ArrowRight size={20} />}
        >
          {isLoading ? (
            <>
              <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
              Iniciando sesión...
            </>
          ) : (
            "Iniciar sesión"
          )}
        </Button>
      </Box>
    </form>
  );
}
