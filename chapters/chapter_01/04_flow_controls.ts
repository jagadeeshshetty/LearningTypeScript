module flow_control_demo {

    // if

    let isValid1: boolean = true;

    if (isValid1) {
        alert("is valid!");
    }

    // if ... else

    var isValid2: boolean = true;

    if(isValid2) {
        alert("Is valid!");
    } else {
        alert("Is NOT valid!");
    }

    // inline if

    let isValid3: boolean = true;
    let message = isValid3 ? "Is valid!" : "Is NOT valid!";
    alert(message);

    // switch

    enum AlertLevel{
        info,
        warning,
        error	
    }

    function getAlertSubscribers(level: AlertLevel){
        var emails = new Array<string>();
        switch(level){
            case AlertLevel.info:
                emails.push("cst@domain.com");
                break;
            case AlertLevel.warning:
                emails.push("development@domain.com");
                emails.push("sysadmin@domain.com");
                break;
            case AlertLevel.error:
                emails.push("development@domain.com");
                emails.push("sysadmin@domain.com");
                emails.push("management@domain.com");
                break;
            default:
                throw new Error("Invalid argument!");
        }
        return emails;
    }

    getAlertSubscribers(AlertLevel.info); // ["cst@domain.com"]
    getAlertSubscribers(AlertLevel.warning); // ["development@domain.com", "sysadmin@domain.com"]

    // while

    let i1: number = 0;

    while (i1 < 5) {
        i1 += 1;
        console.log(i1);
    }

    // do ... while

    let i2: number = 0;

    do {
        i2 += 1;
        console.log(i2);
    } while (i2 < 5);

    // for ... in

    var obj: any = { a:1, b:2, c:3 };

    for (var key in obj) {
        console.log(key + " = " + obj[key]);
    }

    // for ... of

    let iterable = [10, 20, 30];

    for (let value of iterable) {
        value += 1;
        console.log(value);
    }

    // for

    for (var i: number = 0; i < 9; i++) {
        console.log(i);
    }

}