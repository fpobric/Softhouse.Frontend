import Image from "next/image";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation(["common"]);

  return (
    <footer className="mt-auto py-3">
      <p className="text-center text-muted">
        <Image
          alt="logo"
          className="picto"
          src="/images/_blank.svg"
          width={28}
          height={28}
        ></Image>
      </p>
      <p className="text-center text-muted">
        {t("copyright")}
        <br />
        {t("all-rights-reserved")}
      </p>
    </footer>
  );
};

export default Footer;
