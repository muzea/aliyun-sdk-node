export interface HandleActiveSQLRecordRequest {
    /**
     * 存储实例ID。
     * @example `gp-bp***************`
     */
    "DBInstanceId": string;
    /**
     * 进程ID，即查询的唯一标识。
     * @example `"3003925,3003928"`
     */
    "Pids": string;
    /**
     * 选择进程ID的操作类型。取值说明：
     * - **0**：取消。
     * - **1**：终止。
     * - **2**：强制终止。
     * @example `0`
     */
    "OperateType"?: number;
}
