const sectionIds = ['#Intro', '#mySkills', '#myProject', '#myCertificate'];
const navClasses = ['.about-us', '.techSkills', '.projects', '.Achievements'];

for (let i = 0; i < sectionIds.length; i++) {
    const box = document.querySelector(sectionIds[i]);
    if (!box) {
        console.warn(`Element not found for selector: ${sectionIds[i]}`);
        continue;
    }

    box.addEventListener('click', () => {
        const boxSection = document.querySelector(navClasses[i]);
        if (!boxSection) {
            console.warn(`Element not found for nav class: ${navClasses[i]}`);
            return;
        }

        boxSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        boxSection.style.textShadow = "rgb(100, 0, 111) 1px 0 7px";

        setTimeout(() => {
            boxSection.style.textShadow = "none";
        }, 4000);
    });
}

const contact = document.querySelector("#contactMe");
contact.addEventListener('click', () => {
    const contactSection = document.querySelector(".contact a i");
    contactSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    setTimeout(() => {
        contactSection.style.animation = "none";
    }, 4000);
});
