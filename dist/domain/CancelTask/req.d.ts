export interface CancelTaskRequest {
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 任务编号。
     * >任务编号可通过[QueryTaskList](~~67709~~)接口查询。
     * @example `7f217ae0-61f5-42e2-a1c3-42bad0124****`
     */
    "TaskNo": string;
}
