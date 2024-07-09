export interface GetThingModelStatusInnerResponse {
    Code: number;
    Message: string;
    RequestId: string;
    LocalizedMsg: string;
    Data: {
        RbacTenantId: string;
        Status: number;
        ProductKey: string;
        ModifiedTime: number;
        OutTime: number;
        InstanceId: string;
        Info: string;
    };
}
