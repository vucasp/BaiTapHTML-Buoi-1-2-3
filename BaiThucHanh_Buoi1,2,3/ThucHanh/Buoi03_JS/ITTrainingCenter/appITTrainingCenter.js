// ==========================================
// DEMO & KẾT NỐI BAN ĐẦU
// ==========================================
console.log("IT Training Center - JavaScript loaded");

// 2.2. Demo Welcome với getElementById()
const centerName = "IT Training Center";
const slogan = "Learn Technology - Build Your Future";

const welcomeTitle = document.getElementById("welcome-title");
const welcomeMessage = document.getElementById("welcome-message");

if (welcomeTitle) welcomeTitle.innerHTML = "Welcome to " + centerName;
if (welcomeMessage) welcomeMessage.innerText = slogan;


// ==========================================
// BÀI 1 – AVAILABLE COURSES: ARRAY + querySelectorAll()
// ==========================================
const courseNames = ["HTML & CSS", "JavaScript", "ASP.NET MVC", "Database"];
const courseTitleElements = document.querySelectorAll(".course-name");

courseTitleElements.forEach((el, index) => {
    if (courseNames[index]) {
        el.innerHTML = courseNames[index];
    }
});


// ==========================================
// BÀI 2 – RIGHT ASIDE: for...of
// ==========================================
const quickCourses = ["HTML & CSS", "JavaScript", "ASP.NET MVC", "Database"];

function showQuickCourses() {
    const quickListEl = document.getElementById("quick-course-list");
    if (!quickListEl) return;

    let output = "";
    for (const course of quickCourses) {
        output += `<li><a href="#courses">🔹 ${course}</a></li>`;
    }
    quickListEl.innerHTML = output;
}
showQuickCourses();


// ==========================================
// BÀI 3 – COURSE DETAIL: OBJECT + for...in + onclick
// ==========================================
const jsCourse = {
    name: "JavaScript",
    duration: "6 Weeks",
    tuition: "$150",
    level: "Basic"
};

function showCourseDetail() {
    const detailEl = document.getElementById("course-detail");
    if (!detailEl) return;

    let output = "<h4>Chi tiết khóa học:</h4>";
    for (const key in jsCourse) {
        output += `<p><strong>${key}:</strong> ${jsCourse[key]}</p>`;
    }
    detailEl.innerHTML = output;
}


// ==========================================
// BÀI 4 – COURSE REGISTRATION: if...else + switch + DOM
// ==========================================
function getTuition(course) {
    let tuition = 0;
    switch (course) {
        case "HTML & CSS":
        case "html":
            tuition = 100;
            break;
        case "JavaScript":
        case "js":
            tuition = 150;
            break;
        case "ASP.NET MVC":
        case "net":
            tuition = 200;
            break;
        case "Database":
        case "db":
            tuition = 150;
            break;
        default:
            tuition = 0;
    }
    return tuition;
}

function registerCourse() {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const courseSelect = document.getElementById("course");
    const course = courseSelect ? courseSelect.value : "";

    const learningModeEl = document.querySelector('input[name="learningMode"]:checked');
    const resultEl = document.getElementById("registration-result");

    // 3. Kiểm tra rỗng
    if (!fullName || !email || !phone || !course) {
        resultEl.innerHTML = "<p style='color: red;'>Vui lòng nhập đầy đủ thông tin bắt buộc!</p>";
        return;
    }

    // 4. Kiểm tra Phone đúng 10 chữ số
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        resultEl.innerHTML = "<p style='color: red;'>Số điện thoại phải bao gồm đúng 10 chữ số!</p>";
        return;
    }

    // 5. Kiểm tra Learning Mode
    if (!learningModeEl) {
        resultEl.innerHTML = "<p style='color: red;'>Vui lòng chọn hình thức học (Learning Mode)!</p>";
        return;
    }
    const learningMode = learningModeEl.value;

    // 6. Tính học phí
    const tuition = getTuition(course);

    // 7. Hiển thị kết quả thành công
    resultEl.innerHTML = `
        <div style="background: #e2eafc; padding: 15px; border-radius: 5px; margin-top: 10px;">
            <h4 style="color: #0b2545;">🎉 Registration Successful!</h4>
            <p><strong>Họ và tên:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Số điện thoại:</strong> ${phone}</p>
            <p><strong>Khóa học:</strong> ${course}</p>
            <p><strong>Hình thức học:</strong> ${learningMode}</p>
            <p><strong>Học phí:</strong> $${tuition}</p>
        </div>
    `;
}


// ==========================================
// BÀI 5 – STUDENT REVIEWS: getElementsByClassName()
// ==========================================
const reviewNames = ["Nguyen Van B", "Tran Thi C", "Le Minh D"];
const reviewElements = document.getElementsByClassName("review-name");

for (let i = 0; i < reviewElements.length; i++) {
    if (reviewNames[i]) {
        reviewElements[i].innerHTML = reviewNames[i];
    }
}


// ==========================================
// BÀI 6 – FOOTER: getElementsByTagName()
// ==========================================
const footerData = [
    "Email: ABC@gmail.com",
    "Phone: 10234",
    "Address: 828, Su Vanh Hanh, Ho Chi Minh City",
    "Copyright © 2026 – IT Training Center"
];

const footer = document.getElementById("footer-info");
if (footer) {
    const footerItems = footer.getElementsByTagName("p");
    for (let i = 0; i < footerItems.length; i++) {
        if (footerData[i]) {
            footerItems[i].innerText = footerData[i];
        }
    }
}


// ==========================================
// BÀI 7 – DOM READING: innerHTML, innerText, textContent
// ==========================================
function showInnerHTML() {
    const demo = document.getElementById("demo-content");
    const result = document.getElementById("content-result");
    if (demo && result) {
        result.textContent = demo.innerHTML;
    }
}

function showInnerText() {
    const demo = document.getElementById("demo-content");
    const result = document.getElementById("content-result");
    if (demo && result) {
        result.textContent = demo.innerText;
    }
}

function showTextContent() {
    const demo = document.getElementById("demo-content");
    const result = document.getElementById("content-result");
    if (demo && result) {
        result.textContent = demo.textContent;
    }
}