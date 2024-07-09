export interface DescribeTraceInfoDetailRequest {
    /**
     * 请求源IP。无需填写，系统自动获取。
     * @example `127.0.0.1`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 顶点 Id，可通过接口 [DescribeSuspEvents](~~DescribeSuspEvents~~) 获取。
     * @example `cce1d28dxxxxxxxxxxxxxxxx`
     */
    "VertexId": string;
    /**
     * 要查询的服务器的UUID。
     * @example `1627f2d7-aaa2-4ed1-b07a-xxxxxxxxxxxxxx`
     */
    "Uuid": string;
    /**
     * 顶点类型，告警固定为: **SAS_INCIDENT**。
     * @example `SAS_INCIDENT`
     */
    "Type": string;
    /**
     * 请求来源标识，固定为**sas**。
     * @example `sas`
     */
    "From": string;
    /**
     * 检测的时间戳。单位：毫秒。
     * @example `1670555392000`
     */
    "IncidentTime"?: number;
}
