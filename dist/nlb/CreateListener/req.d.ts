export interface CreateListenerRequest {
    /**
     * 监听协议。取值：**TCP**、**UDP**或**TCPSSL**。
     * @example `TCP`
     */
    "ListenerProtocol": string;
    /**
     * 监听端口。取值范围：**0**~**65535**。
     * **0**：表示使用全端口功能。当设置为**0**时，您需要配置**StartPort**和**EndPort**。
     * @example `80`
     */
    "ListenerPort": number;
    /**
     * 自定义监听名称。
     * 长度限制为2~256个字符，支持中文和英文字母，可包含数字、半角逗号（,）、半角句号（.）、半角分号（;）、正斜线（/）、at（@）、下划线（_）和短划线（-）。
     * @example `tcp_80`
     */
    "ListenerDescription"?: string;
    /**
     * 网络型负载均衡实例ID。
     * @example `nlb-83ckzc8d4xlp8o****`
     */
    "LoadBalancerId": string;
    /**
     * 服务器组ID。
     * @example `sgp-ppdpc14gdm3x4o****`
     */
    "ServerGroupId": string;
    /**
     * 连接空闲超时时间。单位：秒。
     * 取值范围：**1**~**900**。默认值：**900**。
     * @example `900`
     */
    "IdleTimeout"?: number;
    /**
     * 安全策略ID。支持系统安全策略和自定义安全策略。
     * - 系统策略取值：**tls_cipher_policy_1_0**（默认值）、**tls_cipher_policy_1_1**、**tls_cipher_policy_1_2**、**tls_cipher_policy_1_2_strict**或**tls_cipher_policy_1_2_strict_with_1_3**。
     * - 自定义安全策略：输入自定义安全策略ID。
     *     - 创建自定义策略，请参见[CreateSecurityPolicy](~~445901~~)。
     *     - 查询安全策略，请参见[ListSecurityPolicy](~~445900~~)。
     * >仅对TCPSSL监听生效。
     * @example `tls_cipher_policy_1_0`
     */
    "SecurityPolicyId"?: string;
    /**
     * 服务器证书列表信息。仅对TCPSSL监听生效。
     * > 目前仅支持添加1个服务器证书。
     */
    "CertificateIds"?: string[];
    /**
     * CA证书列表。仅对TCPSSL监听生效。
     * > 目前仅支持添加1个CA证书。
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
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建监听。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
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
     * - **false**（默认值）：关闭。
     * @example `false`
     */
    "ProxyProtocolEnabled"?: boolean;
    /**
     * 是否开启秒级监控功能。取值：
     * - **true**：开启。
     * - **false**（默认值）：关闭。
     * @example `false`
     */
    "SecSensorEnabled"?: boolean;
    /**
     * 是否开启ALPN。取值：
     * - **true**：开启。
     * - **false**（默认值）：关闭。
     * @example `false`
     */
    "AlpnEnabled"?: boolean;
    /**
     * ALPN策略。取值：
     * - **HTTP1Only**：只协商使用HTTP1.x协议，优先级为HTTP1.1>HTTP1.0。
     * - **HTTP2Only**：只协商使用HTTP2.0协议。
     * - **HTTP2Optional**：优先使用HTTP1.x协议，但也接受HTTP2.0协议，优先级为HTTP1.1>HTTP1.0>HTTP2.0。
     * - **HTTP2Preferred**：优先使用HTTP2.0协议，但也接受HTTP1.x协议，优先级为HTTP2.0>HTTP1.1>HTTP1.0。
     * > **AlpnEnabled**开启后需配置该参数。
     * @example `HTTP1Only`
     */
    "AlpnPolicy"?: string;
    /**
     * 全端口监听起始端口。取值范围：**0** ~ **65535**。
     * > 当**ListenerPort**为**0**时，需要配置该参数。
     * @example `244`
     */
    "StartPort"?: number;
    /**
     * 全端口监听结束端口。取值范围：**0** ~ **65535**。
     * 终止端口的取值大于起始端口。
     * > 当**ListenerPort**为**0**时，需要配置该参数。
     * @example `566`
     */
    "EndPort"?: number;
    /**
     * 网络型负载均衡实例每秒新建连接限速值。取值范围：**0**~**1000000**。**0**表示不限速。
     * @example `100`
     */
    "Cps"?: number;
    /**
     * TCP报文的最大段大小。单位：字节，取值范围：**0**~**1500**。
     * **0**：表示不修改用户TCP报文的MSS值。
     * > 仅TCP、TCPSSL类型的监听支持该字段值。
     * @example `43`
     */
    "Mss"?: number;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。支持字符包括字母、数字、下划线 (_)、点 (.)、冒号 (:)、斜线 (/)、等号 (=)、加号 (+)、减号 (-)、@符号 (@) 。
         * 一次调用最多支持添加20个标签。
         * @example `KeyTest`
         */
        Key: string;
        /**
         * 标签值。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。支持字符包括字母、数字、下划线 (_)、点 (.)、冒号 (:)、斜线 (/)、等号 (=)、加号 (+)、减号 (-)、@符号 (@) 。
         * 一次调用最多支持添加20个标签。
         * @example `Test`
         */
        Value: string;
    }[];
    /**
     * 通过Proxy Protocol协议携带VpcId、PrivateLinkEpId、PrivateLinkEpsId信息到后端服务器配置。
     */
    "ProxyProtocolV2Config"?: {
        /**
         * 是否开启通过Proxy Protocol协议携带VpcId到后端服务器。取值：
         * - **true**：开启。
         * - **false**（默认值）：关闭。
         * @example `false`
         */
        Ppv2VpcIdEnabled: boolean;
        /**
         * 是否开启通过Proxy Protocol协议携带Ppv2PrivateLinkEpId到后端服务器。取值：
         * - **true**：开启。
         * - **false**（默认值）：关闭。
         * @example `false`
         */
        Ppv2PrivateLinkEpIdEnabled: boolean;
        /**
         * 是否开启通过Proxy Protocol协议携带PrivateLinkEpsId到后端服务器。取值：
         * - **true**：开启。
         * - **false**（默认值）：关闭。
         * @example `false`
         */
        Ppv2PrivateLinkEpsIdEnabled: boolean;
    };
}
