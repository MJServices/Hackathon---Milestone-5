// Define form fields and display elements
const nameField = document.getElementById("nameField") as HTMLInputElement;
const contactField = document.getElementById("contactField") as HTMLInputElement;
const addressField = document.getElementById("addressField") as HTMLInputElement;
const fbField = document.getElementById("fbField") as HTMLInputElement;
const instaField = document.getElementById("instaField") as HTMLInputElement;
const linkedInField = document.getElementById("linkedInField") as HTMLInputElement;
const objectiveField = document.getElementById("objectiveField") as HTMLInputElement;
const imgField = document.getElementById("imgField") as HTMLInputElement;
const profileImage = document.querySelector(".myimg") as HTMLImageElement;

// Define target template areas for the resume
const nameT1 = document.getElementById("nameT1") as HTMLSpanElement;
const nameT2 = document.getElementById("nameT2") as HTMLSpanElement;
const contactT = document.getElementById("contactT") as HTMLSpanElement;
const adT = document.getElementById("adT") as HTMLSpanElement;
const fbT = document.getElementById("fbT") as HTMLAnchorElement;
const instaT = document.getElementById("instaT") as HTMLAnchorElement;
const linkT = document.getElementById("linkT") as HTMLAnchorElement;
const objT = document.getElementById("objT") as HTMLSpanElement;
const weT = document.getElementById("weT") as HTMLUListElement;
const acT = document.getElementById("acT") as HTMLUListElement;

// Form validation function
function validateForm(): boolean {
    const name = nameField.value;
    const contact = contactField.value;
    const address = addressField.value;
    const objective = objectiveField.value;
    const skills = document.querySelectorAll(".skillsField") as NodeListOf<HTMLTextAreaElement>;
    const workExperience = document.querySelectorAll(".weField") as NodeListOf<HTMLTextAreaElement>;
    const academicQualification = document.querySelectorAll(".AcField") as NodeListOf<HTMLTextAreaElement>;

    if (
        !name ||
        !contact ||
        !address ||
        !objective ||
        Array.from(skills).some(skill => skill.value.trim() === "") ||
        Array.from(workExperience).some(work => work.value.trim() === "") ||
        Array.from(academicQualification).some(ac => ac.value.trim() === "")
    ) {
        alert("Please fill in all fields before generating the CV.");
        return false;
    }
    return true;
}

// Generate CV function
function generateCV(): void {
    if (validateForm()) {
        // Hide the form and show the resume template
        (document.getElementById("Resume-Form") as HTMLElement).style.display = "none";
        (document.getElementById("Resume-Template") as HTMLElement).style.display = "block";

        // Populate personal information
        nameT1.innerText = nameField.value;
        nameT2.innerText = nameField.value;
        contactT.innerText = contactField.value;
        adT.innerText = addressField.value;

        // Social links
        fbT.href = fbField.value || "#";
        fbT.innerText = fbField.value || "Facebook";
        instaT.href = instaField.value || "#";
        instaT.innerText = instaField.value || "Instagram";
        linkT.href = linkedInField.value || "#";
        linkT.innerText = linkedInField.value || "LinkedIn";

        // Objective
        objT.innerText = objectiveField.value || "Your Objective goes here.";

        // Skills
        const skillsElement = document.querySelector(".skills-box ul") as HTMLUListElement;
        skillsElement.innerHTML = "";
        const skillsList = document.querySelectorAll(".skillsField") as NodeListOf<HTMLTextAreaElement>;
        skillsList.forEach(skill => {
            if (skill.value.trim() !== "") {
                const li = document.createElement("li");
                li.innerText = skill.value.trim();
                skillsElement.appendChild(li);
            }
        });

        // Work Experience
        const workExperienceElement = document.getElementById("weT") as HTMLUListElement;
        workExperienceElement.innerHTML = "";
        const workExperienceList = document.querySelectorAll(".weField") as NodeListOf<HTMLTextAreaElement>;
        workExperienceList.forEach(workField => {
            if (workField.value.trim() !== "") {
                const li = document.createElement("li");
                li.innerText = workField.value.trim();
                workExperienceElement.appendChild(li);
            }
        });

        // Academic Qualification
        const academicElement = document.getElementById("acT") as HTMLUListElement;
        academicElement.innerHTML = "";
        const academicList = document.querySelectorAll(".AcField") as NodeListOf<HTMLTextAreaElement>;
        academicList.forEach(acField => {
            if (acField.value.trim() !== "") {
                const li = document.createElement("li");
                li.innerText = acField.value.trim();
                academicElement.appendChild(li);
            }
        });

        // Profile Image
        const file = imgField.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                profileImage.src = event.target?.result as string;
            };
            reader.readAsDataURL(file);
        }
    }
}

// Add new work experience field
function addNewweField(): void {
    const newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.placeholder = "Enter your Work experience";
    newNode.rows = 3;
    document.getElementById("we")?.appendChild(newNode);
}

// Add new academic qualification field
function addNewAcField(): void {
    const newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "AcField", "mt-2");
    newNode.placeholder = "Enter your Academic Qualification";
    newNode.rows = 3;
    document.getElementById("Ac")?.appendChild(newNode);
}

// Add new skills field
function addNewSkillsField(): void {
    const newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "skillsField", "mt-2");
    newNode.placeholder = "Enter your skill";
    newNode.rows = 3;
    document.getElementById("skills")?.appendChild(newNode);
}

// Edit resume
function editResume(): void {
    (document.getElementById("Resume-Form") as HTMLElement).style.display = "block";
    (document.getElementById("Resume-Template") as HTMLElement).style.display = "none";

    nameField.value = nameT1.innerText;
    contactField.value = contactT.innerText;
    addressField.value = adT.innerText;
    objectiveField.value = objT.innerText;
}

// Print CV
function printCV(): void {
    window.print();
}

// Generate a shareable link for the resume
function generateShareableLink(): void {
    const name = nameField.value;
    const contact = contactField.value;
    const address = addressField.value;
    const fb = fbField.value;
    const insta = instaField.value;
    const linkedin = linkedInField.value;
    const objective = objectiveField.value;
    const skills = document.querySelectorAll(".skillsField") as NodeListOf<HTMLTextAreaElement>;
    const workExperience = document.querySelectorAll(".weField") as NodeListOf<HTMLTextAreaElement>;
    const academicQualification = document.querySelectorAll(".AcField") as NodeListOf<HTMLTextAreaElement>;

    const url = new URL(window.location.href);

    // Add parameters to the URL
    url.searchParams.set("name", encodeURIComponent(name));
    url.searchParams.set("contact", encodeURIComponent(contact));
    url.searchParams.set("address", encodeURIComponent(address));
    url.searchParams.set("fb", encodeURIComponent(fb));
    url.searchParams.set("insta", encodeURIComponent(insta));
    url.searchParams.set("linkedin", encodeURIComponent(linkedin));
    url.searchParams.set("objective", encodeURIComponent(objective));

    // Add skills, work experiences, and academic qualifications
    skills.forEach((skill, index) => {
        url.searchParams.set(`skills[${index}]`, encodeURIComponent(skill.value));
    });
    workExperience.forEach((work, index) => {
        url.searchParams.set(`workExperience[${index}]`, encodeURIComponent(work.value));
    });
    academicQualification.forEach((ac, index) => {
        url.searchParams.set(`academicQualification[${index}]`, encodeURIComponent(ac.value));
    });

    const shareableLink = url.toString();
    const shareableLinkInput = document.getElementById("shareableLink") as HTMLInputElement;
    shareableLinkInput.value = shareableLink;
}

// Copy the shareable link to the clipboard
function copyLink(): void {
    const copyText = document.getElementById("shareableLink") as HTMLInputElement;
    copyText.select();
    document.execCommand("copy");
    alert("Shareable link copied to clipboard!");
}
