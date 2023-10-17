/* eslint-disable no-template-curly-in-string */
module.exports = {
  hooks: {
    'before:init': ['npm run typecheck', 'npm run test:ci'],
    'after:bump': ['npx auto-changelog -p', 'npm run build'],
    'after:git:release': 'echo After git push, before github release',
    'after:release': 'echo Successfully released ${name} v${version} to ${repo.repository}.',
  },
  git: {
    commitMessage: 'chore: release v${version}',
    changelog: 'npx auto-changelog --stdout --commit-limit false -u --template https://raw.githubusercontent.com/release-it/release-it/main/templates/changelog-compact.hbs',
  },
  github: {
    release: true,
  },
  npm: {
    release: true,
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'angular',
      infile: 'CHANGELOG.md',
    },
  },
}
