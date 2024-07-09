export interface GetEntityTagRelationResponse {
    Code: string;
    Message: string;
    RequestId: string;
    Success: boolean;
    Data: {
        TagName: string;
        TagGroupCode: string;
        EntityId: string;
        TagCode: string;
        EntityType: string;
        TagGroupName: string;
    }[];
}
