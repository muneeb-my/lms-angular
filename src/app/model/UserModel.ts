export class UserModel {

    private userAddress: string;
    private userDateOfBirth: string;


    constructor(
        userAddress: string,

        userDateOfBirth: string,
    ) {


        this.userAddress = userAddress;

        this.userDateOfBirth = userDateOfBirth;
    }

    getuserAddress(): string {
        return this.userAddress;
    }
    getuserDateOfBirth(): string {
        return this.userDateOfBirth;
    }

}