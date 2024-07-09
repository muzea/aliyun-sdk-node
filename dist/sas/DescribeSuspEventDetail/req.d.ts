export interface DescribeSuspEventDetailRequest {
    /**
     * 访问源的IP地址。
     * @example `121.33.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 指定请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 告警事件ID。
     * @example `32750999`
     */
    "SuspiciousEventId": number;
    /**
     * 告警事件数据的来源，固定为sas。
     * @example `sas`
     */
    "From": string;
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `16670360956*****`
     */
    "ResourceDirectoryAccountId"?: number;
}
