import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

const Header = () => {
  const { t } = useTranslation(["common"]);
  const { data: session } = useSession();
  useEffect(() => {
    console.log(session?.user, "session");
  });
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Example comments</title>
        <meta name="description" content="Example" />
        <link rel="icon" href="/" />
      </Head>
      <div className="header">
        <header className="mb-4 border-bottom">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <Link className="navbar-brand w-auto" href="/">
                LOGO
              </Link>
              <div className="links">
                <Link href="/" className="navbar-brand w-auto">
                  Api Comments
                </Link>
                {session?.user ? (
                  <Link
                    href="/updated-comments"
                    className="navbar-brand w-auto"
                  >
                    Edited comments
                  </Link>
                ) : null}
              </div>
              <div className="d-flex align-content-center rigth-side">
                {session?.user ? (
                  <div className="-pointer" onClick={() => signOut()}>
                    {session?.user.name}
                  </div>
                ) : (
                  <Link href="/auth/login">Log in</Link>
                )}
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
