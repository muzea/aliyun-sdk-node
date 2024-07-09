export interface GetEntityRouteResponse {
    Code: string;
    Message: string;
    RequestId: string;
    Success: boolean;
    Data: {
        EntityBizCodeType: string;
        GroupId: number;
        EntityId: string;
        ServiceId: number;
        EntityBizCode: string;
        DepartmentId: string;
        UniqueId: number;
        EntityName: string;
        ExtInfo: string;
        EntityRelationNumber: string;
    };
}
