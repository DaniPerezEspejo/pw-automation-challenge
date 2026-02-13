# Playwright Challenge
Parabank app - QA Engineer- Challenge
- [@daniperezespejo](https://www.github.com/DaniPerezEspejo)

## Challenge sections

### Part 1 - Advance Exploratory Testing (Web Application)
#### General notes
PDF files for each subtask can be found in `documentation/part1` folder

---

### Part 2 - Deep-Dive API Test Plan
#### General notes
PDF file for this task can be found in `documentation/part2` folder

---

### Part 3 - Mini automation framework
#### General notes
Brief PDF file for this task with some general documentation and rationale on deistions taken can be found in `documentation/part3` folder.

Spec files are located in the `tests` folder. The additional code follows the standard Playwright structure (Page Object Model). The codebase includes documentation, although depending on company standards, additional comments could be streamlined.

### Live Test Report
The latest execution results, including screenshots and traces, are available at the following link:
[View Playwright HTML Report](https://DaniPerezEspejo.github.io/pw-automation-challenge/)

#### Launching tests
Specific scripts have been created to facilitate test execution across different environments, illustrating how the project handles distinct configurations.

Launching tests in development enviroment with development configuration:
```bash
  npm run pw:dev:ui
```
Launching tests in production enviroment with production configuration:
```bash
  npm run pw:prod:ui
```

#### Final notes
In addition, ESLint and Prettier have been added to the project. Scripts can be found in package.json file, but for simplicity just run:
```bash
  npm run format
```