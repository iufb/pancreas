import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const sendToast = (msg) => {
    setMessage(msg);
  };
  return (
    <ToastContext.Provider value={{ message, sendToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
