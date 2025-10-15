// PROMISE TRACKER
const promiseTracker = document.querySelector("#promise-tracker");
const addPromiseBtn = document.querySelector("#add-promise");

addPromiseBtn.addEventListener("click", addNewPromise);

function addNewPromise() {
    const newPromise = document.createElement("div");
    newPromise.classList.add("promise");
    newPromise.innerHTML = `
                <div>
                    <input type="text" placeholder="Name" name="promise-name" />
                    <select name="promise-complexity">
                        <option value="simple">Simple</option>
                        <option value="complicated">Complicated</option>
                        <option value="puzzling">Puzzling</option>
                    </select>
                    <select name="promise-urency">
                        <option value="laid-back">Laid-Back</option>
                        <option value="urgent">Urgent</option>
                        <option value="critical">Critical</option>
                    </select>
                </div>
                <div>
                    <input class="progress-box" type="button" value="0" />
                    <input class="progress-box" type="button" value="0" />
                    <input class="progress-box" type="button" value="0" />
                </div>
                <textarea name="promise-notes" placeholder="Notes"></textarea>
              `;
    promiseTracker.appendChild(newPromise);
}
