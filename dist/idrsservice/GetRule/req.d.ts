export interface GetRuleRequest {
    /**
     * 规则 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    "Id": string;
    /**
     * 客户端基础参数，记录 SDK 版本号等信息
     * @example `{"version":"1.0.0"}`
     */
    "ClientBaseParam"?: string;
}
