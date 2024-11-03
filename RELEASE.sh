#!/usr/bin/env bash

# Instructions
# First run `npm version` to bump the version in package.json
# Then run this script, it will use the package.json version
# as a base for the package.js version.


publish() {
  for METEOR_RELEASE in "3.0" "2.16"; do
    export METEOR_RELEASE
    echo "Publishing package using Meteor v$METEOR_RELEASE"
    meteor publish --release $METEOR_RELEASE || exit 1
  done;
}

PACKAGE_JSON=$(cat ./package.json)
export PACKAGE_JSON

publish