export interface DeleteRecordTemplateRequest {
    /**
     * 应用ID。通过控制台创建和查询，仅支持传单个ID。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 配置模板ID。获取模板ID，请参见[AddRecordTemplate](~~193625~~)。
     * @example `76dasgb****`
     */
    "TemplateId": string;
}
