# Gitlab
The merge commit description must contain a specific schema to get parsed.

## Workflow
I assume that you are working with **branches** and **merge requests**. You can write your changelog
in the description of the merge request with the given DSL. Every event will trigger my webhook, and I can update the current notes for you.

## How to use
Just add this at bottom of your description and let me do the rest.

```markdown
## Changelog / ##Changelog
* $NF: Changed the speed of the Batmobil.
* $F: Changed the color of the Batmobil.
* $CB: Changed the wheels air pressure.
* $IB: Changed the wheels air pressure.
```

Everything below the `Changelog` headline gets parsed and persisted.

## Description

| Function | Description |
| -------- | ----------- |
| `* $F:`  | Functional, all stakeholders |
| `* $NF:` | Non-Functional, internal stakeholders | 
| `* $CB:` | Customer Bugs, all stakeholders |
| `* $IB`  | Internal Bugs, internal stakeholders |