import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

const fontNormal = fetch(
  new URL("../../assets/IndieFlower-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());
const fontBold = fetch(
  new URL("../../assets/Anton-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

// background-color: #8BC6EC;
// background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);

export default async function (req) {
  try {
    const fontData = await fontNormal;
    const fontBoldData = await fontBold;
    const { searchParams } = req.nextUrl;

    const titlePost = searchParams.get("title");
    const subtitlePost = searchParams.get("subtitle");
    // http://localhost:3000/api/og?title=titleishere
    // http://localhost:3000/api/og?title=opengraph&subtitle=Dynamic%20image%20using%20edge%20function

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundImage:
              "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
            fontSize: 60,
            letterSpacing: -2,
            fontWeight: 700,
            padding: "0px 40px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontStyle: "normal",
              color: "black",
              marginTop: 30,
              lineHeight: 1.8,
              flexDirection: "column",
              whiteSpace: "pre-wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#00acee"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                tw="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>{" "}
              <span tw="ml-1 text-blue-700 pb-2 ">www.ashish.com</span>
            </div>
            <h1 tw="flex flex-col text-3xl font-black tracking-wide text-left bg-yellow-400 text-9xl py-4 px-6 uppercase rounded-3xl">
              {titlePost}
            </h1>
            <span tw="flex flex-col text-6xl font-medium tracking-tight text-left text-white">
              {subtitlePost}
            </span>
          </div>
        
        </div>
      ),
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: "Inter",
            data: fontData,
            weight: 400,
            style: "normal",
          },
          {
            name: "Inter",
            data: fontBoldData,
            weight: 700,
            style: "normal",
          },
        ],
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the OG image. Error ${e.message}`, {
      status: 500,
    });
  }
}
