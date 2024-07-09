export interface ModifyWebLockProcessStatusRequest {
    /**
     * 批量设置防篡改进程状态时传递的操作参数,采用json格式传递。
     * @example `[{"processPath":"/etc/test1","uuid":"0c1714dc-f7a3-4265-8364-7aa3fce8****"},{"processPath":"/etc/test2","uuid":"1cc45e7d-7698-4b2c-89d8-e8cba407****"}]`
     */
    "OperateInfo"?: string;
    /**
     * 设置防篡改进程装改的服务器UUID。
     * @example `bc8510e7-7327-4030-b75c-956e434d****`
     */
    "Uuid"?: string;
    /**
     * 设置防篡改进程状态。
     * - **0**：取消加白
     * - **1**：加白
     * @example `1`
     */
    "Status"?: number;
    /**
     * 标识是否同时处理存在相同进程的服务器。
     * - **0**：不同时处理
     * - **1**：同时处理
     * @example `1`
     */
    "DealAll"?: number;
    /**
     * 进程路径列表。
     */
    "ProcessPath"?: string[];
}
