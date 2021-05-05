/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Tutorial Intro'
    },
    {
      type: 'category',
      label: 'Tutorial-Basics',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorial-basics'
        }
      ]
    },
    {
      type: 'category',
      label: 'Tutorial-Extras',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorial-extras'
        }
      ]
    }
  ],
  
  bigdataSidebar: [
    {
      type: 'autogenerated',
      dirName: 'bigdata'
    }
  ]
};
