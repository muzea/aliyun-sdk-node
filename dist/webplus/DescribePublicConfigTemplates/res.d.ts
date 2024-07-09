export interface DescribePublicConfigTemplatesResponse {
    TotalCount: number;
    RequestId: string;
    Message: string;
    PageSize: number;
    PageNumber: number;
    PublicConfigTemplates: {
        PublicConfigTemplate: {
            TemplateDescription: string;
            UpdateTime: number;
            StackId: string;
            TemplateLogo: string;
            CreateTime: number;
            PackageSource: string;
            StackName: string;
            TemplateName: string;
            CategoryName: string;
            TemplateId: string;
        }[];
    };
    Code: string;
}
