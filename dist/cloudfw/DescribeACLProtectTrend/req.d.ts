export interface DescribeACLProtectTrendRequest {
    /**
     * 本参数已废弃。
     * @example `223.95.87.130`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 设置查询开始时间。使用秒级时间戳格式表示。
     * @example `1677050306`
     */
    "StartTime"?: string;
    /**
     * 设置查询结束时间。使用秒级时间戳格式表示。
     * @example `1670397599`
     */
    "EndTime"?: string;
}
