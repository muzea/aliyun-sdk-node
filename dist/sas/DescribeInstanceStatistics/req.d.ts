export interface DescribeInstanceStatisticsRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 要查询的资产的UUID列表。多个UUID之间使用半角逗号（,）分隔。
     * 您可以调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取资产实例的UUID。
     * @example `6690a46c-0edb-4663-a641-3629d1a9****`
     */
    "Uuid": string;
    /**
     * 数据的请求来源。固定为**sas**，表示数据请求来源为云安全中心。
     * @example `sas`
     */
    "From": string;
}
