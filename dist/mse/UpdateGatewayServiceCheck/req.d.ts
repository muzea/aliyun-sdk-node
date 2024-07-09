export interface UpdateGatewayServiceCheckRequest {
    /**
     * 服务ID
     * @example `12`
     */
    "ServiceId"?: string;
    /**
     * 网关唯一ID
     * @example `gw-8d410698bd7f4628ab76b*****72dd1d`
     */
    "GatewayUniqueId"?: string;
    /**
     * 是否开启健康检查
     * @example `true`
     */
    "Check"?: boolean;
    /**
     * 正常状态码（健康检查协议为HTTP时必填）
     */
    "ExpectedStatuses"?: number[];
    /**
     * 健康检查协议，目前支持：
     * - HTTP
     * - TCP
     * @example `HTTP`
     */
    "Protocol"?: string;
    /**
     * 健康检查响应超时时间（秒）
     * @example `5`
     */
    "Timeout"?: number;
    /**
     * 健康检查间隔时间（秒）
     * @example `2`
     */
    "Interval"?: number;
    /**
     * 健康检查健康阈值
     * @example `2`
     */
    "HealthyThreshold"?: number;
    /**
     * 健康检查不健康阈值
     * @example `2`
     */
    "UnhealthyThreshold"?: number;
    /**
     * 健康检查路径（健康检查协议为HTTP时必填）
     * @example `/healthz`
     */
    "HttpPath"?: string;
    /**
     * 健康检查域名（健康检查协议为HTTP时选填）
     * @example `example.com`
     */
    "HttpHost"?: string;
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
