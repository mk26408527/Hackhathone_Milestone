document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ResumeForm') as HTMLFormElement;
    const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

    form?.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;

        const resumeHTML = `
            <h2>Editable Resume</h2>
            <p>Name:<span contenteditable="true"> ${name}</span></p>
            <p>Email:<span contenteditable="true"> ${email}</span></p>
            <p>Phone:<span contenteditable="true"> ${phone}</span></p>
            <h3><b>Education</b></h3>
            <p contenteditable="true">${education}</p>
            <h3><b>Experience</b></h3>
            <p contenteditable="true">${experience}</p>
            <h3><b>Skills</h3>
            <p contenteditable="true">${skills}</p>
        `;

        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        } else {
            console.error('ResumeDisplay element not found');
        }
    });
});
