export interface QueryServicerByDepartmentAndMixNameResponse {
    RequestId: string;
    Code: string;
    Message: string;
    Success: boolean;
    Data: {
        Total: number;
        Results: {
            ServicerId: number;
            RealName: string;
            UserStatus: number;
            ShowName: string;
            AccountName: string;
            DepartmentId: number;
            DepartmentName: string;
        }[];
    };
}
