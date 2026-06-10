# Installation Guide

This guide explains how to prepare your computer for this Playwright learning repository.

## 1. Install Node.js

Install the LTS version of Node.js from the official Node.js website.

After installation, check that Node.js and npm are available:

```bash
node --version
npm --version
```

## 2. Install Git

Install Git so you can clone repositories and track code changes.

Check that Git is available:

```bash
git --version
```

## 3. Clone The Repository

After this project is published, clone it with:

```bash
git clone <repository-url>
cd playwright-learning-repo
```

## 4. Install Project Dependencies

Run:

```bash
npm install
```

## 5. Install Playwright Browsers

Run:

```bash
npx playwright install
```

## 6. Check The Project

Run the TypeScript check:

```bash
npm run typecheck
```

Run the prepared test command:

```bash
npm test
```

In Phase 1, no tests have been created yet. Tests will be added in later phases.
