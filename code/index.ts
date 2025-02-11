type User = {
    firstName: string
    age: number
}


type jobRole = {
    id: number
    role: string
}

type employee = User & jobRole

const e1: employee = {
    firstName: "Renato",
    age: 44,
    id: 221,
    role: "Admin"
}