<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>README-AI</h1>
<h3>◦ README made easy with ReadMe AI!</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/GNU%20Bash-4EAA25.svg?style=flat-square&logo=GNU-Bash&logoColor=white" alt="GNU%20Bash" />
<img src="https://img.shields.io/badge/tqdm-FFC107.svg?style=flat-square&logo=tqdm&logoColor=black" alt="tqdm" />
<img src="https://img.shields.io/badge/precommit-FAB040.svg?style=flat-square&logo=pre-commit&logoColor=black" alt="precommit" />
<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat-square&logo=YAML&logoColor=white" alt="YAML" />
<img src="https://img.shields.io/badge/Poetry-60A5FA.svg?style=flat-square&logo=Poetry&logoColor=white" alt="Poetry" />
<img src="https://img.shields.io/badge/OpenAI-412991.svg?style=flat-square&logo=OpenAI&logoColor=white" alt="OpenAI" />

<img src="https://img.shields.io/badge/Python-3776AB.svg?style=flat-square&logo=Python&logoColor=white" alt="Python" />
<img src="https://img.shields.io/badge/AIOHTTP-2C5BB4.svg?style=flat-square&logo=AIOHTTP&logoColor=white" alt="AIOHTTP" />
<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat-square&logo=Docker&logoColor=white" alt="Docker" />
<img src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=flat-square&logo=GitHub-Actions&logoColor=white" alt="GitHub%20Actions" />
<img src="https://img.shields.io/badge/Pytest-0A9EDC.svg?style=flat-square&logo=Pytest&logoColor=white" alt="Pytest" />
</p>
<img src="https://img.shields.io/github/license/eli64s/readme-ai?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/eli64s/readme-ai?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/eli64s/readme-ai?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/eli64s/readme-ai?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running readme-ai](#-running-readme-ai)
    - [🧪 Tests](#-tests)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The repository readme-ai is a powerful tool for automatically generating high-quality README files for GitHub repositories. Its use-case is to save time for developers by generating comprehensive and well-organized project documentation. Its value proposition lies in its ability to provide a standardized and professional README template that includes all the necessary sections such as project description, installation instructions, usage examples, and contribution guidelines. By using this tool, developers can focus on building their code and ensure effective communication with potential users and contributors.

---

## 📦 Features

|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The codebase follows a modular architecture, with separate directories for different components such as CLI, configuration, core functionalities, and markdown generation. The codebase is organized and follows the SOLID principles, making it easy to understand and maintain. The use of factories and parsers enhances modularity and extensibility. Overall, the architecture promotes code reusability and separation of concerns. |
| 📄 | **Documentation**  | The repository has a comprehensive README file that provides an overview of the project, installation instructions, and usage examples. The code is well-documented with clear comments and docstrings. Helpful comments are provided to explain complex code logic. However, the documentation could benefit from additional guides or tutorials for developers looking to contribute to the project. |
| 🔗 | **Dependencies**   | This system relies on external libraries managed through Poetry, as specified in the "poetry.lock" and "pyproject.toml" files. The dependencies include Pytest for testing, Click for building command-line interfaces, and black for code formatting. These libraries enhance the functionality, testing, and development experience of the codebase. The repository also has a Dockerfile for containerization and easy deployment. |
| 🧩 | **Modularity**     | The codebase is well-organized into multiple directories and modules, each responsible for a specific functionality. The use of separate modules for CLI, configuration, core components, and markdown generation promotes modularity and code reusability. The design also facilitates easy extensibility by allowing developers to add new modules or functionalities without affecting the existing codebase. |
| 🧪 | **Testing**        | The codebase includes a "tests" directory with comprehensive unit tests written using the Pytest framework. The tests cover various functionalities and ensure code reliability. The use of fixtures and mocking enhances the effectiveness and efficiency of the tests. Automated testing workflows are set up using GitHub Actions to run tests on every pull request and ensure code quality. Overall, the codebase demonstrates good testing practices. |
| ⚡️  | **Performance**    | Since the repository is a tool for generating README files, its performance depends on the size and complexity of the input. As of now, there seem to be no performance-related issues or bottlenecks. However, further performance optimizations can be explored if required, such as using caching mechanisms for repeated calculations or employing asynchronous processing for parallelization. |
| 🔐 | **Security**       | The repository does not contain any sensitive or critical data. The codebase follows standard security measures, such as using "argparse" for input validation and avoiding potential security vulnerabilities. However, a more comprehensive assessment, including vulnerability scanning and analysis, could be beneficial to ensure robust security practices. |
| 🔀 | **Version Control**| The repository uses Git for version control and follows the best practices of branching, merging, and pull requests. The usage of Git allows for easy collaboration and code review. The repository also employs GitHub Actions to automate various development, testing, and release processes, ensuring controlled versioning and continuous integration. |
| 🔌 | **Integrations**   | The codebase does

---


## 📂 Repository Structure

```sh
└── readme-ai/
    ├── .github/
    │   ├── release-drafter.yml
    │   └── workflows/
    │       ├── build_docker.yml
    │       ├── publish_package.yml
    │       └── release-drafter.yml
    ├── Dockerfile
    ├── Makefile
    ├── examples/
    │   ├── images/
    │   └── markdown/
    ├── poetry.lock
    ├── pyproject.toml
    ├── readmeai/
    │   ├── cli/
    │   │   ├── commands.py
    │   │   └── options.py
    │   ├── config/
    │   │   ├── __Init__.py
    │   │   └── settings.py
    │   ├── core/
    │   │   ├── factory.py
    │   │   ├── logger.py
    │   │   ├── model.py
    │   │   ├── parser.py
    │   │   ├── preprocess.py
    │   │   └── tokens.py
    │   ├── main.py
    │   ├── markdown/
    │   │   ├── badges.py
    │   │   ├── headers.py
    │   │   ├── quickstart.py
    │   │   ├── tables.py
    │   │   ├── template.py
    │   │   └── tree.py
    │   ├── services/
    │   │   └── version_control.py
    │   ├── settings/
    │   │   ├── config.toml
    │   │   ├── dependency_files.toml
    │   │   ├── identifiers.toml
    │   │   ├── ignore_files.toml
    │   │   ├── language_names.toml
    │   │   └── language_setup.toml
    │   └── utils/
    │       └── utils.py
    ├── requirements.txt
    ├── scripts/
    │   ├── build_docker.sh
    │   ├── build_pypi.sh
    │   ├── clean.sh
    │   ├── run.sh
    │   ├── run_batch.sh
    │   └── test.sh
    ├── setup/
    │   ├── environment.yaml
    │   └── setup.sh

```

---


## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---                                                                                | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [requirements.txt](https://github.com/eli64s/readme-ai/blob/main/requirements.txt) | The code includes a directory tree with various files and folders. It includes a Dockerfile and Makefile for building and managing the application in a Docker environment. The "readmeai" folder contains the main functionality of the application, including a CLI module, a configuration module, a core module for various operations, a markdown module for generating markdown content, a services module for version control, and a utils module. The "requirements.txt" file lists the required dependencies for the project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Dockerfile](https://github.com/eli64s/readme-ai/blob/main/Dockerfile)             | This Dockerfile sets up a Python 3.9 environment with system dependencies, Git, and a non-root user. It installs the `readmeai` package from PyPI with a specific version and sets the command to run the CLI when the Docker container is started.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [Makefile](https://github.com/eli64s/readme-ai/blob/main/Makefile)                 | This Makefile provides several commands for repository file management. The commands include cleaning up files, executing code formatting and linting, installing dependencies, creating virtual environments, and fixing git untracked files. It also includes commands to create a conda environment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [pyproject.toml](https://github.com/eli64s/readme-ai/blob/main/pyproject.toml)     | The code in pyproject.toml is a configuration file for a Python project called readmeai. It defines various properties such as the project name, version, description, homepage, and documentation URL. It also lists the project's dependencies, dev dependencies, and optional extras. Additionally, it specifies scripts that can be executed using the poetry command-line tool. The file includes settings for code formatting and linting. Overall, it provides a centralized place for project metadata, dependencies, and build system configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [poetry.lock](https://github.com/eli64s/readme-ai/blob/main/poetry.lock)           | The provided directory tree represents a codebase for a project called `readme-ai`. It consists of various files and directories that serve different purposes. Some of the core functionalities include:-`.github/`: Contains configuration files for GitHub Actions and release management.-`Dockerfile` and `Makefile`: Used for building and deploying the project.-`examples/`: Contains example files for image and markdown usage.-`poetry.lock` and `pyproject.toml`: Manage project dependencies and settings.-`readmeai/`: The main package directory that contains code related to the project.-`cli/`: Contains command-line interface code.-`config/`: Holds configuration settings for the project.-`core/`: Contains core functionality like factories, logging, models, parsing, preprocessing, and token manipulation.-`markdown/`: Contains code for generating various elements in markdown files.-`services/`: Contains code related to version control systems.-`settings/`: Contains configuration files for various aspects of the project.-`utils/`: Contains utility functions used across the project. |

</details>

<details closed><summary>Setup</summary>

| File                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [setup.sh](https://github.com/eli64s/readme-ai/blob/main/setup/setup.sh)                 | The code is a setup script for the README-AI environment. It checks if the'tree' command is installed and installs it if necessary. It then checks if Git, Conda, and Python 3.8 or higher are installed. If not, it prompts the user to install them. Next, it checks if the'readmeai' conda environment already exists. If not, it creates a new environment using the'environment.yaml' file. Afterward, it activates the'readmeai' environment, adds the Python path to the PATH environment variable, and installs the required packages from the'requirements.txt' file using pip. Finally, it deactivates the conda environment and provides a message indicating that the setup is complete. |
| [environment.yaml](https://github.com/eli64s/readme-ai/blob/main/setup/environment.yaml) | The code represents the environment configuration file for a project called "readmeai". It specifies the project name, channels (conda-forge and defaults), and the dependencies required for the project. The dependencies include Python version 3.9 or above and pip. The presence of "pip:" indicates that no additional packages are specified for installation via pip.                                                                                                                                                                                                                                                                                                                        |

</details>

<details closed><summary>Scripts</summary>

| File                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [run_batch.sh](https://github.com/eli64s/readme-ai/blob/main/scripts/run_batch.sh)       | The script `run_batch.sh` automates the generation of README files for multiple repositories. It contains a list of repository URLs and corresponding filenames. It randomly selects a badge style and determines whether to use emojis. Then, it executes a Python command using the `readmeai` package to generate a README file for each repository. The generated README files will include the selected badge style and potential emojis, making them visually appealing and informative. |
| [build_pypi.sh](https://github.com/eli64s/readme-ai/blob/main/scripts/build_pypi.sh)     | The code `build_pypi.sh` is a bash script that automates the process of building and pushing the `readmeai` package to PyPI. It first runs the `clean.sh` script to remove any previous build artifacts. Then, it uses the `python-m build` command to build the package. Finally, it uses the `twine upload` command to upload the built package to PyPI, using the provided PyPI API key.                                                                                                    |
| [build_docker.sh](https://github.com/eli64s/readme-ai/blob/main/scripts/build_docker.sh) | The code is a bash script named "build_docker.sh" that builds a Docker image called "readme-ai" with the "latest" version tag. It then pushes the image to the Docker registry using the "zeroxeli/readme-ai:latest" repository. The script utilizes Docker Buildx to support multiple platforms (linux/amd64 and linux/arm64). Upon completion, it displays a success message indicating the image has been pushed successfully.                                                              |
| [run.sh](https://github.com/eli64s/readme-ai/blob/main/scripts/run.sh)                   | The code script `run.sh` activates a conda environment named `readmeai`, then executes a Python script `readmeai.cli.commands` with the specified options `-o readme-ai.md` and `-r https://github.com/eli64s/readme-ai`.                                                                                                                                                                                                                                                                      |
| [clean.sh](https://github.com/eli64s/readme-ai/blob/main/scripts/clean.sh)               | The `clean.sh` script is used to remove various artifacts and files related to building, testing, and Python itself. It contains functions to clean build artifacts, Python file artifacts, test and coverage artifacts, as well as backup files and Python cache files. The script accepts command line arguments to specify the type of cleaning operation to perform.                                                                                                                       |
| [test.sh](https://github.com/eli64s/readme-ai/blob/main/scripts/test.sh)                 | The code in `scripts/test.sh` is responsible for running tests and generating a coverage report for the `readmeai` package. It activates the `readmeai` environment using conda, sets the directories and files to include/exclude from the coverage report, and runs pytest with coverage. Finally, it removes unnecessary files and folders.                                                                                                                                                 |

</details>

<details closed><summary>.github</summary>

| File                                                                                             | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---                                                                                              | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [release-drafter.yml](https://github.com/eli64s/readme-ai/blob/main/.github/release-drafter.yml) | The code is a configuration file for a release drafter in GitHub. It defines the templates and labels used to generate release notes based on the conventions mentioned in keepachangelog.com. It specifies the categories for different types of changes (features, bug fixes, etc.), their corresponding labels, and the format of the release notes. The release notes include information about the version, author, number, and title of each change. |

</details>

<details closed><summary>Workflows</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---                                                                                                        | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [release-drafter.yml](https://github.com/eli64s/readme-ai/blob/main/.github/workflows/release-drafter.yml) | The code is a GitHub workflow file named "release-drafter.yml" that runs when a push event occurs on the main branch or when a pull request is opened, reopened, or synchronized. It defines a job called "update_release_draft" that requires permissions to read contents and write pull requests and contents. This job runs on an Ubuntu environment and consists of steps to draft release notes based on merged pull requests using the release-drafter@v5 action. The job also sets the GITHUB_TOKEN environment variable for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [publish_package.yml](https://github.com/eli64s/readme-ai/blob/main/.github/workflows/publish_package.yml) | The code is a GitHub Actions workflow file titled "publish_package.yml" located in the.github/workflows directory. It defines a workflow that is triggered whenever a push is made to the "main" branch or when a new release is created. The workflow runs on an Ubuntu environment and performs the following steps:1. Checks out the code using the "actions/checkout" action.2. Sets up Python using the "actions/setup-python" action, specifying Python 3.x as the version.3. Installs the necessary dependencies for building and publishing Python packages using pip.4. Builds the Python package using the "build" module.5. Publishes the generated package to PyPI (Python Package Index) using the "twine" module.6. Uses the environment variables TWINE_USERNAME and TWINE_PASSWORD to authenticate the upload using a PyPI API token stored as a secret in the GitHub repository.The purpose of this workflow is to automate the process of building and publishing a Python package to PyPI whenever changes are made to the main branch or a new release is created. |
| [build_docker.yml](https://github.com/eli64s/readme-ai/blob/main/.github/workflows/build_docker.yml)       | The code is a GitHub workflow that builds a docker image and pushes it to Docker Hub. It runs on the main branch and when a new release is created. It checks out the code, sets up QEMU and Docker Buildx, logs in to Docker Hub, and then builds and pushes the docker image with the tags "zeroxeli/readme-ai:latest" for the platforms linux/amd64, linux/arm/v7, and linux/arm64/v8.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

</details>

<details closed><summary>Readmeai</summary>

| File                                                                      | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---                                                                       | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [main.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/main.py) | The code is the main entry point for the README-AI application. It imports necessary modules and defines a `main` function that serves as the entrypoint for the application. The `main` function takes several parameters related to the application configuration, such as badges, emojis, offline mode, model, output file, repository, and temperature. It then loads the application configuration, sets the configuration values based on the provided parameters, and calls the `readme_agent` function to orchestrate the generation of the README file. The `readme_agent` function performs various tasks, such as cloning the repository, generating a repository tree, parsing dependencies, and using the OpenAI API to generate the contents of the README file based on the provided prompts and code. |

</details>

<details closed><summary>Settings</summary>

| File                                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                            | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [ignore_files.toml](https://github.com/eli64s/readme-ai/blob/main/readmeai/settings/ignore_files.toml)         | The code represents a configuration file that defines files and directories to be ignored by a program. It specifies a list of directories, extensions, and files that should be excluded from processing, such as temporary files, build artifacts, and version control files. This configuration helps streamline the program's functionality by reducing unnecessary file operations and ensuring that only relevant files are considered.                                                                                      |
| [language_names.toml](https://github.com/eli64s/readme-ai/blob/main/readmeai/settings/language_names.toml)     | The code defines a configuration file that maps programming language file extensions to their corresponding names.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [identifiers.toml](https://github.com/eli64s/readme-ai/blob/main/readmeai/settings/identifiers.toml)           | The code represents a directory tree structure. It contains various files and folders that make up a software project. The specific file `identifiers.toml` under the `readmeai/settings` directory is a configuration file. It categorizes project types based on specific identifiers. Each category has a list of identifiers relevant to that project type, such as web, mobile, desktop, backend, frontend, game, data, machine learning, library, CLI, API, plugin, and embedded.                                            |
| [config.toml](https://github.com/eli64s/readme-ai/blob/main/readmeai/settings/config.toml)                     | The code represents a configuration file in TOML format. It defines various settings and options for a project called "readme-ai". It specifies the model settings, CLI options, Git repository, file paths, prompts, markdown templates, and more. The file contains information such as the API endpoint, model details, dependencies, repository details, directory structure, prompts for generating Markdown tables, and markdown templates for headers and badges.                                                           |
| [dependency_files.toml](https://github.com/eli64s/readme-ai/blob/main/readmeai/settings/dependency_files.toml) | The code defines a list of programming language dependency file names in the `readmeai/settings/dependency_files.toml` file. These file names are used to identify the dependency files for different programming languages in a directory tree structure. The list includes file names for languages such as C/C++, Go, Java, Python, Rust, Ruby, Clojure, Elixir, JavaScript/Node.js, TypeScript, PHP, Swift, Kotlin, Dart/Flutter, R, Shell, Scala, Groovy, Lua, Julia, Haskell, C#, F#, Objective-C, Matlab, Perl, and Docker. |
| [language_setup.toml](https://github.com/eli64s/readme-ai/blob/main/readmeai/settings/language_setup.toml)     | The code represents a directory tree structure with various files and folders. The main focus is on the "settings/language_setup.toml" file, which contains setup and run instructions for different programming languages. Each language has three corresponding commands: build, run, and test. These commands outline the necessary steps to compile, execute, and test code written in each programming language.                                                                                                              |

</details>

<details closed><summary>Core</summary>

| File                                                                                       | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---                                                                                        | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [preprocess.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/core/preprocess.py) | The code provides functionalities for preprocessing the input codebase. It includes a class called "RepositoryParser" with methods for analyzing a local or remote git repository, generating file information, extracting dependency file contents, getting file contents, getting unique contents, getting dependencies, processing language mapping, and tokenizing content. The code also imports modules from other packages and uses helper functions from utility files.                                                                                 |
| [tokens.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/core/tokens.py)         | The code in `readmeai/core/tokens.py` provides utilities for handling language tokens. It includes functions for adjusting the maximum number of tokens based on a specified prompt, counting the number of tokens in a text string, determining the token encoder to use for the model, and truncating a text string to a maximum number of tokens.                                                                                                                                                                                                            |
| [logger.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/core/logger.py)         | The `Logger` class is a custom implementation of a logger for the project. It configures the logging functionality using the `ColoredFormatter` from the `colorlog` library. It sets the log level and log colors for different levels of logs (DEBUG, INFO, WARNING, ERROR, CRITICAL). It provides methods for logging messages at different levels such as `info()`, `debug()`, `warning()`, `error()`, `critical()`, and `log()`. The logger can be instantiated with a name and log level, and it ensures that only a single instance of the logger exists. |
| [factory.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/core/factory.py)       | This code implements a Factory class for handling file I/O operations. It provides methods for reading and writing various file formats such as JSON, Markdown, TOML, TXT, and YAML. The class handles different file extensions and performs the required operations accordingly. It also includes exception classes for handling read and write file errors, and a cache mechanism to store the content of files that have already been read for efficient retrieval.                                                                                         |
| [model.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/core/model.py)           | The code defines the `OpenAIHandler` class, which is responsible for handling API calls to OpenAI to generate natural language text. It includes methods to convert code to text and chat to text using prompts. The class also handles API rate limiting, token truncation, and caching of API responses. It uses the `httpx` library for making asynchronous HTTP requests, and the `tenacity` library for implementing retry logic.                                                                                                                          |
| [parser.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/core/parser.py)         | The code provides methods to parse and extract metadata from different types of dependency files. It includes functions to parse JSON, TOML, and YAML files, as well as specific file formats like Docker Compose, conda environment files, Pipfile, poetry.lock, pyproject.toml, requirements.txt, Cargo.toml, Cargo.lock, package.json, yarn.lock, package-lock.json, go.mod, build.gradle, pom.xml, CMakeLists.txt, configure.ac, and Makefile.am. Each parse method takes the file content as input and returns a list of extracted keys or dependencies.   |

</details>

<details closed><summary>Config</summary>

| File                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [__Init__.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/config/__Init__.py) | The code provided is an empty `__Init__.py` file located in the `readmeai/config` directory. Its purpose is to initialize the `config` module within the `readmeai` package.                                                                                                                                                                                                                                                                                                               |
| [settings.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/config/settings.py) | The code provides Pydantic models for the configuration of the readme-ai application. It includes models for API configurations, CLI options, Git configurations, Markdown code block templates, file paths, OpenAI prompts, and the overall application configuration. The code also provides a ConfigHelper class to load additional configuration files. There are functions to load the configuration constants from a TOML file and to load multiple configuration helper TOML files. |

</details>

<details closed><summary>Markdown</summary>

| File                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---                                                                                            | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [tree.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/markdown/tree.py)             | The code provided contains a class called TreeGenerator, which is responsible for generating and formatting a tree structure for a given directory. The tree structure is represented using ASCII characters and shows the hierarchical relationship between directories and files within the specified directory. The class takes parameters such as the root directory path, repository URL, project name, and maximum depth of the tree. The generate_and_format_tree method is used to generate and format the tree structure, while the _generate_tree and _format_tree methods are helper functions for generating and formatting the tree, respectively. |
| [badges.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/markdown/badges.py)         | The `badges.py` module generates badges for the README file. It includes functions to format the SVG icons into Markdown image tags, retrieve a list of badges for project dependencies, and generate badges using shields.io and app iOS style badges.                                                                                                                                                                                                                                                                                                                                                                                                         |
| [template.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/markdown/template.py)     | The code defines a directory tree structure with various files and directories. The main functionality of the code is to generate a README file for different types of projects. It defines two template classes, `ReadmeTemplate` and its subclasses `LibraryTemplate` and `WebTemplate`, which provide implementations for rendering different sections of the README file. The `gen_readme` function takes a `Project` object as input and dynamically selects the appropriate template based on the project type to generate the README content.                                                                                                            |
| [tables.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/markdown/tables.py)         | The code in the `tables.py` file generates Markdown tables for code summaries produced by the LLM tool. It provides functions to format code summaries into a list, group summaries by sub-directory, construct Markdown tables from the data, create hyperlinks for the file names using GitHub URLs if available, and format the data as a Markdown table.                                                                                                                                                                                                                                                                                                    |
| [headers.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/markdown/headers.py)       | The code is part of a README.md file generator for a codebase. It has a function called `build_readme_md` that constructs sections of the README file using other helper functions. The `format_readme_md_contents` function formats the contents for each section of the README file, including tables, badges, and quickstart instructions. There is also a function called `remove_emojis_from_headers` that removes emojis from headers and the table of contents.                                                                                                                                                                                          |
| [quickstart.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/markdown/quickstart.py) | The code in `readmeai/markdown/quickstart.py` generates the'Quick Start' section of a README file. It takes in a configuration object, a helper object, and a list of summaries. It counts the occurrences of different programming languages in the summaries and determines the most frequently occurring language. It then retrieves setup instructions for that language from the helper object and returns the default installation, run, and test commands based on the language setup. If an error occurs, it logs the exception and returns the default run command.                                                                                    |

</details>

<details closed><summary>Utils</summary>

| File                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---                                                                               | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [utils.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/utils/utils.py) | The code in the utils.py file provides utility methods for the readme-ai application. The methods include:-`is_valid_url`: Checks if a given string is a valid URL.-`flatten_list`: Flattens a nested list.-`format_sentence`: Cleans and formats generated text from the model.-`get_relative_path`: Gets the relative path of a file.-`remove_substring`: Removes text between HTML tags.-`should_ignore`: Filters out files that should be ignored based on the configuration.The code also imports other modules and classes from other files in the application. |

</details>

<details closed><summary>Cli</summary>

| File                                                                                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                   | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [options.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/cli/options.py)   | The code in readmeai/cli/options.py defines various options for the command line interface (CLI). These options include:-`api_key`: An option to specify the API secret key for a large language model.-`badges`: An option to choose the type of badge icon to use in the README.md header.-`emojis`: An option to add emojis as prefixes to all README heading sections.-`model`: An option to specify the large language model engine to use.-`offline`: An option to generate a README.md file without using the language model API when set to `true`.-`output`: An option to specify the file path for the generated README.md file.-`repository`: A required option to specify the URL or directory path of the repository.-`temperature`: An option to specify the sampling temperature for the large language model.-`language`: An option to specify the language in which the README.md file should be written.-`style`: An option to specify the template to use for the README.md file. |
| [commands.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/cli/commands.py) | The code defines the CLI entrypoint for the readme-ai tool. It uses click to create a command-line interface with various options and arguments. The main function of the module is called with the provided options and arguments, passing them to the readmeai.main module for further processing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

</details>

<details closed><summary>Services</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---                                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [version_control.py](https://github.com/eli64s/readme-ai/blob/main/readmeai/services/version_control.py) | The code provides utility functions for version control services. It includes functions for making HTTP requests to retrieve metadata about GitHub, GitLab, and Bitbucket repositories. Additional functions are present for cloning a repository to a temporary directory, extracting user and repository names from a URL or path, constructing file URLs based on the platform, parsing repository URLs to create API URLs, finding the path to the git executable, and validating file permissions and the git executable path. |

</details>

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ Dependency 1`

`- ℹ️ Dependency 2`

`- ℹ️ ...`

### 🔧 Installation

1. Clone the readme-ai repository:
```sh
git clone https://github.com/eli64s/readme-ai
```

2. Change to the project directory:
```sh
cd readme-ai
```

3. Install the dependencies:
```sh
pip install -r requirements.txt
```

### 🤖 Running readme-ai

```sh
python main.py
```

### 🧪 Tests
```sh
pytest
```

---


## 🛣 Project Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Implement Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/eli64s/readme-ai/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/eli64s/readme-ai/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/eli64s/readme-ai/issues)**: Submit bugs found or log feature requests for ELI64S.

#### *Contributing Guidelines*

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License


This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#Top)

---

