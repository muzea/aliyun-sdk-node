export interface DeleteAlertContactResponse {
    body: {
        status: boolean;
        msg: string;
        contact_id: string;
    }[];
}
