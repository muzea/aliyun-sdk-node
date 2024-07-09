export interface CancelDomainVerificationRequest {
    /**
     * 用户IP，可以设置为**127.0.0.1**。
     * @example `127.0.0.1	`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认值为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名实例编号，通过查询域名列表[QueryDomainList](~~67712~~)接口获取。
     * @example `S2019270W570xxxx`
     */
    "InstanceId": string;
    /**
     * 操作类型。取值：
     * - **DOMAINAUDIT**：域名审核。
     * - **AUDITCONTACT**：审核联系人。
     * @example `AUDITCONTACT`
     */
    "ActionType": string;
}
