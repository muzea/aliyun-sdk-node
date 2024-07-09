export interface DescribeAlarmEventDetailRequest {
    /**
     * 访问源IP地址。
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
     * 告警事件的唯一标识。
     * > 查询警事件的详细信息，需要提供告警事件的唯一标识信息，该标识信息可调用[DescribeSuspEvents](~~DescribeSuspEvents~~)接口获取。
     * @example `9f62555666f177aa84ee1eaf465a****`
     */
    "AlarmUniqueInfo": string;
    /**
     * 请求来源标识，固定为**sas**。
     * @example `sas`
     */
    "From": string;
}
