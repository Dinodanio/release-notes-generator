# Release Notes Generator (RNG)
[![RNG](https://github.com/Dinodanio/release-notes-generator/actions/workflows/test.yml/badge.svg)](https://github.com/Dinodanio/release-notes-generator/actions/workflows/test.yml)
![](../assets/codecov.svg)
## What am I?
I am a web server who provides some webhooks to generate your release notes in different formats.
I also provide them for you in several formats like `JSON` or `html`.

## How does it work?
I provide some webhooks for different issue tracking systems like **Jira** and code version control system like **Gitlab**.
After one of these webhooks are triggered I parse the incoming message and persist it.

That's not all. I also give a well formatted data set back to you. You can request a `JSON`
to do what ever you want, or you get some `html` to provide it your customer.

All you need to do is to use the specific syntax in you issue, description or w/e.
