export interface CheckRecoveryConditionResponse {
    /**
     * 请求ID。
     * @example `D563A3E7-6010-45FE-A0CD-9283414C9657`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `dds-bp1378****`
     */
    DBInstanceName: string;
    /**
     * 是否满足恢复条件，取值说明：
     * - **true**：满足条件。
     * - **false**：不满足条件。
     * @example `true`
     */
    IsValid: boolean;
}
