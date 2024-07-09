export interface StopMaskingProcessRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh_cn**：默认值，中文（简体）。
     * - **en_us**：英文（美国）。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 脱敏任务唯一资源ID，可通过[DescribeDataMaskingTasks](~~DescribeDataMaskingTasks~~)的返回值确定脱敏任务的资源ID。
     * @example `3`
     */
    "Id": number;
}
