import { useTranslation } from "react-i18next";

export function useGlobalTranslation() {
  const { t } = useTranslation();
  return { t };
}
