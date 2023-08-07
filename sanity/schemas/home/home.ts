import { Rule } from "sanity";
import presentationSection from "./modules/presentation";
import bannerSection from "./modules/banner";
import advertisementSection from "./modules/advertisement";

const home = {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
      presentationSection,
      bannerSection,
      advertisementSection
    ],
  };
  
  export default home;
  