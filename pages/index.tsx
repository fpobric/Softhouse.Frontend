import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import { getCsrfToken, getSession, useSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import Comments from "../components/comments";
import { setGoogleToken } from "../store/login";
import { getToken } from "next-auth/jwt";

const Home = () => {
  const dispatch = useDispatch<any>();
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session, "sesion");
    if (session?.user) {
      dispatch(setGoogleToken(session.user?.id_token || "")).then(
        (r: any) => {}
      ),
        (e: any) => {
          //handle error
          console.log(e, "error");
        };
    }
  }, []);

  return <Layout Component={Comments} />;
};

export default Home;

export async function getInitialProps({ query }: { query: any }) {
  const { id } = query;

  return id;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  const accessToken = await getToken({ req: context.req });
  return {
    props: {
      accessToken,
      session,
      csrfToken: await getCsrfToken(context),
      ...(await serverSideTranslations(context.locale || "fr", ["common"])),
    },
  };
}
