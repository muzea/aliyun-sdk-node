export interface DescribeMatchedMaliciousNamesRequest {
    /**
     * 要查询的镜像恶意样本的危险程度。可输入多个值，多个值之间使用英文逗号（,）分隔。取值：
     * - **serious**：紧急
     * - **suspicious**：可疑
     * - **remind**：提醒
     * @example `serious`
     */
    "Levels"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
