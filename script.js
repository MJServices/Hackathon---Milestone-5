 
  // Get form fields and display elements
  const nameField = document.getElementById("nameField");
  const contactField = document.getElementById("contactField");
  const addressField = document.getElementById("addressField");
  const fbField = document.getElementById("fbField");
  const instaField = document.getElementById("instaField");
  const linkedInField = document.getElementById("linkedInField");
  const objectiveField = document.getElementById("objectiveField");
  const imgField = document.getElementById("imgField");
  const profileImage = document.querySelector(".myimg");
  
  // Target template areas for the resume
  const nameT1 = document.getElementById("nameT1");
  const nameT2 = document.getElementById("nameT2");
  const contactT = document.getElementById("contactT");
  const adT = document.getElementById("adT");
  const fbT = document.getElementById("fbT");
  const instaT = document.getElementById("instaT");
  const linkT = document.getElementById("linkT");
  const objT = document.getElementById("objT");
  const weT = document.getElementById("weT");
  const acT = document.getElementById("acT");
  
  // Validate the form
  function validateForm() {
    const name = nameField.value;
    const contact = contactField.value;
    const address = addressField.value;
    const objective = objectiveField.value;
    const skills = document.querySelectorAll(".skillsField");
    const workExperience = document.querySelectorAll(".weField");
    const academicQualification = document.querySelectorAll(".AcField");
  
    if (
      name === "" ||
      contact === "" ||
      address === "" ||
      objective === "" ||
      Array.from(skills).some(skill => skill.value.trim() === "") ||
      Array.from(workExperience).some(work => work.value.trim() === "") ||
      Array.from(academicQualification).some(ac => ac.value.trim() === "")
    ) {
      alert("Please fill in all fields before generating the CV.");
      return false; // Prevents the CV generation
    }
    return true; // Proceed with CV generation
  }
  
  // Generate CV
  function generateCV() {
    if (validateForm()) {
      // Hide the form and show the resume template
      document.getElementById("Resume-Form").style.display = "none";
      document.getElementById("Resume-Template").style.display = "block";
  
      // Personal Information
      nameT1.innerText = nameField.value;
      nameT2.innerText = nameField.value;
      contactT.innerText = contactField.value;
      adT.innerText = addressField.value;
  
      // Social Links
      fbT.href = fbField.value || "#";
      fbT.innerText = fbField.value || "Facebook";
      instaT.href = instaField.value || "#";
      instaT.innerText = instaField.value || "Instagram";
      linkT.href = linkedInField.value || "#";
      linkT.innerText = linkedInField.value || "LinkedIn";
  
      // Objective
      objT.innerText = objectiveField.value || "Your Objective goes here.";
  
      // Skills
      const skillsElement = document.querySelector(".skills-box ul");
      skillsElement.innerHTML = ""; // Clear existing skills
      const skillsList = document.querySelectorAll(".skillsField");
      skillsList.forEach(skill => {
        if (skill.value.trim() !== "") {
          let li = document.createElement("li");
          li.innerText = skill.value.trim();
          skillsElement.appendChild(li);
        }
      });
  
      // Work Experience
      const workExperienceElement = document.getElementById("weT");
      workExperienceElement.innerHTML = ""; // Clear existing work experience
      const workExperienceList = document.querySelectorAll(".weField");
      workExperienceList.forEach(workField => {
        if (workField.value.trim() !== "") {
          let li = document.createElement("li");
          li.innerText = workField.value.trim();
          workExperienceElement.appendChild(li);
        }
      });
  
      // Academic Qualification
      const academicElement = document.getElementById("acT");
      academicElement.innerHTML = ""; // Clear existing academic qualifications
      const academicList = document.querySelectorAll(".AcField");
      academicList.forEach(acField => {
        if (acField.value.trim() !== "") {
          let li = document.createElement("li");
          li.innerText = acField.value.trim();
          academicElement.appendChild(li);
        }
      });
  
      // Profile Image
      const file = imgField.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          profileImage.src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }
  
  // Add new work experience field
  function addNewweField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("placeholder", "Enter your Work experience");
    newNode.setAttribute("rows", 3);
    document.getElementById("we").appendChild(newNode);
  }
  
  // Add new academic qualification field
  function addNewAcField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "AcField", "mt-2");
    newNode.setAttribute("placeholder", "Enter your Academic Qualification");
    newNode.setAttribute("rows", 3);
    document.getElementById("Ac").appendChild(newNode);
  }
  
  // Add new skills field
  function addNewSkillsField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "skillsField", "mt-2");
    newNode.setAttribute("placeholder", "Enter your skill");
    newNode.setAttribute("rows", 3);
    document.getElementById("skills").appendChild(newNode);
  }
  
  // Generate CV Below
  function generateCVBelow() {
    if (validateForm()) {
      // Show the resume template
      document.getElementById('Resume-Template').style.display = 'block';
  
      // Capture the values from the form fields
      nameT1.innerText = nameField.value;
      nameT2.innerText = nameField.value;
      contactT.innerText = contactField.value;
      adT.innerText = addressField.value;
      objT.innerText = objectiveField.value;
  
      // Capture the important links
      fbT.href = fbField.value || "#";
      fbT.innerText = fbField.value || "Facebook";
      instaT.href = instaField.value || "#";
      instaT.innerText = instaField.value || "Instagram";
      linkT.href = linkedInField.value || "#";
      linkT.innerText = linkedInField.value || "LinkedIn";
  
      // Capture the work experience
      let workExperienceElement = document.getElementById('weT');
      workExperienceElement.innerHTML = "";
      document.querySelectorAll('.weField').forEach(e => {
        if (e.value.trim() !== "") {
          let listItem = document.createElement('li');
          listItem.textContent = e.value.trim();
          workExperienceElement.appendChild(listItem);
        }
      });
  
      // Capture the academic qualifications
      let academicElement = document.getElementById('acT');
      academicElement.innerHTML = "";
      document.querySelectorAll('.AcField').forEach(e => {
        if (e.value.trim() !== "") {
          let listItem = document.createElement('li');
          listItem.textContent = e.value.trim();
          academicElement.appendChild(listItem);
        }
      });
  
      // Capture the skills
      let skillsElement = document.querySelector('.skills-box ul');
      skillsElement.innerHTML = "";
      document.querySelectorAll('.skillsField').forEach(e => {
        if (e.value.trim() !== "") {
          let listItem = document.createElement('li');
          listItem.textContent = e.value.trim();
          skillsElement.appendChild(listItem);
        }
      });
  
      // Profile Image
      const file = imgField.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.querySelector('.myimg').src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }
  
    // Function to edit the resume
    function editResume() {
      // Show the form again
      document.getElementById('Resume-Form').style.display = 'block';
      document.getElementById('Resume-Template').style.display = 'none';
  
      // Populate the form with existing values from the resume
      document.getElementById('nameField').value = document.getElementById('nameT1').innerText;
      document.getElementById('contactField').value = document.getElementById('contactT').innerText;
      document.getElementById('addressField').value = document.getElementById('adT').innerText;
      document.getElementById('objectiveField').value = document.getElementById('objT').innerText;
    }
  
    function printCV() {
        window.print(); 
    }

    function generateShareableLink() {
        const name = document.getElementById("nameField").value;
        const contact = document.getElementById("contactField").value;
        const address = document.getElementById("addressField").value;
        const fb = document.getElementById("fbField").value;
        const insta = document.getElementById("instaField").value;
        const linkedin = document.getElementById("linkedInField").value;
        const objective = document.getElementById("objectiveField").value;
        const skills = document.querySelectorAll(".skillsField");
        const workExperience = document.querySelectorAll(".weField");
        const academicQualification = document.querySelectorAll(".AcField");
      
        const url = new URL(window.location.href);
      
        // Add parameters to the URL
        url.searchParams.set('name', encodeURIComponent(name));
        url.searchParams.set('contact', encodeURIComponent(contact));
        url.searchParams.set('address', encodeURIComponent(address));
        url.searchParams.set('fb', encodeURIComponent(fb));
        url.searchParams.set('insta', encodeURIComponent(insta));
        url.searchParams.set('linkedin', encodeURIComponent(linkedin));
        url.searchParams.set('objective', encodeURIComponent(objective));
      
        // Add multiple skills, work experiences, and academic qualifications
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
      
        // Display the shareable link in the input field
        document.getElementById("shareableLink").value = shareableLink;
    }
      
      // Function to copy the shareable link to the clipboard
    function copyLink() {
        const copyText = document.getElementById("shareableLink");
        copyText.select();
        document.execCommand("copy");
        alert("Shareable link copied to clipboard!");
      }
      