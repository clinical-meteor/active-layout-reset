Package.describe({
  name: 'clinical:active-layout-reset',
  version: '0.2.2',
  summary: 'CSS reset for apps using clinical:active-layout',
  git: 'https://github.com/clinical-meteor/active-layout-reset',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('clinical:active-layout@0.7.50');
  api.use('grove:less@0.1.1');

  api.imply('clinical:active-layout');

  api.addFiles('client/reset.less', 'client');
  api.addFiles('client/typography.less', 'client');
  api.addFiles('client/base.less', 'client');
  api.addFiles('client/cards.less', 'client');
  api.addFiles('client/forms.less', 'client');
  api.addFiles('client/print.less', 'client');
});
