const api = "/students";

async function loadStudents() {
    const response = await fetch(api);
    const students = await response.json();

    const container = document.getElementById("students");

    container.innerHTML = "";

    students.forEach(student => {
        container.innerHTML += `
            <div class="student">
                <h3>${student.name}</h3>

                <p>Roll No: ${student.rollNo}</p>

                <p>Branch: ${student.branch}</p>

                <p>Year: ${student.year}</p>

                <button onclick="deleteStudent('${student._id}')">
                    Delete
                </button>
            </div>
        `;
    });
}

document.getElementById("studentForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        rollNo: document.getElementById("rollNo").value,
        branch: document.getElementById("branch").value,
        year: document.getElementById("year").value
    };

    await fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    });

    document.getElementById("studentForm").reset();

    loadStudents();
});

async function deleteStudent(id) {
    await fetch(`${api}/${id}`, {
        method: "DELETE"
    });

    loadStudents();
}

loadStudents();