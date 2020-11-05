# codegen-extra-imports

For https://github.com/dotansimha/graphql-code-generator/issues/2729

1. Run `yarn`
1. Run `yarn generate-types`
   1. `git diff` should be empty
1. Uncomment `GetReceipts` in `src/component/queries.graphql`
1. Run `yarn generate-types`
1. There will be a diff in `src/component/queries.generated.ts` which is expected, but there is also a diff in `src/shared/queries.generated.ts` which is unexpected, and the bug
