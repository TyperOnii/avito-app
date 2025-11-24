import { styled } from "@mui/material/styles";
import MuiButton, { type ButtonProps as MuiButtonProps } from "@mui/material/Button";

interface CustomButtonProps extends MuiButtonProps {
  variantType?: "primary" | "secondary";
}

export const Button = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "variantType",
})<CustomButtonProps>(({ variantType }) => ({
  textTransform: "none",

  ...(variantType === "primary" && {
    backgroundColor: 'var(--c-accent)',
    fontFamily: 'var(--font-family)',
    color: "#fff",
    "&:hover": { backgroundColor: "#125ea8" },
  }),

  ...(variantType === "secondary" && {
    backgroundColor: "var(--c-white)",
    fontFamily: 'var(--font-family)',
    color: "#333",
    "&:hover": { backgroundColor: "#c7c7c7" },
  }),
}));