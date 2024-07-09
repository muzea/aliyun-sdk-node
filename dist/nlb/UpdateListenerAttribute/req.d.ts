export interface UpdateListenerAttributeRequest {
    /**
     * 监听实例ID。
     * @example `lsn-bp1bpn0kn908w4nbw****`
     */
    "ListenerId": string;
    /**
     * 自定义监听名称。
     * 长度限制为2~256个字符，支持中文和英文字母，可包含数字、半角逗号（,）、半角句号（.）、半角分号（;）、正斜线（/）、at（@）、下划线（_）和短划线（-）。
     * @example `tcpssl_443`
     */
    "ListenerDescription"?: string;
    /**
     * 服务器组ID。
     * @example `sgp-ppdpc14gdm3x4o****`
     */
    "ServerGroupId"?: string;
    /**
     * 安全策略ID。
     * > 仅对TCPSSL监听生效。
     * @example `tls_cipher_policy_1_1`
     */
    "SecurityPolicyId"?: string;
    /**
     * 服务器证书列表信息。目前仅支持添加1个服务器证书。
     * > 仅对TCPSSL监听生效。
     */
    "CertificateIds"?: string[];
    /**
     * CA证书列表信息。目前仅支持添加1个CA证书。
     * > 仅对TCPSSL监听生效。
     */
    "CaCertificateIds"?: string[];
    /**
     * 是否启动双向认证。取值：
     * - **true**：启动。
     * - **false**（默认值）：关闭。
     * @example `false`
     */
    "CaEnabled"?: boolean;
    /**
     * 连接空闲超时时间。单位：秒。取值范围：**1**~**900**。
     * @example `900`
     */
    "IdleTimeout"?: number;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会更新监听信息。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 网络型负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~443657~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 是否开启通过Proxy Protocol协议携带客户端源地址到后端服务器。取值：
     * - **true**：开启。
     * - **false**：关闭。
     * @example `false`
     */
    "ProxyProtocolEnabled"?: boolean;
    /**
     * 是否开启秒级监控功能。取值：
     * - **true**：开启。
     * - **false**：关闭。
     * @example `false`
     */
    "SecSensorEnabled"?: boolean;
    /**
     * 是否开启ALPN。取值：
     * - **true**：开启。
     * - **false**：关闭。
     * @example `false`
     */
    "AlpnEnabled"?: boolean;
    /**
     * ALPN策略。取值：
     * - **HTTP1Only**：只协商使用HTTP1.x协议，优先级为HTTP1.1>HTTP1.0。
     * - **HTTP2Only**：只协商使用HTTP2.0协议。
     * - **HTTP2Optional**：优先使用HTTP1.x协议，但也接受HTTP2.0协议，优先级为HTTP1.1>HTTP1.0>HTTP2.0。
     * - **HTTP2Preferred**：优先使用HTTP2.0协议，但也接受HTTP1.x协议，优先级为HTTP2.0>HTTP1.1>HTTP1.0。
     * > AlpnEnabled开启后需配置该参数。
     * @example `HTTP1Only`
     */
    "AlpnPolicy"?: string;
    /**
     * 网络型负载均衡实例每秒新建连接限速值。取值范围：**0**~**1000000**。**0**表示不限速。
     * @example `10000`
     */
    "Cps"?: number;
    /**
     * TCP报文的最大段大小。单位：字节，取值范围：**0**~**1500**。**0**表示不修改用户TCP报文的MSS值。仅TCP、TCPSSL类型的监听支持该字段值。
     * @example `344`
     */
    "Mss"?: number;
    /**
     * 通过Proxy Protocol协议携带VpcId、PrivateLinkEpId、PrivateLinkEpsId信息到后端服务器配置。
     */
    "ProxyProtocolV2Config"?: {
        /**
         * 是否开启通过Proxy Protocol协议携带VpcId到后端服务器。取值：
         * - **true**：开启。
         * - **false**：关闭。
         * @example `false`
         */
        Ppv2VpcIdEnabled: boolean;
        /**
         * 是否开启通过Proxy Protocol协议携带PrivateLinkEpId到后端服务器。取值：
         * - **true**：开启。
         * - **false**：关闭。
         * @example `false`
         */
        Ppv2PrivateLinkEpIdEnabled: boolean;
        /**
         * 是否开启通过Proxy Protocol协议携带PrivateLinkEpsId到后端服务器。取值：
         * - **true**：开启。
         * - **false**：关闭。
         * @example `false`
         */
        Ppv2PrivateLinkEpsIdEnabled: boolean;
    };
}
