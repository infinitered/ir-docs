# ir-docs

**Unified documentation for Infinite Red open source projects.**

ir-docs is a single instance of Docusaurus that fetches and builds the `/docs` folder from all of the major open source libraries under the `infinitered` organization and serves them up under `docs.infinite.red/<project>`.

For example, Gluegun's docs live at `https://github.com/infinitered/gluegun/tree/master/docs`. When new docs are pushed to `master`, Gluegun's Circle CI triggers a build action that then prompts ir-docs to publish those docs at `docs.infinite.red/gluegun`.

> [!Caution]
> DO NOT EDIT THE `./docs` DIRECTORY IN THIS REPOSITORY!
> 
> **Edits to documentation for a particular project should be made in that project's repository!**
> 
> Changes in source repos will be automatically pushed to this repository by the CI/CD process and may destructively overwrite any changes made here.
             
## Table of Contents
<!-- TOC -->
* [ir-docs](#ir-docs)
  * [Table of Contents](#table-of-contents)
  * [Testing Docs Locally](#testing-docs-locally)
  * [Preparing your project for `ir-docs`](#preparing-your-project-for-ir-docs)
  * [The Orb: `infinitered/publish-docs`](#the-orb-infiniteredpublish-docs-)
    * [The ir-docs Publishing Process](#the-ir-docs-publishing-process)
    * [How the orb works](#how-the-orb-works)
  * [Previewing your Changes](#previewing-your-changes)
  * [Handling Static Files](#handling-static-files)
    * [Directory Structure Before and After Merge](#directory-structure-before-and-after-merge)
      * [Before Merge:](#before-merge)
      * [After Merge:](#after-merge)
  * [Refreshing the credentials for the CircleCI User](#refreshing-the-credentials-for-the-circleci-user)
    * [A. Checking permissions for the CircleCI bot:](#a-checking-permissions-for-the-circleci-bot)
    * [B. Re-Authing the CircleCI bot](#b-re-authing-the-circleci-bot)
<!-- TOC -->

## Testing Docs Locally

To see how your docs will look on `docs.infinite.red` before publishing them, you can preview locally using symlinks:

1. Clone a copy of the `ir-docs` repo to your machine
```
git clone git@github.com:infinitered/ir-docs.git ~/ir-docs
```

2. Use the symlink script to link your projects docs folder into the `ir-docs/docs` folder.

```bash
yarn symlink add [project_name] [path_to_directory]
```

For instance to link the ignite docs you might do `yarn symlink add ignite-cli ../ignite/docs`.

This will:
   1. Backup the contents of `./docs/ignite-cli` to `./tmp/symlink/ignite-cli`
   2. Create a symlink at `./docs/ignite-cli` that points to `../ignite/docs`
   3. Create a `_category.json_` file in `./docs/ignite-cli` with the correct project name 

> [!Note]
> Remember not to commit any changes to the `./docs` folder manually.

3, Run the docusaurus dev server
   ```
   cd ~/ir-docs
   yarn start
   ```
   The preview should open automatically at `http://localhost:3000`

4. Edit your project's docs in place and the changes should hot reload in the browser!

5. Restore the original folder
    You can use the restore script to remove the symlink and restore the original files:
    ```shell
      yarn symlink remove [project-name]
    ```

## Preparing your project for `ir-docs`

To prepare your project for `ir-docs` you'll need to do the following:

1. Create a directory to hold the documentation in your project. We recommend `./docs`
2. Add documentation to that directory.
    * Use **docusaurus syntax** for your documentation -- mostly Markdown, some [MDX](https://mdxjs.com/) is ok.
    * Only use **relative links** in your project's documentation. For example: `../reference/filesystem.md` rather than the full URL or the basename `/reference/*`.
    * Avoid defining slugs in your markdown files, unless absolutely necessary. (If you must use them, use your projects
      name as a prefix to avoid collisions.)
3. Add the orb to your project's `.circleci/config.yml` file and call either the build or publish job from your
   workflow.
    * You need to add a `user key` to the CircleCI project settings. (Use the CI User Account.)
           
## The Orb: `infinitered/publish-docs` 

The `infinitered/publish-docs` orb is used to build and publish documentation for Infinite Red open source projects. 

It is available in the [CircleCI Orb Registry](https://circleci.com/developer/orbs/orb/infinitered/publish-docs).

See below for how to configure it on CircleCI. You will have to enable third-party orbs on your organization if you haven't yet. Go to `https://app.circleci.com/settings/organization/github/<yourorganization>/security` to do that.

### The ir-docs Publishing Process

Imagine we have a repository that publishes docs to `ir-docs`. That repo is called `open-source-sesame`.

1. A contributor makes a change to the documentation in `open-source-sesame` and opens a PR.
2. A maintainer approves the changes and merges them into `main`.
3. When it's time for a release, the maintainer creates a PR to bump the version number and tags the commit `v1.2.3`
4. The CI script in `open-source-sesame` sees a tagged commit and runs using the `infinitered/publish-docs` orb.
5. The orb automatically copies the changed documentation from `open-source-sesame` into `ir-docs` commits and pushes a new commit.
6. The CI script in `ir-docs` rebuilds the new docusaurus site with the updated docs and pushes it to the `gh-pages` branch.
7. Github publishes the changes to the web. 

### How the orb works

> This is a high-level summary. For full, up-to-date information on the orb and its parameters check the [orb registry](https://circleci.com/developer/orbs/orb/infinitered/publish-docs).

Imagine we have a project `open-source-sesame` with the following config:

```yaml
version: '2.1'
orbs:
  publish-docs: infinitered/publish-docs@x.y.z
  
# Docker defaults
defaults: &defaults
  docker:
    - image: cimg/node:18.16.1
  working_directory: /mnt/ramdisk/repo  
  
workflows:
  publish_to_docs_site:
    jobs:
      # This job builds the docs and publishes them to the specified site
      - publish-docs/publish_docs:
          <<: *defaults
          description: >-
            An example open source project.
          git_email: your.ci@email.here
          git_username: Your CI Username
          label: Open Source Sesame
          project_name: open-source-sesame
          source_docs_dir: docs         # path from the source project root where docs are kept
          source_repo_directory: source # directory where the source repo is cloned
          target_docs_dir: docs         # path from the target project root where docs are kept
          target_repo: git@github.com:infinitered/ir-docs.git # must use SSH
          target_repo_directory: ir-docs   # directory where the target repo is cloned
          # These filters ensure this only runs on commits to the main branch that are tagged with a version
          filters:
            branches:
              only:
                - main
            tags:
              only:
                - '*v[0-9]+\.[0-9]+\.[0-9]+'
```

1. **Checkout both repos**
    - Clone the source repo into `~/source/`.
    - Clone `git@github.com:infinitered/ir-docs.git` into `~/ir-docs/`.

2. **Copy docs**
    - Verify documents exist in `~/source/docs`.
    - Copy documents from `~/source/docs` to `~/ir-docs/ir-docs/open-source-sesame`.
    - Move any content from `~/ir-docs/ir-docs/open-source-sesame/_static_` to `~/ir-docs/static/open-source-sesame`
    - Create `~/ir-docs/ir-docs/open-source-sesame/_category_.json` with information specified above.

3. **Build the docs**
    - Install dependencies in `~/ir-docs/`
    - Run Docusaurus build in `~/ir-docs/` to check for broken links etc. 

4. **Commit and push**
    - Construct a commit message from the source repo.
    - Add `ir-docs` and `static` to git.
    - Commit with the constructed message.
    - Push to the `main` branch of `git@github.com:infinitered/ir-docs.git`.

## Previewing your Changes

To preview your changes while you work:

1. Clone the ir-docs repo.
2. Create a simlink of your projects docs in the `docs` folder of the `ir-docs` repo.
3. Run `yarn start` in the `ir-docs` repo.

## Handling Static Files
In your source repository, static files such as images should be placed in a directory named _static_ under your docs folder. The directory structure will look like this when you run the tree command:

```
docs/
├── part-one.md
├── part-two.md
└── _static_
└── image.png
```

During the documentation merge process, the orb will automatically move the contents of _static_ to the appropriate location in the target repository.

### Directory Structure Before and After Merge
#### Before Merge:
```
source-repo/
└── docs/
│ ├── part-one.md
│ └── part-two.md
└── _static_/
    └── image.png
```

#### After Merge:
```
ir-docs/
├── docs/
│ └── <<project-name>>
│ ├── part-one.md
│ └── part-two.md
└── static/
    └── <<project-name>>
    └── image.png
```
    
By following this convention, you ensure that all static files and documents are correctly placed in the target repository, under docs/<<project-name>> for documents and static/<<project-name>> for static files.

## Refreshing the credentials for the CircleCI User

For all of this to work, the circle CI user account needs to have:
 * **READ** access to the Source Repo (e.g. `ignite`, `reactotron`, etc.), AND
 * **WRITE** access to `ir-docs`

> [!Note] If you see errors related to credentials, it's likely that one of these permissions has expired.

> [!Hint]
> * If a `pull` fails then it's probably the source repo that needs to be re-authed.
> * If a `push` fails then it's probably `ir-docs` that needs to be re-authed.
            

### A. Checking permissions for the CircleCI bot:
1. Browse to the settings page for the repo that has the issue
2. Open the `Collaborations & Teams` page
3. Under `Manage Access` check that the Circle CI Bot has the correct role:
   * Source repo: _at least_ `Read` 
   * `ir-docs`: `Write` 
4. Browse to the settings page for the `ir-docs` repo
5. Open the `Collaborations & Teams` page
6. Check that the CircleCI bot has write access to the `ir-docs` repo
                                                                                          
> [!Note] The source repo may have other CI tasks that require the bot to have a higher level of access. Please verify the requirements before making changes.

> [!Hint] At the time of writing, the circleCI bot appears as `Infinite Red CircleCI User`

### B. Re-Authing the CircleCI bot

1. (optional) Open an incognito tab
2. Sign in to circle CI using Github authentication
    * use the ci@infinite.red user account (password in the IR 1Password vault)
3. Browse to the ignite project and open project settings
4. Under “SSH keys” delete the “User Key”
5. Add a new user key (will add the ci@infinite.red credential to the project)
    * You will be asked to re-auth here — use the ci@infinite.red credentials
    * After you sign in It’ll kick you back to the top of the menu
    * Browse back to `SSH keys -> Add user` key and click the button again
6. Congratulations, you have completed the task! 🍾🎉 
   
