/* eslint-disable no-template-curly-in-string */
module.exports = {
  hooks: {
    'before:init': ['npm run typecheck', 'npm run test:ci'],
    'after:bump': ['npx auto-changelog -p', 'npm run build'],
  },
  git: {
    commitMessage: 'chore: release v${version}',
  },
  github: {
    release: true,
  },
  npm: {
    release: true,
  },
  plugins: {
    '@release-it/keep-a-changelog': {
      filename: 'CHANGELOG.md',
    },
  },
}
