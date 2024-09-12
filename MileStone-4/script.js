document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('ResumeForm');
    var resumeDisplayElement = document.getElementById('resume-display');
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var resumeHTML = "\n            <h2>Editable Resume</h2>\n            <p>Name:<span contenteditable=\"true\"> ".concat(name, "</span></p>\n            <p>Email:<span contenteditable=\"true\"> ").concat(email, "</span></p>\n            <p>Phone:<span contenteditable=\"true\"> ").concat(phone, "</span></p>\n            <h3><b>Education</b></h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n            <h3><b>Experience</b></h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n            <h3><b>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        else {
            console.error('ResumeDisplay element not found');
        }
    });
});
