export class LeaveModel {
    private userID: string;
    private fromDate: string;
    private toDate: string;
    private typeOfLeave: string;
    private reasonOfLeave: string;

    constructor(userID: string,
        fromDate: string,
        toDate: string,
        typeOfLeave: string,
        reasonOfLeave: string) {
        this.userID = userID;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.reasonOfLeave = reasonOfLeave;
        this.typeOfLeave = typeOfLeave;

    }

}