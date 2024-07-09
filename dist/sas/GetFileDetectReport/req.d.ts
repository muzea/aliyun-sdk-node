export interface GetFileDetectReportRequest {
    /**
     * 要查询的字段。可以输入多个参数值，以英文逗号分隔。
     * 取值：
     * - **ThreatTypes**：威胁情报事件的类型。
     * - **Intelligences**：威胁情报事件。
     * - **ThreatLevel**：威胁情报等级。
     * - **Basic**：报告的基础信息（扫描的运行结果）。
     * - **Sandbox**：云沙箱的具体检测报告。
     * @example `Basic,,ThreatTypes,Intelligences,Sandbox`
     */
    "Field"?: string;
    /**
     * 检测文件所对应的事件id。
     * @example `81****`
     */
    "EventId"?: number;
    /**
     * 需要检测的文件hash值。
     * @example `b63917332950e5d219d0737ffe31****`
     */
    "FileHash"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 数据源类型。取值范围：
     * * **machine**：主机类型的告警。
     * * **object_scan**：文件检测的告警。
     * @example `object_scan`
     */
    "SourceType"?: string;
}
