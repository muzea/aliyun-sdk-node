export interface CreateSampleDataResponse {
    /**
     * 请求ID。
     * @example `15A6881F-AAAB-5E4D-9B3F-6DCC1BDF4F2E_99`
     */
    RequestId: string;
    /**
     * API执行状态，取值如下：
     * - **false**：执行失败。
     * - **true**：执行成功。
     * @example `true`
     */
    Status: boolean;
    /**
     * 该信息表示API在调用过程中出现了意料之外的错误，但不影响API的正常使用。
     * @example `*********`
     */
    ErrorMessage: string;
    /**
     * 实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    DBInstanceId: string;
}
