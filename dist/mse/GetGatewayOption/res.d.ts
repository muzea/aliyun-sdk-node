export interface GetGatewayOptionResponse {
    /**
     * 请求ID。
     * @example `C92F4A4D-A2FD-593E-839E-F3D4DFD2****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * - 当请求成功时，返回成功信息。
     * - 当请求失败时，返回失败原因，例如：TaskId not found。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 状态码。说明：200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 网关操作详情。
     * - **TraceDetails**：XTrace采样描述。内容：TraceEnabled为是否开通XTrace，Sample为XTrace的采样率。
     * - **LogConfigDetails**：日志投递服务描述。内容：LogEnabled为是否开启日志投递SLS服务，ProjectName为日志投递的目的，LogStoreName为日志存储名称。
     * - **EnableHardwareAcceleration**：是否开启硬件加速。
     * - **DisableHttp2Alpn**：是否关闭HTTP 2.0协议。
     * - **EnableWaf**：是否开启waf。
     * @example `{'LogConfigDetails': {'LogEnabled': False}, 'TraceDetails': {'TraceEnabled': False}}`
     */
    Data: any;
}
