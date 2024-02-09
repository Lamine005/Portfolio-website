import { defineConfig, isDev } from 'sanity';
import { visionTool } from '@sanity/vision';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas/';
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial';
import { testimonials } from './schemas/testimonial';
import { works } from './schemas/works';
import { brands } from './schemas/brands';
import { about } from './schemas/abouts';
import { skills } from './schemas/skills';
import { workexperience } from './schemas/workExperience';
import { contact } from './schemas/contact';
import { experiences } from './schemas/experiences'; // Import experiences schema

const devOnlyPlugins = [getStartedPlugin()];

export default defineConfig({
  name: 'default',
  title: 'Lamine portfolio',

  projectId: 'azrprord',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: [schemaTypes,experiences, brands, works, skills, contact, workexperience, about], // Spread the experiences array
  },
});
