/*
RULES:

1. The user can log in with a username and password.

2. If the username and password are correct, the program should show a welcome message and the user’s timeline.

3. If they aren’t correct, the program should say so.
*/

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class UsersLogin {
    constructor(username, password) {
        this.username = username
        this.password = password
    }
}

let dbUsers = []
dbUsers.push(new UsersLogin("alan", "p"))
let menu = 0;

input.question("1: Registrer | 2: Login: ", (i) => {
    menu = Number(i);

    switch (menu) {
        case 1:
            input.question("Write Username: ", (u) => {
                const exists = dbUsers.some(i => i.username === u);

                if (exists) {
                    console.log("This username is in use");
                    input.close();
                    return;
                }

                input.question("Write a password: ", (p) => {
                    dbUsers.push(new UsersLogin(u, p));
                    console.log("User created:", dbUsers);
                    input.close();
                });
            });
            break;

        case 2:
            input.question("Write your user: ", (u) => {
                const exists = dbUsers.some(i => i.username === u);

                if (!exists) {
                    console.log("Usuario no registrado");
                    input.close();
                    return;
                }

                input.question("Write your password: ", (p) => {
                    const pExists = dbUsers.some(i => i.password === p);

                    if (pExists) {
                        console.log("Bienvenido");
                    } else {
                        console.log("Contraseña incorrecta");
                    }

                    input.close();
                });
            });
            break;

        default:
            console.log("Invalid option");
            input.close();
            break;
    }
});



/*
input.question("Write Username: ", (u) => {

        const exists = dbUsers.some(i => i.username === u)

        if (exists) {
            console.log("This username is in use")
            input.close()
            return
            }   

        input.question("Write a password: ", (p) => {

            dbUsers.push(new UsersLogin(u, p))
            console.log("User created:", dbUsers)
            input.close()
        })
    })
*/