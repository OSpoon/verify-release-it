/* eslint-disable no-template-curly-in-string */
module.exports = {
  hooks: {
    'before:init': ['npm run typecheck', 'npm run test:ci'],
    'after:bump': ['npx auto-changelog -p', 'npm run build'],
  },
  git: {
    commitMessage: 'chore: release v${version}',
    changelog: 'npx auto-changelog --stdout --commit-limit false -u --template https://raw.githubusercontent.com/release-it/release-it/main/templates/changelog-compact.hbs',
  },
  github: {
    release: true,
    releaseNotes(context) {
      return context.changelog.split('\n').slice(1).join('\n')
    },
  },
  npm: {
    release: true,
  },
}
