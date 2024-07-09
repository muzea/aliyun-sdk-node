export interface AcknowledgeTaskResultRequest {
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文；
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 任务详情编号列表。
     * @example `2659c29493e94416b297a7691340ccc4`
     */
    "TaskDetailNo": string[];
}
