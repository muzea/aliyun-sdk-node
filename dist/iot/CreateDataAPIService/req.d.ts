interface CreateDataAPIServiceRequest {
    "RegionId"?: string;
    "ApiPath": string;
    "OriginSql": string;
    "TemplateSql": string;
    "DisplayName": string;
    "FolderId"?: string;
    "Desc"?: string;
    "RequestParam"?: string[];
    "ResponseParam"?: string[];
}
export { CreateDataAPIServiceRequest };