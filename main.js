let btn_fetch = document.getElementById('fetch');
let erroe_msg = document.getElementById('error');

let tbody = document.getElementById('tbody');

console.log("working");

btn_fetch.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);





    xhr.onload = () => {
        let status = xhr.status;
        if (status === 404) {
            erroe_msg.innerHTML = "some Error message:- " + status + " page not found";
            erroe_msg.style.display = "block";
        }
        else {
            console.log("working");

            var res_data = JSON.parse(xhr.responseText);
            erroe_msg.innerHTML = "Message:- OK page found" + "<br> status:-" + res_data.status;
            erroe_msg.style.display = "block";
            erroe_msg.style.color = "var(--bg-color-500)"
            console.log(res_data);

            for (i in res_data) {
                console.log(i);
                if (i == "student") {
                    for (let j = 0; j < res_data[i].length; j++) {

                        let tr = document.createElement("tr");
                        tbody.appendChild(tr);
                        console.log("\n");
                        for (new_d in res_data[i][j]) {
                            let td = document.createElement("td");
                            tr.appendChild(td);

                            td.innerHTML = res_data[i][j][new_d];

                            console.log(res_data[i][j][new_d]);
                        }
                    }
                }
            }

        }
    }




    xhr.send();
})