console.log(div)
async function data() {
    try {
        let response = await fetch('http://localhost:3000/test'); // Fetch data from backend

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Handle non-200 status codes
        }

        let data = await response.json(); // Parse the JSON response

        data.forEach(e=>{
            for(let k in e){
                div.innerHTML += `<strong><mark>${k}</mark></strong>: ${e[k]} \n`
            }
        })
    } catch (error) {
    }
}

data();
