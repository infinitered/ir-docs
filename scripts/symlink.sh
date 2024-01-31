#!/bin/bash

# Define function to create _category_.json
CreateCategoryJSON() {
    PROJECT_NAME=$1
    DOCS_DIR="./docs"

    # Ensure the target directory exists
    mkdir -p "$DOCS_DIR/$PROJECT_NAME/"

    # Inlined template with placeholders
    TEMPLATE='{
  "label": "'"${PROJECT_NAME}"'",
  "link": null,
  "customProps": {
    "description": "",
    "projectName": "'"${PROJECT_NAME}"'",
    "sidebar": {
      "type": "autogenerated",
      "dirName": "'"${PROJECT_NAME}"'"
    }
  }
}'

    # Print the JSON to the _category_.json file
    echo "$TEMPLATE" > "$DOCS_DIR/$PROJECT_NAME/_category_.json"

    echo "$(tput setaf 2)_category_.json file created successfully.$(tput sgr 0)"
}

LinkStaticDocs() {
  TARGET_REPO_DIRECTORY=$1
  PROJECT_NAME=$2
  # Link static content out of /docs into /static.
  echo "Checking for static files in the target repository."
  if [ -d "$TARGET_REPO_DIRECTORY/docs/$PROJECT_NAME/_static_" ]; then
    echo "Creating links for static files." >&2

    # Ensure the target directory exists
    mkdir -p "$TARGET_REPO_DIRECTORY/static/$PROJECT_NAME"

    # Iterate over files and create symbolic links
    find "$TARGET_REPO_DIRECTORY/docs/$PROJECT_NAME/_static_" -type f -exec ln -s {} "$TARGET_REPO_DIRECTORY/static/$PROJECT_NAME/" \;

    echo "Links for static files created successfully." >&2
  else
    echo "No static files to link." >&2
  fi
}

ACTION=$1

if [ -z "$ACTION" ] || [ "$ACTION" = "--help" ]; then
    echo -e "$(tput setaf 4)IR-DOCS SYMLINKING TOOL$(tput sgr 0)\n"\
    "Creates and removes symlinks for local testing\n\n"\
    "$(tput setaf 1)USAGE:$(tput sgr 0)\n"\
    "    To create a symlink:\n\n"\
    "      >  $(tput bold)$(tput setaf 3)yarn symlink add [project_name] [path_to_directory]$(tput sgr 0)\n\n"\
    "      This will create a symlink at ./docs/[project_name] that points to [path_to_directory].\n"\
    "      The existing directory at ./docs/[project_name] will be moved to $(tput setaf 3)tmp/symlink/[project_name]$(tput sgr 0).\n"\
    "      In addition, a $(tput setaf 3)_category_.json$(tput sgr 0) file will be created in the ./docs/[project_name] directory.\n\n"\
    "    To remove a symlink:\n\n"\
    "      >  $(tput bold)$(tput setaf 3)yarn symlink remove [project_name]$(tput sgr 0)\n\n"\
    "      This removes the symlink and restores the backup at tmp/symlink/[project_name], if available."
    exit 0
fi

if [ "$ACTION" = "add" ]; then
    # Ensure two arguments are provided
    if [ "$#" -ne 3 ]; then
        echo "$(tput setaf 1)Error: The add command requires two arguments:[project_name] [path_to_directory].$(tput sgr 0)"
        exit 1
    fi

    PROJECT_NAME=$2
    SOURCE_DIR=$3
    DOCS_DIR="$PWD/docs"
    TARGET="$DOCS_DIR/$PROJECT_NAME"
    STATIC_DIR="$PWD/static"
    TARGET_STATIC="$STATIC_DIR/$PROJECT_NAME"
    BACKUP_DIR="./tmp/symlink"
    BACKUP_DOCS_DIR="$BACKUP_DIR/docs"
    BACKUP_STATIC_DIR="$BACKUP_DIR/static"

    # Get the absolute path of the directory
    ABSOLUTE_SOURCE_DIR=$(realpath "$SOURCE_DIR")
    SOURCE_STATIC_DIR="$ABSOLUTE_SOURCE_DIR/_static_"

    # Check if target already is a symlink
    if [ -h $TARGET ]; then
        echo "$(tput setaf 3)$TARGET is already a symlink. Aborting...$(tput sgr 0)"
        exit 1
    fi

    # If a directory already exists at the target
    if [ -d "$TARGET" ]; then
        # Backup the existing directory by moving it
        echo "$(tput setaf 3)Saving backup of existing directory in $BACKUP_DOCS_DIR$(tput sgr 0)"
        mkdir -p "$BACKUP_DIR/docs"
        mv "$TARGET" "$BACKUP_DIR/docs"
    fi

    if [ -d "$TARGET_STATIC" ]; then
        # Backup the existing static files by moving them
        echo "$(tput setaf 3)Saving backup of existing static directory in $BACKUP_STATIC_DIR$(tput sgr 0)"
        mkdir -p "$BACKUP_STATIC_DIR"
        mv "$TARGET_STATIC" "$BACKUP_STATIC_DIR"
    fi

    # Create symlink
    echo "$(tput setaf 3)Creating symlink... $TARGET --> $ABSOLUTE_SOURCE_DIR $(tput sgr 0)"
    ln -s "$ABSOLUTE_SOURCE_DIR" "$TARGET"
    if [ -d "$SOURCE_STATIC_DIR" ]; then
      echo "$(tput setaf 3)Creating symlink... $TARGET_STATIC --> $ABSOLUTE_SOURCE_DIR/_static_ $(tput sgr 0)"
      ln -s "$SOURCE_STATIC_DIR" "$TARGET_STATIC"
    else
      echo "No static files in $SOURCE_STATIC_DIR"
    fi

    # Call function to create _category_.json
    CreateCategoryJSON "$PROJECT_NAME"


elif [ "$ACTION" = "remove" ]; then
    # Ensure one argument is provided
    if [ "$#" -ne 2 ]; then
        echo "$(tput setaf 1)Error: The remove command requires one argument: [project_name].$(tput sgr 0)"
        exit 1
    fi

    PROJECT_NAME=$2
    DOCS_DIR="./docs"
    TARGET="$DOCS_DIR/$PROJECT_NAME"
    STATIC_DIR="./static"
    TARGET_STATIC="$STATIC_DIR/$PROJECT_NAME"
    BACKUP_DIR="./tmp/symlink"
    BACKUP_DOCS_DIR="$BACKUP_DIR/docs"
    BACKUP_STATIC_DIR="$BACKUP_DIR/static"

    if [ ! -L $TARGET ]; then
        echo "$(tput setaf 3)$TARGET is not a symlink. Aborting...$(tput sgr 0)"
        exit 1
    fi

    # Remove symlink
    echo "$(tput setaf 3)Removing symlinks...$(tput sgr 0)"
    rm -r "$TARGET"

    if [ -L $TARGET_STATIC ]; then
    rm -r "$TARGET_STATIC"
    fi

    # If backup docs exist
    if [ -d "$BACKUP_DOCS_DIR/$PROJECT_NAME" ]; then
        # Restore the directory
        echo "$(tput setaf 3)Restoring docs backup...$(tput sgr 0)"
        mv "$BACKUP_DOCS_DIR/$PROJECT_NAME" "$DOCS_DIR"

         # Check if the backup directory is empty and remove it if so
            if [ -z "$(ls -A -- "$BACKUP_DOCS_DIR")" ]; then
                rmdir "$BACKUP_DOCS_DIR"
            fi
    fi

    # If backup static files exist
    if [ -d "$BACKUP_STATIC_DIR/$PROJECT_NAME" ]; then
        # Restore the static files
        echo "$(tput setaf 3)Restoring static backup...$(tput sgr 0)"
        mv "$BACKUP_STATIC_DIR/$PROJECT_NAME" "$STATIC_DIR"

         # Check if the backup directory is empty and remove it if so
            if [ -z "$(ls -A -- "$BACKUP_STATIC_DIR")" ]; then
                rmdir "$BACKUP_STATIC_DIR"
            fi
    fi

    if [ -z "$(ls -A -- "$BACKUP_DIR")" ]; then
        rmdir "$BACKUP_DIR"
    fi

    if [ -z "$(ls -A -- "tmp")" ]; then
            rmdir "tmp"
    fi

    echo "$(tput setaf 2)Changes have been undone.$(tput sgr 0)"

else
    echo "$(tput setaf 1)Invalid command. Use 'add' to create a symlink or 'remove' to undo.$(tput sgr 0)"
    exit 1
fi
