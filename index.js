const textbox = document.getElementById("textbox");
const sbutton = document.getElementById("sbutton");
const result = document.getElementById("result");

const apiKey = "73306abea5eaf797a803906be4f15e92";

sbutton.addEventListener("click", function () {
    const city = textbox.value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            result.innerHTML = `
                <h3>${data.name}</h3>
                <p>🌡 Temperature: ${data.main.temp} °C</p>
                <p>☁️ Condition: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            result.innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
});
