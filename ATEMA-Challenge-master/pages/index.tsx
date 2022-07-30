import Head from "next/head";
import MainPage from "./main";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="CAPA파트너스" />
        <meta
          property="og:image"
          content="https://ssomee.shop/images/ssomee_main_img.png"
        />

        {/* <meta property="og:url" content="https://" />
        <meta
          property="og:description"
          content="파트너님에게 딱 맞는 요청"
        /> */}
      </Head>
      <MainPage />
    </>
  );
}
