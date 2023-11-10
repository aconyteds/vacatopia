import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    "./src/graphql/base-schema.graphqls",
    "./src/modules/**/*.graphqls"
  ],
  generates: {
    './src/modules/': {
        config: {
            contextType: "../graphql/graphql#Context",
        },
        preset: 'graphql-modules',
        presetConfig: {
            baseTypesPath: "../types/generated.ts",
            filename: "generated-types.ts",
        },
      plugins: [
        'typescript',
        'typescript-resolvers',
      ],
    }
  },
};

export default config;
