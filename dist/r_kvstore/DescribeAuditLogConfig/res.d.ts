export interface DescribeAuditLogConfigResponse {
    /**
     * 审计日志的保留时长，单位为天。
     * @example `5`
     */
    Retention: string;
    /**
     * 请求ID。
     * @example `2BE6E619-A657-42E3-AD2D-18F8428A****`
     */
    RequestId: string;
    /**
     * 是否开启审计日志，返回值：
     * * **true**：开启。
     * * **false**：关闭。
     * > 您可以调用[ModifyAuditLogConfig](~~130206~~)接口为实例开启或关闭审计日志。
     * @example `true`
     */
    DbAudit: string;
}
