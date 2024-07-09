export interface GetTagListResponse {
    Code: string;
    Message: string;
    RequestId: string;
    Success: boolean;
    Data: {
        ScenarioCode: string;
        TagGroupCode: string;
        TagGroupName: string;
        TagValues: {
            Status: string;
            Description: string;
            TagName: string;
            TagGroupCode: string;
            TagCode: string;
            TagGroupName: string;
            EntityRelationNumber: string;
        }[];
    }[];
}
