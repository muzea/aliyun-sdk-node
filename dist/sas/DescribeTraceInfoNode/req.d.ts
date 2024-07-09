export interface DescribeTraceInfoNodeRequest {
    /**
     * 请求源IP。无需填写，系统自动获取。
     * @example `127.0.XX.XX`
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
     * 顶点 Id。
     * @example `03da4e2350a3eb50cd25a18cexxxxxxx`
     */
    "VertexId": string;
    /**
     * 顶点类型，通过 [DescribeTraceInfoDetail](~~DescribeTraceInfoDetail~~)获取。
     * @example `SAS_ASSET`
     */
    "Type": string;
    /**
     * 事件名称。
     * >详细信息请参见[DescribeSuspEvents](~~DescribeSuspEvents~~)接口获取该参数。
     * @example `WEBSHELL`
     */
    "EventName"?: string;
    /**
     * 首次发现时间。
     * @example `1635978934000`
     */
    "IncidentTime"?: number;
    /**
     * 指定要查询的服务器uuid。通过 [DescribeSuspEvents](~~DescribeSuspEvents~~)接口获取该参数。
     * @example `6f346617-eef9-45e6-b6d1-946xxxxxxxx`
     */
    "Uuid": string;
    /**
     * 请求来源标识，固定为sas。
     * @example `sas`
     */
    "From": string;
}
