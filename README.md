### Alumni-Connect

## Getting Started

To setup the project locally the steps below.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)

  ```sh
  # Homebrew
  brew install nodejs
  # Sudo apt
  sudo apt install nodejs
  # Packman
  pacman -S nodejs
  # Module Install
  dnf module install nodejs:<stream> # stream is the version
  # Windows (chocolaty)
  cinst nodejs.install
  ```

- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

```sh
  npm install --global yarn
```

- [Git](https://git-scm.com/downloads)

```sh
  # Homebrew
  brew install git
  # Sudo apt
  apt-get install git
  # Packman
  pacman -S git
  # Module Install (Fedora)
  dnf install git
```

### Contribution guidlines 🎃

---

Our Slack Community: [Slack Invite](http://bit.ly/NITRDevs) <br>

`Contributions are welcome 🎉🎉`

### Local Repository Setup

Please refer to the project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

1.  **Fork** the repo on GitHub
2.  **Clone** the project to your local system
3.  **Commit** changes to your own separate branch
4.  **Push** your work back up to your fork
5.  Submit a **Pull request** so that we can review your changes

NOTE 1: Please abide by the [Contributing Guidelines](https://github.com/dscnitrourkela/project-guava-web/blob/master/CONTRIBUTING.md).

NOTE 2: Please abide by the [Code of Conduct](https://github.com/dscnitrourkela/project-guava-web/blob/master/CODE_OF_CONDUCT.md).

### Running the project.

The project uses Yarn and not NPM. It is strictly advised to stick with Yarn so as to avoid dependency conflicts down the line.

```
## Checkout into the project client directory
cd client
## Install Dependencies
yarn install
## Run the Project
yarn develop
```

Following are the commands to remove/add new dependencies using yarn

```
## Add a new Package
yarn add package_name
## Remove an existing Package
yarn remove package_name
## Save Package as a Dev Dependency
yarn add -D package_name
```
