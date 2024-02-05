export class Alumno {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly firstName: string,
        readonly lastName: string,
        readonly email: string,
        readonly password: string
    ) {}
}