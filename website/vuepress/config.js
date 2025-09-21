import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { createPage } from "vuepress";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import mdVideo from "markdown-it-video";
import { sitemapPlugin } from "@vuepress/plugin-sitemap";

import fs from "fs";
import * as path from "path";

const PAGES_DIR = path.join(__dirname + "../../pages/");
const COURSES_CONTENT_DIR = path.join(__dirname + "../../../content/courses/");
const NEWSLETTER_CONTENT_DIR = path.join(
  __dirname + "../../../content/topics/",
);

const COURSES_DIRECTORIES = fs
  .readdirSync(COURSES_CONTENT_DIR)
  .filter((directory) =>
    fs.existsSync(COURSES_CONTENT_DIR + directory + "/README.md"),
  );

const COURSES_HOME_PAGES = COURSES_DIRECTORIES.map(
  (directory) => "/courses/" + directory + "/README.md",
);

const NEWSLETTERS_FILES = fs
  .readdirSync(NEWSLETTER_CONTENT_DIR)
  .filter((directory) =>
    fs.existsSync(NEWSLETTER_CONTENT_DIR + directory + "/README.md"),
  )
  .map((directory) => ({
    directory,
    path: NEWSLETTER_CONTENT_DIR + directory + "/README.md",
  }));

const newslettersStore = {
  store: {},
};
export default defineUserConfig({
  lang: "en-US",
  title: "Just Enough Dev",
  description: " ",
  theme: defaultTheme({
    logo: "/images/note.svg",
    sidebarDepth: 2,
    sidebar: {
      "/courses": COURSES_HOME_PAGES,
    },
    navbar: [
      "/courses/README.md",
      "/topics/README.md",
      "/books-summaries/README.md",
      { text: "YouTube Channel", link: "https://youtube.com/abduvik" },
    ],
    contributors: false,
  }),
  head: [["link", { rel: "icon", href: "/images/note.svg" }]],
  bundler: viteBundler({
    viteOptions: {
      css: {
        postcss: {
          plugins: [autoprefixer(), tailwindcss("./tailwind.config.js")],
        },
      },
    },
  }),
  // all pages have been loaded after initialization
  async onInitialized(app) {
    const homepage = await createPage(app, {
      path: "/",
      frontmatter: {
        layout: "Layout",
      },
      content: fs.readFileSync(PAGES_DIR + "Home.md"),
    });

    app.pages.push(homepage);

    // Canonical links
    // const mysite = "https://abdu.dev/";
    // const sections = /topics|books-summaries|courses/;

    // app.pages.forEach((page) => {
    //   if (!sections.test(page.path)) {
    //     console.log(page.path);
    //     return;
    //   }
    //   page.data.frontmatter.head = [
    //     [
    //       "link",
    //       {
    //         rel: "canonical",
    //         href: mysite + "resources" + page.path,
    //       },
    //     ],
    //   ];
    // });
  },
  async onPrepared(app) {
    const topics = app.pages
      .filter(
        (page) =>
          page.filePathRelative?.startsWith("topics/") &&
          page.filePathRelative !== "topics/_index.md" &&
          page.filePathRelative?.includes("README.md"),
      )
      .sort((a, b) => {
        // sort by title
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });

    await app.writeTemp(
      "stores/topics",
      `export const topics = ${JSON.stringify(topics)}`,
    );
  },
  pagePatterns: [
    "courses/**/*.md",
    "books-summaries/**/*.md",
    "pages/**/*.md",
    "topics/**/*.md",
    "!.vuepress",
    "!node_modules",
    "!**/node_modules/**",
    "!**/**/node_modules/**",
    "!**/dist/**",
    "!**/test-field/**",
    "!courses/_index.md",
    "!books-summaries/_index.md",
    "!topics/_index.md",
  ],
  dest: "dist",
  cache: "vuepress/.cache",
  temp: "vuepress/.temp",
  public: "vuepress/public",
  source: "../content",
  clientConfigFile: path.resolve(__dirname, "./client.js"),
  extendsMarkdown(md) {
    md.use(mdVideo, {
      // youtube: { width: "100%", height: "auto" },
    });
  },

  //@todo: change to overrides method
  alias: {
    "@theme/HomeFooter.vue": path.resolve(
      __dirname,
      "./components/HomeFooter.vue",
    ),
    "@theme/Navbar.vue": path.resolve(__dirname, "./components/Navbar.vue"),
  },
  plugins: [sitemapPlugin({ hostname: "https://justenough.dev" })],
});
