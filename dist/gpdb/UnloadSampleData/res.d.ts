export interface UnloadSampleDataResponse {
    /**
     * 请求ID。
     * @example `4E42ABC3-4DBD-5343-9BCA-66B7D091311F_6914`
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
     * @example `********`
     */
    ErrorMessage: string;
    /**
     * 实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    DBInstanceId: string;
}
