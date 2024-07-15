# Ju

Ju is an app that improves the writing, grammar of the users via AI.

## Motivation

While writing technical deep dives, I struggled with grammar and clarity. Peer reviews highlighted these issues, and as a non-copywriter, I found it challenging to improve. Using AI to refine my writing was a game-changer, and I wanted to make this accessible to everyone. That's why I created this product—to help anyone enhance their writing effortlessly.

### Key Features

- **Web Application**: Built with Next.js, this is the main landing page and web application interface where users can submit their text for analysis and improvement.
- **Chrome Extension**: A React-based extension allowing users to quickly access Ju's features directly from their browser.
- **AI-Powered Backend**: A Go API proxy using AWS Lambda and AWS SAM to process and improve text submissions.

## Stack

- **Web Application**: Next.js (React) with `biome.json` for code quality and GitHub Actions for CI/CD.
- **Backend**: AWS Lambda (Go), AWS API Gateway, DynamoDB for storage.
- **Chrome Extension**: React, integrated with the web application's backend.
- **Infrastructure**: AWS SAM for serverless deployment, AWS CDK for infrastructure as code.
- **CI/CD**: GitHub Actions for automated testing, linting, and deployment.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Go installed
- AWS CLI configured
- Docker installed (for local testing with SAM)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ju.git
   cd ju
   ```

2. Install dependencies for the web application:

   ```bash
   cd web
   npm install
   ```

3. Set up the Go Lambda function:
   ```bash
   cd ../lambdas
   go mod tidy
   ```

### Deployment

#### Using SAM and Make

1. Build the SAM application:

   ```bash
   make build
   ```

2. Deploy the SAM application:

   ```bash
   make deploy
   ```

3. Clean up the SAM application:
   ```bash
   make clean
   ```

### Local Development

1. Start the web application:

   ```bash
   cd web
   npm run dev
   ```

2. Start the local API server:
   ```bash
   make local-start
   ```

## Code Quality

### Web and Extension

- **Biome**: Ensure code quality with `biome.json` configuration.
- **GitHub Actions**: Automated linting, testing, and deployment.

### Backend (Go)

- **Static Analysis and Linting**:

  - `golangci-lint` for static code analysis.

- **GitHub Actions**:
  - Linting and testing workflow.

### Setting Up Code Quality for Go

We use `golangci-lint` to lint and fix issues in the Go server as follows:

- Lint and fix issues:

  ```bash
  make lint-and-fix
  ```

- Lint without fixing issues:
  ```bash
  make lint-only
  ```
