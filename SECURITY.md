# Security policy

## Supported versions

Only the latest release of the Mail and Packages Card receives security fixes. Please update to the newest version through HACS before reporting a problem.

## Reporting a vulnerability

Please do not open a public issue for a security problem.

Report it privately with GitHub's **Report a vulnerability** button on the [Security tab](https://github.com/virtitnerd/Mail-And-Packages-Card/security/advisories/new) of this repository. This keeps the details private until a fix is available.

Please include:

- what the problem is and what an attacker could do with it
- the card version, Home Assistant version, and browser
- steps to reproduce, or a short description of how you found it

Please do not include access tokens, camera URLs, or personal mail details in a report. Redact them first.

This project is maintained by one person, so replies are on a best-effort basis. Confirmed vulnerabilities are fixed in a patch release as quickly as practical, and you will be credited in the advisory if you would like to be.

## Scope

In scope: the card code in this repository, including how it renders data and loads images in the Home Assistant dashboard.

Out of scope: the Mail and Packages integration itself, Home Assistant core, and HACS. Please report those to their owners.

## Dependencies

Dependabot security updates are enabled for the npm packages and GitHub Actions used here.
