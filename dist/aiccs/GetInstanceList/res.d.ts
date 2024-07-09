export interface GetInstanceListResponse {
    HttpStatusCode: number;
    RequestId: string;
    Success: boolean;
    Code: string;
    Message: string;
    PageSize: number;
    PageNumber: number;
    TotalCount: number;
    CommodityInstances: {
        Name: string;
        InstanceId: string;
    }[];
}
