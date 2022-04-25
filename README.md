# Bank

My first tech test which will allow a user to deposit and withdraw money in and from their bank and have the ability to see their bank statement.

This code is a basic way of depositing and withdrawing money in and from an account and then being able to see your transaction history on a bank statement.

Below is how the app runs, it prints out the transactions made after the user has deposited and withdrawn. The user does not need to enter a date, as the transaction will automatically show the date on which it was made. If the user makes a deposit of 10 or 10.5, the statement will show 10.00 and 10.50, respectively.

![Screenshot 2022-03-29 at 17 22 23](https://user-images.githubusercontent.com/93666673/160659297-39b623fd-af89-4619-a813-1af15cfee32f.png)

## Requirements

- To run the program please clone the repo from github at 
- Ensure you have node installed: guide here https://nodejs.org/en/download/
- cd into the bank_tech_test repository and type ```npm install``` in the terminal
- To run the program type ```node```
- To run the test suites type ```jest``` in the terminal

## Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit/debit || balance
14/01/2023 || 500.00 || 2500.00
13/01/2023 || 2000.00 || 3000.00
10/01/2023 || 1000.00 || 1000.00
```




