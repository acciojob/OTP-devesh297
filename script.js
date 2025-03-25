//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const codes = document.querySelectorAll(".code");

    codes[0].focus(); // Auto-focus on first input

    codes.forEach((code, index) => {
        code.addEventListener("input", (e) => {
            if (e.target.value.match(/[0-9]/)) {  // Allow only numbers
                if (index < codes.length - 1) {
                    codes[index + 1].focus();  // Move to next input
                }
            } else {
                e.target.value = "";  // Clear invalid input
            }
        });

        code.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {
                if (e.target.value === "" && index > 0) {
                    codes[index - 1].focus();  // Move focus back
                }
            }
        });
    });
});
