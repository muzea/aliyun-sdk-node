export interface HandleActiveSQLRecordResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * API执行状态，取值如下：
     * - **false**：执行失败。
     * - **true**：执行成功。
     * @example `true`
     */
    Status: string;
    /**
     * 实例ID。
     * @example `gp-bp***************`
     */
    DBInstanceId: string;
    /**
     * 活跃查询处理结果。
     */
    Results: {
        /**
         * 处理结果状态。
         * - **false**：处理失败。
         * - **true**：处理成功。
         * @example `true`
         */
        Status: string;
        /**
         * 进程ID，活跃查询SQL的唯一标识。
         * @example `3003925`
         */
        Pid: string;
    }[];
}
