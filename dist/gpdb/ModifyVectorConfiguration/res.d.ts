export interface ModifyVectorConfigurationResponse {
    /**
     * 请求ID。
     * @example `107BE202-D1A2-479E-98E0-A8**********`
     */
    RequestId: string;
    /**
     * API执行状态。取值如下：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Status: boolean;
    /**
     * 错误信息。
     * 只会在API执行失败时返回该参数。
     * @example `Failed to modify vector configuration.`
     */
    ErrorMessage: string;
    /**
     * 实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    DBInstanceId: string;
}
