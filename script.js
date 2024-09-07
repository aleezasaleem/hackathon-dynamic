// Listen for form submission
document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Capture form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Populate the resume output section with the form data
    document.getElementById('outputName').textContent = name;
    document.getElementById('outputEmail').textContent = email;
    document.getElementById('outputEducation').textContent = education;
    document.getElementById('outputExperience').textContent = experience;
    document.getElementById('outputSkills').textContent = skills;

    // Show the resume output section and download button
    document.getElementById('resumeOutput').style.display = 'block';
    document.getElementById('downloadBtn').style.display = 'block';
});

// Function to download the resume as a PDF
document.getElementById('downloadBtn').addEventListener('click', function () {
    const resumeElement = document.getElementById('resumeOutput');

    // Use html2canvas to capture the resume section as an image
    html2canvas(resumeElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();

        // Add the image to the PDF
        pdf.addImage(imgData, 'PNG', 10, 10, 180, 160); // Adjust dimensions as needed

        // Save the PDF
        pdf.save('resume.pdf');
    });
});