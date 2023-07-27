# project3-drug-overdose-analysis
### Follow the steps below once this git repo has been cloned to your machine.

### Step 1: Set up SQL database
- Open up pgadmin and create a new database with the name "ct_overdose_deaths", without quotes.
- ![image](https://github.com/delonlawrence/project3-drug-overdose-analysis/assets/128104435/bcc460a7-c363-464f-b156-92637a921b3f)
- Click on the new database you created, so that it is highlighted and select "Tools" from the menu bar, then select "Restore..."
- A dialog box will pop up, click the folder icon on the "Filename" field and navigate to the github repository on your machine.
- Navigate further to the "Resources" folder and select the "postgres_database_RESTOREME.sql file"
- ![image](https://github.com/delonlawrence/project3-drug-overdose-analysis/assets/128104435/0409d7c2-3f9f-44ca-9b91-292a51be58a7)
- Select "Restore" at the bottom of the dialog box to finish setting up SQL database

### Step 2: Run flask server
- Open VScode and navigate to project repository
- start a new terminal shell by selecting the "Terminal" menu bar at the top of the screen and click "New Terminal"
- ![image](https://github.com/delonlawrence/project3-drug-overdose-analysis/assets/128104435/b4c63b47-ac69-4bde-ab49-99b199d32e9d)

- once the terminal is ready, activate your conda environment
- once you have confirmed the environment is loaded, run this line of code to start the flask server "python ct_flask_api_app.py"
- ctrl or cmd click on the ip address that the terminal returns.
- ![image](https://github.com/delonlawrence/project3-drug-overdose-analysis/assets/128104435/fc9c80aa-761f-42a7-b5a4-e51e6ffe922c)

- This should open the app on your default browser.

