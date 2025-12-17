class User{
    constructor(name, addr, uname, email,) {
        this.name = name;
        this.addr = addr;
        this.uname = uname;
        this.email = email;
        this.role = "user";
    }

    checkRole() {
        return `you are an ${this.role}`;
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User{
    constructor(name, addr, uname, email) {
        super(name, addr, uname, email);
        this.role = "admin";
    }

    remove() {
        document.querySelectorAll("h1").forEach(function (elem) {
            elem.remove();
        });
    }

}

let u1 = new User("AJ", "Nashik", "aj17", "aj@17.com");
let u2 = new User("XY", "Pune", "xy10", "xy@10.com");
let a1 = new Admin("admin1", "India", "admin123", "admin@123");
