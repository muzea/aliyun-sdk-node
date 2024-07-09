export interface UpdateGatewayOptionRequest {
    /**
     * 网关ID。
     * @example `421`
     */
    "GatewayId"?: number;
    /**
     * 网关操作详情。
     * - **TraceDetails**：XTrace采样描述。内容：TraceEnabled为是否开通XTrace，Sample为XTrace的采样率。
     * - **LogConfigDetails**：日志投递服务描述。内容：LogEnabled为是否开启日志投递SLS服务，ProjectName为日志投递的目的，LogStoreName为日志存储名称。
     * - **EnableHardwareAcceleration**：是否开启硬件加速。
     * - **DisableHttp2Alpn**：是否关闭HTTP 2.0协议。
     * - **EnableWaf**：是否开启waf。
     */
    "GatewayOption"?: any;
    /**
     * 网关唯一标识ID。
     * @example `gw-83b0ddb569434f82b9fe8e4c60c4****`
     */
    "GatewayUniqueId": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
