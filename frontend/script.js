async function loadDetails() {
  try {
    const res = await fetch("/api/student-details");
    const data = await res.json();

    document.getElementById("name").textContent = data.student_name;
    document.getElementById("roll").textContent = data.roll_number;
    document.getElementById("register").textContent = data.register_number;
  } catch (error) {
    console.error("Error fetching student details:", error);
  }
}

window.onload = loadDetails;
