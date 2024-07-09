export interface GetEntityRouteListResponse {
    Code: string;
    Message: string;
    RequestId: string;
    Success: boolean;
    Data: {
        PageNo: number;
        PageSize: number;
        Total: number;
        EntityRouteList: {
            EntityBizCodeType: string;
            GroupId: string;
            EntityId: string;
            ServiceId: string;
            DepartmentId: string;
            EntityBizCode: string;
            UniqueId: number;
            EntityName: string;
            ExtInfo: string;
            EntityRelationNumber: string;
        }[];
    };
}
