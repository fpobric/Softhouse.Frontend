import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Login from "../../components/account/Login";
import Layout from "../../components/Layout";

const LoginPage = () => {
  return <Layout Component={Login} />;
};

export default LoginPage;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "login",
        "common",
        "account",
        "registration",
        "verification",
      ])),
    },
  };
}
