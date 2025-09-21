import { defineClientConfig } from "vuepress/client";
import HomeContent from "./components/HomeContent.vue";
import TopicsList from "./components/TopicsList.vue";
import "./styles/index.scss";
import analytics from "./analytics.js";

export default defineClientConfig({
  layouts: {
    // HomePageLayout,
  },
  enhance({ app }) {
    app.component("HomeContent", HomeContent);
    app.component("TopicsList", TopicsList);
    app.use(analytics);
  },
});
