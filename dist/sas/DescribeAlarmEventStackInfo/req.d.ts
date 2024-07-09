export interface DescribeAlarmEventStackInfoRequest {
    /**
     * 访问源的IP地址。
     * @example `192.168.XX.XX`
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
     * 要查询的资产的UUID。
     * > 调用[DescribeSuspEvents](~~DescribeSuspEvents~~)接口获取该参数。
     * @example `18b7336e-d469-473b-af83-8e5420f9****`
     */
    "Uuid": string;
    /**
     * 事件名称。
     * >详细信息请参见[DescribeSuspEvents](~~DescribeSuspEvents~~)接口获取该参数。
     * @example `Variable Trojan`
     */
    "EventName": string;
    /**
     * 告警事件的唯一标识。
     * @example `1fbe8d16727f61d1478a674d6fa0****`
     */
    "UniqueInfo": string;
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `127608589417****`
     */
    "ResourceDirectoryAccountId"?: number;
}
