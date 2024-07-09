export interface QueryTaskDetailHistoryRequest {
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 任务编号。
     * > 任务编号可通过[QueryTaskList](~~67709~~)接口查询。
     * @example `75addb07-28a3-450e-b5ec-test`
     */
    "TaskNo": string;
    /**
     * 域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 域名游标。
     * @example `example.com`
     */
    "DomainNameCursor"?: string;
    /**
     * 任务状态。取值：
     * - **0**：等待执行。
     * - **1**：执行中。
     * - **2**：成功。
     * - **3**：失败。
     *
     * @example `0`
     */
    "TaskStatus"?: number;
    /**
     * 分页大小。
     * @example `1`
     */
    "PageSize": number;
    /**
     * 任务详情游标。
     * @example `75addb07-28a3-450e-b5ec`
     */
    "TaskDetailNoCursor"?: string;
}
