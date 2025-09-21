//./plugins/posthog.js
import posthog from "posthog-js";

export default {
  install(app) {
    if (!posthog.init) {
      posthog.init = () => {};
    }
    if (process.env.NODE_ENV !== "development") {
      // @ts-ignore
      posthog.init("phc_gt2vrNeDEwyRlygX0LX3EK5sTEcMZK1KSYHuj28Fc48", {
        api_host: "https://eu.i.posthog.com",
        person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
        persistence: "memory", // or 'localStorage' to use localStorage
      });
      app.config.globalProperties.$posthog = posthog;
    }
  },
};
