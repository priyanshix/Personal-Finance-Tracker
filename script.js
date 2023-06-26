// script.js

// Get the elements
const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expenseElement = document.getElementById("expense");
const descriptionElement = document.getElementById("description");
const amountElement = document.getElementById("amount");
const transactionListElement = document.getElementById("transaction-list");

let balance = 0;
let income = 0;
let expense = 0;

// Function to add a transaction
function addTransaction() {
    const description = descriptionElement.value;
    const amount = parseFloat(amountElement.value);

    if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    const transaction = {
        description: description,
        amount: amount
    };

    // Update the balance, income, and expense
    balance += amount;
    if (amount >= 0) {
        income += amount;
    } else {
        expense -= amount;
    }

    // Update the elements
    balanceElement.textContent = balance.toFixed(2);
    incomeElement.textContent = income.toFixed(2);
    expenseElement.textContent = expense.toFixed(2);

    // Clear the input fields
    descriptionElement.value = "";
    amountElement.value = "";

    // Add the transaction to the list
    const transactionItem = document.createElement("li");
    transactionItem.textContent = `${description}: ${amount.toFixed(2)}`;

    // Add a delete button to the transaction
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => {
        deleteTransaction(transactionItem, amount);
    });

    transactionItem.appendChild(deleteButton);
    transactionListElement.appendChild(transactionItem);
}

// Function to delete a transaction
function deleteTransaction(transactionItem, amount) {
    transactionListElement.removeChild(transactionItem);

    // Update the balance, income, and expense
    balance -= amount;
    if (amount >= 0) {
        income -= amount;
    } else {
        expense += amount;
    }

    // Update the elements
    balanceElement.textContent = balance.toFixed(2);
    incomeElement.textContent = income.toFixed(2);
    expenseElement.textContent = expense.toFixed(2);
}
