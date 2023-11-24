document.addEventListener("DOMContentLoaded", function() {
	const downloadButtons = document.querySelectorAll(".randomImgDownload");
	const iinInput = document.getElementById("IIN");
    const iinValidationMessage = document.getElementById("iinValidationMessage");
    const orderForm = document.getElementById("orderForm");

    orderForm.addEventListener("submit", function (event) {
    	event.preventDefault();
    	alert("Thank you, message successfuly sent!");
    	iinValidationMessage.style.display = "none";
    	orderForm.reset();
    });

  	function validateIIN(iin) {
  		return /^[0-9]{12}$/.test(iin);
  	}

    iinInput.addEventListener("input", () => {
      const iin = iinInput.value;
      if (validateIIN(iin)) {
        iinValidationMessage.textContent = "✅ Valid IIN.";
        iinValidationMessage.style.color = "green";
      } else {
        iinValidationMessage.textContent = "❌ Invalid IIN. It should be a 12-digit number.";
      	iinValidationMessage.style.color = "red";
      }
    });

	downloadButtons.forEach(function(button) {
		button.addEventListener("click", async () => {
			try {
				const response = await fetch("https://source.unsplash.com/random");

				if(response.ok) {
					const blob = await response.blob();
					const url = window.URL.createObjectURL(blob);
					const a = document.createElement("a");
					a.href = url;
					a.download = "random_image.jpg";
					a.style.display = "none";
					document.body.appendChild(a);
					a.click();
					window.URL.revokeObjectURL(url);
				} else {
					alert("Failed to fetch the image.");
				}
			} catch (error) {
				console.error("Error: ", error);
			}
		});
	});
});