import { FontAwesome } from "@expo/vector-icons";
export function Icon({ name, size, ...props }) {
  return <FontAwesome name={name} size={size} {...props} />;
}