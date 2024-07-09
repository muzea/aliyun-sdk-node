export interface ReActivateAuditRequest {
    /**
     * ASM实例ID
     * @example `c5bf9eb05c4424b89985d6536a809****`
     */
    "ServiceMeshId": string;
    /**
     * 是否重新创建ASM审计日志，取值：
     * - true：重新创建ASM审计日志
     * - false：不重新创建ASM审计日志
     * @example `true`
     */
    "EnableAudit"?: boolean;
}
