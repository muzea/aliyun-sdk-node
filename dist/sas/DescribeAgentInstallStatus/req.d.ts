export interface DescribeAgentInstallStatusRequest {
    /**
     * 访问源的IP地址。
     * @example `59.46.XXX.XXX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 查询服务器唯一识别UUID。多个ID之间使用半角逗号（,）分隔。
     * > 您可以调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取服务器的UUID。
     * @example `inet-eae014a7-16c4-4d4e-9f03-5208f4dc****,inet-eae047da-1e5a-41ce-828d-47606e9b****`
     */
    "Uuids": string;
}
