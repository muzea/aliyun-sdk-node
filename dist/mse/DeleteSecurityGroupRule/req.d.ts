export interface DeleteSecurityGroupRuleRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-83b0ddb569434f82b9fe8e4c60c40f7c`
     */
    "GatewayUniqueId": string;
    /**
     * 目标ID。
     * @example `93`
     */
    "Id": number;
    "CascadingDelete"?: boolean;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
