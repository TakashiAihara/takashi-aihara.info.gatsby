import type { StorybookConfig } from "@storybook/react-webpack5"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },

  webpackFinal: async config => {
    if (config.module?.rules?.[0]) {
      // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
      config.module.rules[0].exclude = [/node_modules\/(?!(gatsby|gatsby-script)\/)/]

      // Remove core-js to prevent issues with Storybook
      config.module.rules[0].exclude = [/core-js/]

      if(config.module?.rules?.[0].use?.[0]){
        // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
        config.module.rules[0].use[0].options.plugins.push(
          require.resolve("babel-plugin-remove-graphql-queries")
        )
      }
    }

    if(config?.resolve?.mainFields){
      config.resolve.mainFields = ["browser", "module", "main"]
    }
    return config
  },
}
export default config
