export interface QueryServicerByIdResponse {
    RequestId: string;
    Code: string;
    Message: string;
    Success: boolean;
    Data: {
        ServicerId: number;
        RealName: string;
        UserStatus: number;
        ShowName: string;
        AccountName: string;
        DepartmentId: number;
    };
}
