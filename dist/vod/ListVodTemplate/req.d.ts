export interface ListVodTemplateRequest {
    /**
     * 模板类型。固定取值：**Snapshot**。
     * @example `Snapshot`
     */
    "TemplateType": string;
    /**
     * 应用ID。固定取值**app-1000000**。使用说明，请参见[多应用](~~113600~~)。
     * @example `app-****`
     */
    "AppId"?: string;
}
