---
title: Git Version Control
---

# Git Version Control

## YouTube Video

[![Just Enough git tutorial youtube thumbnail](http://img.youtube.com/vi/EewCwhugJto/0.jpg)](http://www.youtube.com/watch?v=EewCwhugJto "Git for Professionals from 3 Tech Companies: (CLI+Github+Branching) | Just Enough Series")

## Commands

- `git init`: Initialize the repository
- `git status`: Check the current directory changes and staging area
- `git add <directory>`: Add current files to staging
- `git commit -m "<commit-message>"`: Commit staging with a message
- `git commit -am "<commit-message>"`: Add & Commit staging with a message (only for edited and deleted)
- `git log --oneline`: Print the log as one line
- `git log --oneline --decorate --all --graph`: Print the log as one line and in graph-mode
- `git reflog`: Show the log of changing the HEAD. It's useful to find missing commits.
- `git branch <branch-name>`: Create a new branch
- `git checkout <branch-name>`: Checkout to a branch
- `git checkout -b <branch-name>`: Create and checkout to a branch
- `git diff <commit-hash-source> <commit-hash-destination>`: Show the difference between two commits
- `git merge <branch-name>`: Merge a branch into the current branch
- `git merge --squash <branch-name>`: Merge a branch into the current branch as a single commit
- `git branch -D <branch-name>`: Delete a branch
- `git rebase <branch-name>`: Rebase the current branch on another branch
- `git rebase <branch-name> -i`: Rebase the current branch on another branch (with interactive mode)
- `git cherry-pick <commit>`: Apply changes for a certain commit to the current branch
- `git reset --hard <commit-hash>`: Move the branch Head to a certain commit
- `git mv <source> <destination>`: Move a file/directory from one place to another while tracking
- `git remote add <remote-name> <repository-name>`: Add a remote tracking branch. `<remote-name>` is usually `origin`.
- `git push --set-upstream <remote-name> <branch-name> <repository-name>`: Set a remote for a branch
- `git push -u <remote-name> <branch-name> <repository-name>`: Set a remote for a branch (Same to the above one)
- `git push`: Push local commits
- `git push --force`: Override git history. Usually used when rebasing.
- `git push --force-with-lease`: Safer than force. It checks if the history was overriden, otherwise it will push.
- `git fetch`: Fetch commits from remote
- `git pull`: Fetch commits and merge
- `git fetch --prune`: Remove branches that no longer exists on remote before fetching
- `git remote prune origin`: Remove branches from local repository that no longer in remote
- `git restore -s <branch_name> -- <file_path>`: Restore a file to its original form from a specific branch

## Collaboration

### Pull Request

We need merge to master locally but rather we push the branch and create a Pull Request/Merge Request.

Other developers will review your changes and add comments.

When all is resolved and approved, you can merge your changes.

### Merge Conflicts

Merge conflicts happen when git can't merge two branches. It's always 99% to happen if a file is changed on the same
line in two different branches, that's when git can't decide how to merge.

To resolve it, it has to be done manually and you will need to check the git log to find the developer responsible for
the conflict and align with them.

### Branching Strategies

#### Single Branch

Create a single main branch and push all your commits there.

Good for personal projects.

#### Feature Branching

We have a single branch and each time there is a feature/bug, we create a new branch, do the changes and then merge back
to main branch.

#### Git Flow

We have two branches develop and main.

When creating a feature/bugfix, we create a feature branch from develop. Changes are merged back to develop.

When creating a hotfix, we create a feature branch from main. Changes are tagged with a version and only merged back to
develop (if needed).

We can only merge develop into master and we need to tag the commit with a release version.

[Gitflow Workflow from Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

### Sub-modules

Submodules helps with combining multiple repos into a single repo and apply commands on it.

- `git submodule add <http_repo_link> <local_path>`: Add a git submodule to current repo
- `git submodule add -b main <http_repo_link> <local_path>`: Add a git submodule to current repo and track a certain
  branch

To remove a submodule:

```sh
git rm -rf <submodule_path>
rm -rf .git/modules/<submodule_path>
```

### Conventional Commits

It's a [specification](https://www.conventionalcommits.org/en/v1.0.0/) with conventions to write commit messages. They
are helpful for communicating with other developers the nature of the change.

Main format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Type can be:

- `feat`: new feature
- `fix`: bug fix
- `chore`: maintenance changes
- `docs`: documentation changes
- `style`: formatting changes like linting
- `refactor`: refactoring changes
- `test`: Adding or changing tests
- `ci`: Changes to CI configuration files and scripts
- `revert`: Revert a previous commit
- `perf`: Performance improvements
- `build`: Changes that affect the build system or external dependencies

Footer can be:

- `BREAKING CHANGE`: used to describe a breaking change, often followed by a description of the change.
- `Fixes` / `Closes` / `Refs`: used to reference an issue number (e.g., `Fixes: #123`).
- `Co-authored-by` / `Reviewed-by` / `Signed-off-by` / `See-also`: used to give credit to authors.
- : used to reference other related commits or documentation.

Examples:

- Simple feature:

```text
feat: add password strength meter to registration form
```

- Bug fix with issue reference:

```text
fix(api): handle null response when fetching user profile

Fixes: #45
```

- Breaking change:

```text
feat(auth)!: switch from JWT to OAuth2 tokens

This change migrates our internal auth system to OAuth2.
Existing JWT tokens will no longer be accepted.

BREAKING CHANGE: JWT tokens are no longer supported for authentication.
```

- Refactor with multiple authors:

```text
refactor: simplify data mapping logic

Co-authored-by: Alice <alice@example.com>
Reviewed-by: Bob <bob@example.com>
```

You can also use emojis to make it nicer by using the [gitmoji](https://gitmoji.dev/) convention.

Here is a script you can add to `.git/hooks/commit-msg` to automate adding these emojis if the message starts with a
keyword:

Remember to run `chmod +x .git/hooks/commit-msg` to make it executable.

```shell
#!/bin/sh

# .git/hooks/commit-msg
# Automatically prepends emojis to conventional commit messages.

COMMIT_MSG_FILE=$1

# Read the first line of the commit message
FIRST_LINE=$(head -n 1 "$COMMIT_MSG_FILE")

# Function to return emoji based on commit type
get_emoji() {
    case "$1" in
        # Core Types
        feat)             echo "✨" ;; # :sparkles: New features
        fix)              echo "🐛" ;; # :bug: Bug fixes
        docs)             echo "📝" ;; # :memo: Documentation
        style)            echo "💄" ;; # :lipstick: UI/Style files
        refactor)         echo "♻️" ;; # :recycle: Refactoring
        perf)             echo "⚡️" ;; # :zap: Performance
        test)             echo "✅" ;; # :white_check_mark: Tests

        # Build & CI
        build)            echo "👷" ;; # :construction_worker: Build system/CI
        ci)               echo "🔧" ;; # :wrench: CI config (often used interchangeably with build)

        # Chores & Maintenance
        chore)            echo "🔨" ;; # :hammer: General chores/scripts
        deps)             echo "➕" ;; # :heavy_plus_sign: Add dependency (custom type)
        dep-remove)       echo "➖" ;; # :heavy_minus_sign: Remove dependency (custom type)
        dep-upgrade)      echo "⬆️" ;; # :arrow_up: Upgrade deps (custom type)
        dep-downgrade)    echo "⬇️" ;; # :arrow_down: Downgrade deps (custom type)
        dep-pin)          echo "📌" ;; # :pushpin: Pin deps (custom type)

        # Specific Actions/Contexts
        hotfix)           echo "🚑️" ;; # :ambulance: Critical hotfix
        release)          echo "🔖" ;; # :bookmark: Release/Version tag
        deploy)           echo "🚀" ;; # :rocket: Deployment
        init)             echo "🎉" ;; # :tada: Initial commit
        revert)           echo "⏪️" ;; # :rewind: Revert changes
        merge)            echo "🔀" ;; # :twisted_rightwards_arrows: Merge branches
        remove)           echo "🔥" ;; # :fire: Remove code/files
        deprecate)        echo "🗑️" ;; # :wastebasket: Deprecate code
        dead-code)        echo "⚰️" ;; # :coffin: Remove dead code
        typo)             echo "✏️" ;; # :pencil2: Fix typos
        lint)             echo "🚨" ;; # :rotating_light: Linter warnings
        security)         echo "🔒️" ;; # :lock: Security issues
        secrets)          echo "🔐" ;; # :closed_lock_with_key: Secrets
        wip)              echo "🚧" ;; # :construction: Work in progress
        i18n)             echo "🌐" ;; # :globe_with_meridians: Internationalization
        accessibility)    echo "♿️" ;; # :wheelchair: Accessibility
        analytics)        echo "📈" ;; # :chart_with_upwards_trend: Analytics
        assets)           echo "🍱" ;; # :bento: Assets
        comments)         echo "💡" ;; # :bulb: Comments
        license)          echo "📄" ;; # :page_facing_up: License
        breaking)         echo "💥" ;; # :boom: Breaking changes
        db)               echo "🗃️" ;; # :card_file_box: Database changes
        logs-add)         echo "🔊" ;; # :loud_sound: Add logs
        logs-remove)      echo "🔇" ;; # :mute: Remove logs
        contributors)     echo "👥" ;; # :busts_in_silhouette: Contributors
        ux)               echo "🚸" ;; # :children_crossing: UX improvements
        architecture)     echo "🏗️" ;; # :building_construction: Architecture
        responsive)       echo "📱" ;; # :iphone: Responsive design
        mock)             echo "🤡" ;; # :clown_face: Mocks
        easter-egg)       echo "🥚" ;; # :egg: Easter egg
        gitignore)        echo "🙈" ;; # :see_no_evil: .gitignore
        snapshot)         echo "📸" ;; # :camera_flash: Snapshots
        experiment)       echo "⚗️" ;; # :alembic: Experiments
        seo)              echo "🔍️" ;; # :mag: SEO
        types)            echo "🏷️" ;; # :label: Types (TypeScript/Flow)
        seed)             echo "🌱" ;; # :seedling: Seed files
        feature-flag)     echo "🚩" ;; # :triangular_flag_on_post: Feature flags
        error-handling)   echo "🥅" ;; # :goal_net: Error handling
        animation)        echo "💫" ;; # :dizzy: Animations
        auth)             echo "🛂" ;; # :passport_control: Auth/Roles
        simple-fix)       echo "🩹" ;; # :adhesive_bandage: Simple non-critical fix
        data-inspection)  echo "🧐" ;; # :monocle_face: Data inspection
        business-logic)   echo "👔" ;; # :necktie: Business logic
        healthcheck)      echo "🩺" ;; # :stethoscope: Healthcheck
        infra)            echo "🧱" ;; # :bricks: Infrastructure
        dev-experience)   echo "🧑‍💻" ;; # :technologist: DX
        sponsorship)      echo "💸" ;; # :money_with_wings: Sponsorships
        concurrency)      echo "🧵" ;; # :thread: Multithreading/Concurrency
        validation)       echo "🦺" ;; # :safety_vest: Validation
        offline)          echo "✈️" ;; # :airplane: Offline support
        backwards-compat) echo "🦖" ;; # :t-rex: Backwards compatibility

        # Fallback for unknown types or if no type is found
        *)                echo "" ;;
    esac
}

# Extract the type from the commit message
# This regex captures the word at the very beginning of the line,
# before any optional scope in parentheses or colon.
# Example: "feat(auth): ..." -> captures "feat"
# Example: "fix: ..." -> captures "fix"
TYPE=$(echo "$FIRST_LINE" | sed -n 's/^\([a-zA-Z0-9_-]*\).*/\1/p')

# Get the corresponding emoji
EMOJI=$(get_emoji "$TYPE")

# If an emoji was found and the message doesn't already start with it
if [ -n "$EMOJI" ]; then
    # Check if the message already starts with the emoji to avoid duplicates on amend
    # We escape special regex characters in the emoji just in case
    ESCAPED_EMOJI=$(printf '%s' "$EMOJI" | sed 's/[]\/$*.^|[]/\\&/g')

    if ! echo "$FIRST_LINE" | grep -q "^$ESCAPED_EMOJI"; then
        # Create a temporary file
        TEMP_FILE=$(mktemp)

        # Write the new first line with the emoji
        echo "$EMOJI $FIRST_LINE" > "$TEMP_FILE"

        # Append the rest of the original message (from line 2 onwards)
        tail -n +2 "$COMMIT_MSG_FILE" >> "$TEMP_FILE"

        # Replace the original commit message file with the new one
        mv "$TEMP_FILE" "$COMMIT_MSG_FILE"
    fi
fi

exit 0
```

### Adding SSH keys to Github

```shell
ssh-keygen -t ed25519 -C "abdu.tawfik@gmail.de"
```

```shell
nano ~/.ssh/config
```

```
Host github.com
  HostName github.com
  User git
  UseKeyChain yes
  AddKeysToAgent yes
  IdentityFile ~/.ssh/github
```

```shell
ssh-add ~/.ssh/github
eval "$(ssh-agent -s)"
ssh -T git@github.com
```
