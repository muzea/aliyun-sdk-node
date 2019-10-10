interface GetDefaultAITemplateRequest {
    "RegionId"?: string;
    /**
    * 模板类型，取值：**AIMediaAudit(智能审核)**。
    * @example `AIMediaAudit`
    */ "TemplateType": string;
    "OwnerId"?: number;
}
export { GetDefaultAITemplateRequest };