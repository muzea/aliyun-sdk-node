export interface GetAssetDetailByUuidRequest {
    /**
     * 请求源IP。无需填写，系统自动获取。
     * @example `120.245.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 要查询的资产的UUID。
     * > 调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取该参数。
     * @example `9e6cad93-a379-46fd-a701-9bbf02f4****`
     */
    "Uuid": string;
    /**
     * 设置请求和接收消息的语言类型。默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
