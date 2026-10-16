# Mail-And-Packages-Card

{% if prerelease %}

### This is a pre-release version

It may contain bugs or break functionality in addition to adding new features and fixes. Please review open issues and submit new issues to the [GitHub issue tracker](https://github.com/virtitnerd/Mail-And-Packages-Card/issues).

{% endif %}

{% if installed %}

## Changes as compared to the installed version:

### Breaking Changes

{% if version_installed.replace("v", "").replace(".","") | int < 0800  %}
This is a complete rewrite. Remove the current card from your dashabord and add a new card from the card picker.
{% endif %}

### Changes

{% if version_installed.replace("v", "").replace(".","") | int < 0800  %}

- [Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) provided sensors are not toggle switches intead of entity pickers
- Ability to add a custom Amazon URL
- Toggle supported [Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) sensors on and off
- Amazaon sensors and camera added

{% endif %}

---

{% endif %}

![GitHub release (latest by date)](https://img.shields.io/github/v/release/virtitnerd/Mail-And-Packages-Card)
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
![GitHub contributors](https://img.shields.io/github/contributors/virtitnerd/Mail-And-Packages-Card)
![Maintenance](https://img.shields.io/maintenance/yes/2020)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/virtitnerd/Mail-And-Packages-Card)
![GitHub last commit](https://img.shields.io/github/last-commit/virtitnerd/Mail-And-Packages-Card)

A Custom Lovelace card to display the [Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) sensors.

## Credits:

- Huge contributions from [@firstof9](https://github.com/firstof9) moving the project forward and keeping it active!

## Lovelace GUI Setup

[Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages) version 3.2 or higher is required.

Edit you dashbaord and choose 'Add card' find the Mail and Packages card from the list of avaialable cards to add it to your current Dashboard.

Use the visual card editor to turn on the entities that you have chosen to use in the mail and packages integration.

<img src="https://github.com/virtitnerd/Mail-And-Packages-Card/blob/master/img/card-image-full.png?raw=true" alt="Preview of card" />
