# Angrytodo

A modern Kanban-style todo application built with Angular and Bootstrap 5. This project provides an intuitive interface for managing tasks with a two-column layout (To Do and Completed).

## ✨ Features
Kanban Board Layout: Two-column design for better task organization
Add Tasks: Quick task creation with input validation
Mark as Done: Move tasks from "To Do" to "Completed" column
Delete Tasks: Remove tasks from any column
Responsive Design: Works seamlessly on desktop, tablet, and mobile devices
Bootstrap 5 UI: Modern and clean interface with smooth animations
Task Counter: Real-time count of pending and completed tasks

## 📸 Application Screenshots

<img width="1904" height="872" alt="image" src="https://github.com/user-attachments/assets/a8b44129-f8f5-4253-8a5a-37c03d0e6ead" />

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.x or higher) - [Download here](https://nodejs.org/)
- **pnpm** (v8.x or higher) - Install via: `npm install -g pnpm`
- **Angular CLI** (v21.x) - Install via: `pnpm install -g @angular/cli`

### Verify Installation

```bash
node --version
pnpm --version
ng version
```

## 🚀 Getting Started
Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd angrytodo
```
2. Install dependencies:
```bash
pnpm install
```
3. Install Bootstrap 5:
```bash
pnpm install bootstrap@5
```

Run `pnpm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## 🛠️ Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## 🏗️ Build

Run `pnpm build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## 🧪 Running unit tests

Run `pnpm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## 🔍 Running end-to-end tests

Run `pnpm e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 📦 Project Dependencies
Main Dependencies
@angular/core (v21.x) - Core Angular framework
@angular/common - Common Angular modules
@angular/forms - Form handling and two-way binding
bootstrap (v5.x) - UI framework for styling
rxjs - Reactive programming library
zone.js - Change detection
Dev Dependencies
@angular/cli - Angular command line tools
typescript - TypeScript compiler
karma - Test runner
jasmine - Testing framework

## 🎨 Styling
The application uses:
Bootstrap 5 for base styling and grid system
Bootstrap Icons for iconography
Custom CSS for animations and transitions
Responsive design with mobile-first approach

## 📝 Usage Guide
Adding a Task
1. Type your task in the input field
2. Click "Add Task" button or press Enter
3. Task appears in the "To Do" column
Completing a Task
1. Click the "Done" button on any task in "To Do" column
2. Task moves to "Completed" column with strikethrough text
3. Task counter updates automatically
Deleting a Task
1. Click the "Delete" button on any task
2. Task is removed from the list
3. Task counter updates automatically

Made with ❤️ using Angular and Bootstrap 5