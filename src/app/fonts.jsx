import localFont from "next/font/local";

export const bwGradual = localFont({
  src: [
    {
      path: "../../public/fonts/Bw Gradual DEMO/BwGradualDEMO-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Bw Gradual DEMO/BwGradualDEMO-ExtraBold.otf",
      weight: "800",
      style: "ExtraBold",
    },
  ],
  variable: "--font-bw-gradual",
});

export const sportingGrotesque = localFont({
  src: [
    {
      path: "../../public/fonts/SportingGrotesque-Regular.otf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../../public/fonts/SportingGrotesque-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-sporting-grotesque",
});
