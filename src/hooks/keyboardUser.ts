import { useEffect } from "react";

function handleKeyup(e: KeyboardEvent) {
  if (e.key === "Tab") {
    document.documentElement.setAttribute("keyboard-user", "true");
  }
}

export function useDetectKeyboardUser() {
  useEffect(() => {
    document.addEventListener("keyup", handleKeyup);
    return () => {
      document.removeEventListener("keyup", handleKeyup);
    };
  }, []);
}
