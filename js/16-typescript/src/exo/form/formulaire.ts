const inputs = document.querySelectorAll('input:not([type="submit"])'),
    pass = document.querySelector<HTMLInputElement>('#pass'),
    progress = document.querySelector<HTMLDivElement>('.progress'),
    rPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

inputs.forEach(inp => inp.addEventListener("change", verify));
pass?.addEventListener("input", check);
function verify(e: Event) {
    let r: RegExp= / /;
    if(!(e.target instanceof HTMLInputElement))return;
    switch (e.target!.id) {
        case "user":
            r = /^[A-Za-z\-_]+$/;
            break;
        case "telephone":
            // r=/^\d+$/;
            r = /^(\+33|0)\d([\s\.\-]?\d{2}){4}$/;
            break;
        case "email":
            r = /^[a-z0-9\-_\.]+@[a-z0-9\-_\.]+\.[a-z]{2,4}$/;
            break;
        case "pass":
            r = rPass;
            break;
        case "passBis":
            modify(e.target, e.target.value === pass?.value);
            return;
    }
    modify(e.target, r && r.test(e.target.value));
}

function modify(target: HTMLElement, bool: boolean) {
    if (bool) {
        target.style.borderColor = "";
        target.style.backgroundColor = "";
    } else {
        target.style.borderColor = "red";
        target.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    }
}

function check(e: Event): void {
    let v = 0;
    if(!(e.target instanceof HTMLInputElement))return;
    v += /[a-z]/.test(e.target.value) ? 1 : 0;
    v += /[A-Z]/.test(e.target.value) ? 1 : 0;
    v += /\d/.test(e.target.value) ? 1 : 0;
    v += /[@$!%*?&]/.test(e.target.value) ? 1 : 0;
    v += e.target.value.length >= 8 ? 1 : 0;
    v -= /^[A-Za-z\d@$!%*?&]+$/.test(e.target.value) ? 0 : 1;
    if(!progress) return;
    switch (v) {
        case -1:
        case 0:
            progress.style.width = "0";
            progress.style.backgroundColor = "";
            break;
        case 1:
            progress.style.width = "20%";
            progress.style.backgroundColor = "red";
            break;
        case 2:
            progress.style.width = "40%";
            progress.style.backgroundColor = "orangered";
            break;
        case 3:
            progress.style.width = "60%";
            progress.style.backgroundColor = "orange";
            break;
        case 4:
            progress.style.width = "80%";
            progress.style.backgroundColor = "yellow";
            break;
        case 5:
            progress.style.width = "100%";
            progress.style.backgroundColor = "green";
            break;
    }
}