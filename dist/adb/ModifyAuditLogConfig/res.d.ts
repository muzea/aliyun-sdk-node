export interface ModifyAuditLogConfigResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 是否已更新SQL审计的开启状态。取值说明：
     * - **true**：状态已更新。
     * - **false**：状态更新失败。
     * @example `true`
     */
    UpdateSucceed: boolean;
}
