interface SubmitAIMediaAuditJobRequest {
    "RegionId"?: string;
    /**
    * AI模版ID。不指定时使用智能审核默认AI模版ID。
    * @example `XXXXXXX`
    */ "TemplateId"?: string;
    /**
    * 视频ID。
    * @example `XXXXX`
    */ "MediaId": string;
    "OwnerId"?: string;
}
export { SubmitAIMediaAuditJobRequest };