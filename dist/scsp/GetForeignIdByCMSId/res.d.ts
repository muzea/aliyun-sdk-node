export interface GetForeignIdByCMSIdResponse {
    RequestId: string;
    Message: string;
    Data: {
        Status: number;
        CustomerTypeId: number;
        Avatar: string;
        Gender: string;
        ForeignId: string;
        UserId: string;
        Nick: string;
        Anonymity: boolean;
        Phone: string;
        Code: string;
        Success: boolean;
    };
}
