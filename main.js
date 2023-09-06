// Sample data for Employee models (you can replace this with dynamic data)
const employeeModelsData = [
    { modelName: 'EmployeeModel1' },
    { modelName: 'EmployeeModel2' },
];

// Function to display existing Employee models
function displayEmployeeModels() {
    const employeeModelsContainer = document.getElementById('employeeModels');
    employeeModelsContainer.innerHTML = '';

    employeeModelsData.forEach((model) => {
        const modelElement = document.createElement('div');
        modelElement.innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${model.modelName}</h5>
                    <button class="btn btn-primary mr-2" onclick="editModel('${model.modelName}')">Edit</button>
                    <button class="btn btn-danger" onclick="deleteModel('${model.modelName}')">Delete</button>
                </div>
            </div>
        `;
        employeeModelsContainer.appendChild(modelElement);
    });
}

// Function to handle form submission and create a new Employee model
document.getElementById('createEmployeeModelForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const modelName = document.getElementById('modelName').value;
    // Validate modelName (you can add more validation logic here)
    if (!modelName) {
        alert('Model Name is required');
        return;
    }
    
    // Add the new model to the data
    employeeModelsData.push({ modelName });
    // Clear the form
    document.getElementById('modelName').value = '';
    // Display updated models
    displayEmployeeModels();
});

// Function to edit an Employee model (placeholder)
function editModel(modelName) {
    // Implement editing logic here
    alert(`Editing ${modelName}`);
}

// Function to delete an Employee model (placeholder)
function deleteModel(modelName) {
    // Implement deletion logic here
    const confirmDelete = confirm(`Delete ${modelName}?`);
    if (confirmDelete) {
        const index = employeeModelsData.findIndex((model) => model.modelName === modelName);
        if (index !== -1) {
            employeeModelsData.splice(index, 1);
            displayEmployeeModels();
        }
    }
}

// Initial display of Employee models
displayEmployeeModels();
