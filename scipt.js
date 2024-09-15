document.addEventListener("DOMContentLoaded", function() {
    const properties = [];
    const tenants = [];
    const maintenanceRequests = [];

    const propertyForm = document.getElementById("property-form");
    const propertiesTable = document.getElementById("properties-table").getElementsByTagName("tbody")[0];
    const tenantForm = document.getElementById("tenant-form");
    const tenantsTable = document.getElementById("tenants-table").getElementsByTagName("tbody")[0];
    const maintenanceForm = document.getElementById("maintenance-form");                 
    const maintenanceTable = document.getElementById("maintenance-table").getElementsByTagName("tbody")[0];

    propertyForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const propertyName = document.getElementById("property-name").value;
        const propertyAddress = document.getElementById("property-address").value;

        properties.push({ name: propertyName, address: propertyAddress });
        updatePropertiesTable();
        updatePropertySelectOptions();
        propertyForm.reset();
    });

    tenantForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const tenantName = document.getElementById("tenant-name").value;
        const tenantEmail = document.getElementById("tenant-email").value;
        const tenantProperty = document.getElementById("tenant-property").value;

        tenants.push({ name: tenantName, email: tenantEmail, property: tenantProperty });
        updateTenantsTable();
        tenantForm.reset();
    });

    maintenanceForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const maintenanceProperty = document.getElementById("maintenance-property").value;
        const maintenanceDescription = document.getElementById("maintenance-description").value;

        maintenanceRequests.push({ property: maintenanceProperty, description: maintenanceDescription, status: 'Pending' });
        updateMaintenanceTable();
        maintenanceForm.reset();
    });

    function updatePropertiesTable() {
        propertiesTable.innerHTML = "";
        properties.forEach(function(property) {
            const row = propertiesTable.insertRow();
            const cellName = row.insertCell(0);
            const cellAddress = row.insertCell(1);
            cellName.textContent = property.name;
            cellAddress.textContent = property.address;
        });
    }

    function updateTenantsTable() {
        tenantsTable.innerHTML = "";
        tenants.forEach(function(tenant) {
            const row = tenantsTable.insertRow();
            const cellName = row.insertCell(0);
            const cellEmail = row.insertCell(1);
            const cellProperty = row.insertCell(2);
            cellName.textContent = tenant.name;
            cellEmail.textContent = tenant.email;
            cellProperty.textContent = tenant.property;
        });
    }

    function updateMaintenanceTable() {
        maintenanceTable.innerHTML = "";
        maintenanceRequests.forEach(function(request) {
            const row = maintenanceTable.insertRow();
            const cellProperty = row.insertCell(0);
            const cellDescription = row.insertCell(1);
            const cellStatus = row.insertCell(2);
            cellProperty.textContent = request.property;
            cellDescription.textContent = request.description;
            cellStatus.textContent = request.status;
        });
    }

    function updatePropertySelectOptions() {
        const tenantPropertySelect = document.getElementById("tenant-property");
        const maintenancePropertySelect = document.getElementById("maintenance-property");
        tenantPropertySelect.innerHTML = "";
        maintenancePropertySelect.innerHTML = "";
        properties.forEach(function(property) {
            const option = document.createElement("option");
            option.value = property.name;
            option.textContent = property.name;
            tenantPropertySelect.appendChild(option);
            maintenancePropertySelect.appendChild(option.cloneNode(true));
        });
    }
});
