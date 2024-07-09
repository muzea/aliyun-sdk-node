export interface QueryTemplateListByGroupIdResponse {
    RequestId: string;
    ErrorMessage: string;
    Success: boolean;
    ErrorCode: string;
    Code: string;
    Message: string;
    DynamicMessage: string;
    DynamicCode: string;
    TotalCount: number;
    PageSize: number;
    PageNumber: number;
    TemplateList: {
        BasePicture: string;
        TemplateId: string;
        TemplateName: string;
        EslSize: string;
        EslType: string;
        Width: number;
        Height: number;
        TemplateVersion: string;
        Layout: string;
        Scene: string;
        Brand: string;
        GroupId: string;
        TemplateSceneId: string;
        Relation: boolean;
    }[];
}
