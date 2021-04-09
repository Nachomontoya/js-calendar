function addNewTemplate(containerId, templateId) {
    const templateContent = document.querySelector(`#${templateId}`).content;
    document.getElementById(containerId).appendChild(document.importNode(templateContent, true));
}

function updateTemplate(previousStep, containerId, templateId) {
    document.getElementById(previousStep)?.remove();
    addNewTemplate(containerId, templateId);
}

document.getElementById('monthView-btn').addEventListener("click", (event)=>{
    if(document.querySelector(".mainContent-section").firstElementChild.id === "year-section"){
        event.target.disabled=true;
        document.getElementById("yearView-btn").disabled=false;
        updateTemplate("year-section","mainContent-section","month-template");
    }
});
document.getElementById('yearView-btn').addEventListener("click", (event)=>{
    if(document.querySelector(".mainContent-section").firstElementChild.id === "month-section"){
        event.target.disabled=true;
        document.getElementById("monthView-btn").disabled=false;
        updateTemplate("month-section","mainContent-section","year-template");
        calendarConstructor();
    }
});
addNewTemplate("mainContent-section", "month-template");

hideModal();
document.getElementById("createEventBtn").addEventListener("click", showModal);
document.getElementById("cancelBtn").addEventListener('click', hideModal);
document.getElementById("saveBtn").addEventListener('click', saveEvent);

document.addEventListener("keyup", e => {
    if (e.key === "Escape" && document.querySelector(".modal.showUp")) {
        hideModal();
    }
});

document.getElementById("endDateCheckboxId").addEventListener('click', setCheckboxVisibility);
document.getElementById("reminderCheckboxId").addEventListener('click', setCheckboxVisibility);

function showModalWithDay() {
    //set calendar with selected day
    showModal();
}

function showModal() {
    let modal = document.getElementById("modalDiv");
    modal.classList.add('showUp');
    modal.style.display = "block";
}

function hideModal() {
    let modal = document.getElementById("modalDiv");
    modal.classList.remove('showUp')
    modal.style.display = "none";
}

function saveEvent() {

    // reminder -> currentDate y EndDate
    // endDate > startDate


}

function setCheckboxVisibility(event) {
    let id = event.target.id.replace('Checkbox', '');
    document.getElementById(id).disabled = !event.target.checked;
}