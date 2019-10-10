interface ListTemplatesRequest {
    "RegionId"?: string;
    "TemplateName"?: string;
    "TemplateFormat"?: string;
    "ShareType"?: string;
    "CreatedBy"?: string;
    "CreatedDateBefore"?: string;
    "CreatedDateAfter"?: string;
    "MaxResults"?: number;
    "NextToken"?: string;
    "SortField"?: string;
    "SortOrder"?: string;
    "HasTrigger"?: boolean;
}
export { ListTemplatesRequest };