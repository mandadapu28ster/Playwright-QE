## Running on local machine
Follow below steps to run after downloading complete folder 'Playwright-QE'
1. Navigate to root folder 'Playwright-QE' and open terminal
2. Run command `npm install`
3. Once above command complete installation of required modules run `npx playwright test --headed`
   1. To run tests on specific browser use option `--browser`
   2. Ex: To execute tests on safari/webkit and to see execution `npx playwright test --browser=webkit --headed` 
4. Now we will tests are executing on Chromium browser (default)
5. Once execution complete, run `npx allure serve allure-results` to see report
6. Step 5 will open beautiful allure report on system browser and load report with each step status, execution time along with beautiful status graphs. sample reports added below

![Screenshot1.png](resources%2FScreenshot1.png)
![Screenshot2.png](resources%2FScreenshot2.png)

### Improvements
1. We can added customised reposting like Allure reporting, which will enhance reporting further
2. We can integrate each CICD test runs by adding unique test codes to each test. And integrate test management tools like Testrail
3. We can make shift this framework in Dev project as multi project, so Dev and tests in one project and can be maintained by Dev/QA as real CICD.
4. Framework can be extended to test email/custom communication validations with third party tools like mailosaur 

NOTE: This framework is IDE agnostic, can be loaded in any IDE and playaround it.