Package.describe({
  name: "jorgenvatle:redis-oplog-fork",
  version: "2.0.6",
  // Brief, one-line summary of the package.
  summary: "This is a fork of redis-oplog. " +
      "Credit to @matheusccastroo for the PR this is based on.",
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/cult-of-coders/redis-oplog",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md",
});

Npm.depends({
  redis: "3.1.2",
  "deep-extend": "0.6.0",
  "lodash.clonedeep": "4.5.0",
});

Package.onUse(function (api) {
  api.versionsFrom(["2.14", "2.16"]);
  api.use([
    "underscore",
    "ecmascript",
    "ejson",
    "minimongo",
    "mongo",
    "random",
    "ddp-server",
    "diff-sequence",
    "id-map",
    "mongo-id",
    "tracker",
  ]);

  api.mainModule("redis-oplog.js", "server");
  api.mainModule("redis-oplog.client.js", "client");
});

Package.onTest(function (api) {
  api.use("cultofcoders:redis-oplog");

  // extensions
  api.use("aldeed:collection2@4.0.1");
  api.use("reywood:publish-composite@1.8.9");

  api.use("ecmascript");
  api.use("tracker");
  api.use("mongo");
  api.use("random");
  api.use("accounts-password");
  api.use("matb33:collection-hooks@1.3.1");
  api.use("alanning:roles@4.0.0-alpha.1");

  api.use(["meteortesting:mocha@3.0.3-beta300.0"]);

  api.mainModule("testing/main.server.js", "server");
  api.addFiles("testing/publishComposite/boot.js", "server");
  api.addFiles("testing/optimistic-ui/boot.js", "server");

  api.mainModule("testing/main.client.js", "client");
});
