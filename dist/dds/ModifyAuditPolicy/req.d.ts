export interface ModifyAuditPolicyRequest {
    /**
     * 实例ID。
     * @example `dds-bp1785659e3f****`
     */
    "DBInstanceId": string;
    /**
     * 审计日志状态，取值：
     * - **enable**：开启审计日志。
     * - **disabled**：关闭审计日志。
     * @example `enable`
     */
    "AuditStatus": string;
    /**
     * 审计日志保留时长。取值范围为1~365天，默认为30天。
     * @example `30`
     */
    "StoragePeriod"?: number;
    /**
     * 审计日志的请求来源，取值为**Console**。
     * @example `Console`
     */
    "AuditLogSwitchSource"?: string;
    /**
     * 审计日志的版本类型。
     * - **Trial**：免费试用版。
     * - **Standard**：正式版。
     * > 该参数的默认值为**Trial**。从2022年01月06日起，各地域将陆续上线正式版审计日志，并终止申请免费试用版审计日志。建议您设置为**Standard**。
     * @example `Standard`
     */
    "ServiceType"?: string;
}
