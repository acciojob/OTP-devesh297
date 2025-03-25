    document.addEventListener("DOMContentLoaded", function() {
            const codes = document.querySelectorAll(".code");

            codes[0].focus(); // Auto-focus first input

            codes.forEach((code, index) => {
                code.addEventListener("input", (e) => {
                    if (e.target.value.match(/\d/)) { // Allow only numbers
                        if (index < codes.length - 1) {
                            codes[index + 1].focus(); // Move to next field
                        }
                    } else {
                        e.target.value = ""; // Clear invalid input
                    }
                });

                code.addEventListener("keydown", (e) => {
                    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
                        codes[index - 1].focus(); // Move focus back
                    }
                });
            });
        });
   