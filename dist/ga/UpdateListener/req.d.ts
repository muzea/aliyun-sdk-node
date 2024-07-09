export interface UpdateListenerRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000	`
     */
    "ClientToken"?: string;
    /**
     * 监听的名称。
     * 名称长度为1~128个字符，以大小写字母或中文开头，可包含数字、半角句号（.）下划线（_）和短划线（-）。
     * @example `Listener`
     */
    "Name"?: string;
    /**
     * 监听的描述信息。
     * 描述长度最大为200个字符，不能以`http://`和`https://`开头。
     * @example `Listener`
     */
    "Description"?: string;
    /**
     * 客户端亲和性。
     * - 不传入值时，不保持客户端亲和性，即不能确保来自同一客户端的连接请求始终定向到同一终端节点。
     * - 取值为**SOURCE_IP**时，保持客户端亲和性。即客户端访问有状态的应用程序时，可以将来自同一客户端的所有请求都定向到同一终端节点，而不考虑源端口和协议。
     * @example `SOURCE_IP`
     */
    "ClientAffinity"?: string;
    /**
     * 监听的网络传输协议类型，取值：
     * - **tcp**：TCP协议。
     * - **udp**：UDP协议。
     * - **http**：HTTP协议。
     * - **https**：HTTPS协议。
     * @example `tcp`
     */
    "Protocol"?: string;
    /**
     * 监听实例ID。
     * @example `lsr-bp1bpn0kn908w4nbw****`
     */
    "ListenerId": string;
    /**
     * 是否开启保持客户端源IP功能。
     * - **true**：开启保持客户端源IP功能。开启后，支持后端服务查看客户端的原始IP地址。
     * - **false**（默认值）：不开启保持客户端源IP功能。
     * > 该参数后续将不在监听API中配置，建议在终端节点组的相关API中进行配置。关于**ProxyProtocol**，请参见[CreateEndpointGroup](~~153259~~)和[UpdateEndpointGroup](~~153262~~)。
     * @example `false`
     */
    "ProxyProtocol"?: string;
    /**
     * 用来接收请求并向终端节点进行转发的端口范围。
     * 可配置的监听端口范围为**1**~**65499**。
     * 最多可配置端口数量与监听路由类型和监听协议类型相关，更多信息，请参见[监听端口](~~153216~~)。
     */
    "PortRanges"?: {
        /**
         * 用来接收请求并向终端节点进行转发的起始监听端口。
         * 可配置的监听端口范围为**1**~**65499**，且需满足**FromPort**≤**ToPort**。
         * 最多可配置端口数量与监听路由类型和监听协议类型相关，更多信息，请参见[监听端口](~~153216~~)。
         * >对于HTTP或HTTPS协议的监听，只支持配置一个监听端口，即起始监听端口和结束监听端口需相同。
         * @example `20`
         */
        FromPort: number;
        /**
         * 用来接收请求并向终端节点进行转发的结束监听端口。
         * 可配置的监听端口范围为**1**~**65499**，且需满足**FromPort**≤**ToPort**。
         * 最多可配置端口数量与监听路由类型和监听协议类型相关，更多信息，请参见[监听端口](~~153216~~)。
         * >对于HTTP或HTTPS协议的监听，只支持配置一个监听端口，即起始监听端口和结束监听端口需相同。
         * @example `21`
         */
        ToPort: number;
    }[];
    /**
     * SSL证书。
     */
    "Certificates"?: {
        /**
         * SSL证书ID。
         * >仅HTTPS协议的监听需要配置该项。
         * @example `449****-cn-hangzhou`
         */
        Id: string;
    }[];
    /**
     * 后端服务器接收请求的端口范围。
     */
    "BackendPorts"?: {
        /**
         * 后端服务器接收请求的起始端口。
         * >当您的监听协议为HTTP或HTTPS，且监听的端口和后端服务器提供服务的端口不一致时才需填写该项。其中，后端服务器接收请求的起始端口和结束端口需相同。
         * @example `80`
         */
        FromPort: number;
        /**
         * 后端服务器接收请求的结束端口。
         * >当您的监听协议为HTTP或HTTPS，且监听的端口和后端服务器提供服务的端口不一致时才需填写该项。其中，后端服务器接收请求的起始端口和结束端口需相同。
         * @example `80`
         */
        ToPort: number;
    }[];
    /**
     * `XForward`字段配置信息。
     */
    "XForwardedForConfig"?: {
        /**
         * 是否通过`GA-ID`头字段获取全球加速实例ID。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > 仅HTTP和HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForGaIdEnabled: boolean;
        /**
         * 是否通过`GA-X-Forward-Proto`字段获取全球加速实例的监听协议。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > 仅HTTP和HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForProtoEnabled: boolean;
        /**
         * 是否通过`GA-X-Forward-Port`字段获取全球加速实例的监听端口。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > 仅HTTP和HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForPortEnabled: boolean;
        /**
         * 是否通过`X-Real-IP`字段获取真实的客户端IP。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > 仅HTTP和HTTPS监听支持此参数。
         * @example `false`
         */
        XRealIpEnabled: boolean;
        /**
         * 是否通过`GA-AP`字段获取加速地域信息。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > 仅HTTP和HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForGaApEnabled: boolean;
    };
    /**
     * 安全策略实例ID。取值：
     * - **tls_cipher_policy_1_0**
     *     - 支持的TLS版本：TLSv1.0、TLSv1.1和TLSv1.2。
     *     - 支持的加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
     * - **tls_cipher_policy_1_1**
     *     - 支持的TLS版本： TLSv1.1和TLSv1.2。
     *     - 支持的加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
     * - **tls_cipher_policy_1_2**
     *     - 支持的TLS版本：TLSv1.2。
     *     - 支持的加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
     * - **tls_cipher_policy_1_2_strict**
     *     - 支持的TLS版本：TLSv1.2。
     *     - 支持的加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、ECDHE-RSA-AES128-SHA和ECDHE-RSA-AES256-SHA。
     * - **tls_cipher_policy_1_2_strict_with_1_3**
     *     - 支持的TLS版本：TLSv1.2及TLSv1.3。
     *     - 支持的加密算法套件：TLS_AES_128_GCM_SHA256、TLS_AES_256_GCM_SHA384、TLS_CHACHA20_POLY1305_SHA256、TLS_AES_128_CCM_SHA256、TLS_AES_128_CCM_8_SHA256、ECDHE-ECDSA-AES128-GCM-SHA256、ECDHE-ECDSA-AES256-GCM-SHA384、ECDHE-ECDSA-AES128-SHA256、ECDHE-ECDSA-AES256-SHA384、ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、ECDHE-ECDSA-AES128-SHA、ECDHE-ECDSA-AES256-SHA、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA。
     * > 仅HTTPS监听支持此参数。
     * @example `tls_cipher_policy_1_0`
     */
    "SecurityPolicyId"?: string;
    /**
     * 连接空闲超时时间。单位：秒。
     * - TCP：10-900s，默认900s
     * - UDP：10-20s ，默认20s
     * - HTTP/HTTPS：1-60秒，默认15s
     * @example `900`
     */
    "IdleTimeout"?: number;
    /**
     * HTTP/HTTPS的连接请求超时时间。单位：秒。
     * 可选：1-180s，默认60s。
     * >仅对Protocol（网络传输协议类型）为HTTP或HTTPS的监听有效。如果在超时时间内后端服务器一直没有响应，全球加速将放弃等待，并给客户端返回HTTP 504错误码。
     * @example `60`
     */
    "RequestTimeout"?: number;
    /**
     * HTTP协议的最大版本，取值：
     * - **http3**：HTTP/3。
     * - **http2**：HTTP/2。
     * - **http1.1**：HTTP/1.1。
     * > 仅HTTPS监听支持此参数。
     * @example `http2`
     */
    "HttpVersion"?: string;
}
