export interface DescribeAssetDetailByUuidsRequest {
    /**
     * 资产实例的UUID列表。多个UUID之间使用半角逗号（,）分隔。
     * @example `0687b17f-2a36-4e5****,0687b17f-2a36-4e****
    `
     */
    "Uuids": string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `127608589417****`
     */
    "ResourceDirectoryAccountId"?: number;
}
