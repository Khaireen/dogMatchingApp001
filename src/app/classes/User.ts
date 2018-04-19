export class User {
    login: string;
    email: string;
    password: {
        pass: string;
        confirmPass: string;
    }
    termsAgreedCheckbox: boolean;

    constructor(values: Object = {}) {
        Object.assign (this, values)
    }
}