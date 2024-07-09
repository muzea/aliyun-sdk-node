export interface ManualTriggerMaskingProcessRequest {
    /**
     * 请求和接收消息的语言类型，默认值zh_cn。取值：
     * - **zh_cn**：中文
     * - **en_us**：英文
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 脱敏任务ID，用数字表示。
     * <note>脱敏任务编号是由一串字符表示，可通过DescribeDataMaskingTasks接口获取。</note>
     * @example `1`
     */
    "Id": number;
}
