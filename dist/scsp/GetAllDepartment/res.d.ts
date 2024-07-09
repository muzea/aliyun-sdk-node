export interface GetAllDepartmentResponse {
    RequestId: string;
    Code: string;
    Message: string;
    Data: {
        DepartmentId: number;
        DepartmentName: string;
        Status: number;
    }[];
    Success: boolean;
}
