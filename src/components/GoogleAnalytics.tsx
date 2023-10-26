"use client";

import Head from "next/head";
import { GA_MEASUREMENT_ID, existsGaId } from "@/lib/gtag";

const GoogleAnalytics = () => {
  return (
    <Head>
      {/* Google Analytics */}
      {existsGaId && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });`,
            }}
          />
        </>
      )}
    </Head>
  );
};

export default GoogleAnalytics;
