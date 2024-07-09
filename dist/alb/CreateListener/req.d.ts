export interface CreateListenerRequest {
    /**
     * 应用型负载均衡实例ID。
     * @example `alb-n5qw04uq8vavfe****`
     */
    "LoadBalancerId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会创建监听。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 监听协议。
     * 取值：**HTTP**、**HTTPS**或**QUIC**。
     * @example `HTTP`
     */
    "ListenerProtocol": string;
    /**
     * 负载均衡实例前端使用的端口。
     * 取值：**1~65535**。
     * @example `80`
     */
    "ListenerPort": number;
    /**
     * 自定义监听名称。
     * 长度为2~256个字符，必须是中文和无害字符串中的字符，可包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）、下划线（_）。
     * @example `HTTP_80`
     */
    "ListenerDescription"?: string;
    /**
     * 指定请求超时时间。单位：秒。
     * 取值：**1~180**。
     * 默认值：**60**。
     * 如果在超时时间内后端服务器一直没有响应，负载均衡将放弃等待，并给客户端返回` HTTP 504 `错误码。
     * @example `60`
     */
    "RequestTimeout"?: number;
    /**
     * 指定连接空闲超时时间。单位：秒。
     * 取值范围：**1~60**。
     * 默认值：**15**。
     * 如果在超时时间内一直没有访问请求，负载均衡会暂时中断当前连接，直到一下次请求来临时重新建立新的连接。
     * @example `3`
     */
    "IdleTimeout"?: number;
    /**
     * 是否开启`Gzip`压缩，对特定文件类型进行压缩。取值：
     * - **true**（默认值）：是。
     * - **false**：否。
     * @example `true`
     */
    "GzipEnabled"?: boolean;
    /**
     * 是否开启`HTTP/2`特性。取值：
     * - **true**（默认值）：是。
     * - **false**：否。
     * > 仅HTTPS监听支持此参数。
     * @example `true`
     */
    "Http2Enabled"?: boolean;
    /**
     * 安全策略ID。支持系统安全策略和自定义安全策略。
     * 默认值：**tls\_cipher\_policy\_1_0**（系统安全策略）。
     * > 仅HTTPS监听支持此参数。
     * @example `tls_cipher_policy_1_0`
     */
    "SecurityPolicyId"?: string;
    /**
     * 是否开启双向认证。取值：
     * - **true**：开启。
     * - **false**（默认值）：不开启。
     * @example `false`
     */
    "CaEnabled"?: boolean;
    /**
     * XForward字段配置信息。
     */
    "XForwardedForConfig"?: {
        /**
         * 自定义头名称，只有当**XForwardedForClientCertClientVerifyEnabled**的值为**true**的时候，该值才会生效；否则该值不会生效。
         * 取值：1\~40个字符。支持字母a~z、短划线（-）、下划线（_）和数字。
         * > 仅HTTPS监听支持此参数。
         * @example `test_client-verify-alias_123456`
         */
        XForwardedForClientCertClientVerifyAlias: string;
        /**
         * 是否通过`X-Forwarded-Clientcert-clientverify`头字段获取对访问负载均衡实例客户端证书的校验结果。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > 仅HTTPS监听支持此参数。
         * @example `true`
         */
        XForwardedForClientCertClientVerifyEnabled: boolean;
        /**
         * 自定义头名称，只有当**XForwardedForClientCertFingerprintEnabled**的值为**true**时生效。
         * 取值：1\~40个字符。支持字母a~z、短划线（-）、下划线（_）和数字。
         * > 仅HTTPS监听支持此参数。
         * @example `test_finger-print-alias_123456`
         */
        XForwardedForClientCertFingerprintAlias: string;
        /**
         * 是否通过`X-Forwarded-Clientcert-fingerprint`头字段获取访问负载均衡实例客户端证书的指纹取值。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > 仅HTTPS监听支持此参数。
         * @example `true`
         */
        XForwardedForClientCertFingerprintEnabled: boolean;
        /**
         * 自定义头名称，只有当**XForwardedForClientCertIssuerDNEnabled**的值为**true**的时候，此值才会生效。
         * 取值：1\~40个字符。支持字母a~z、短划线（-）、下划线（_）和数字。
         * > 仅HTTPS监听支持此参数。
         * @example `test_issue-dn-alias_123456`
         */
        XForwardedForClientCertIssuerDNAlias: string;
        /**
         * 是否通过`X-Forwarded-Clientcert-issuerdn`头字段获取访问负载均衡实例客户端证书的发行者信息。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > 仅HTTPS监听支持此参数。
         * @example `true`
         */
        XForwardedForClientCertIssuerDNEnabled: boolean;
        /**
         * 自定义头名称，只有当**XForwardedForClientCertSubjectDNEnabled**的值为**true**时，此值才会生效。
         * 取值：1\~40个字符。支持字母a~z、短划线（-）、下划线（_）和数字。
         * > 仅HTTPS监听支持此参数。
         * @example `test_subject-dn-alias_123456`
         */
        XForwardedForClientCertSubjectDNAlias: string;
        /**
         * 是否通过`X-Forwarded-Clientcert-subjectdn`头字段获取访问负载均衡实例客户端证书的所有者信息。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > 仅HTTPS监听支持此参数。
         * @example `true`
         */
        XForwardedForClientCertSubjectDNEnabled: boolean;
        /**
         * 是否通过`X-Forwarded-Client-Port`头字段获取访问负载均衡实例客户端的端口。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > HTTP和HTTPS监听支持此参数。
         * @example `true`
         */
        XForwardedForClientSrcPortEnabled: boolean;
        /**
         * 是否通过`X-Forwarded-For`头字段获取来访者真实IP。取值：
         * - **true**（默认值）：是。
         * - **false**：否。
         * > HTTP和HTTPS监听支持此参数。
         * @example `true`
         */
        XForwardedForEnabled: boolean;
        /**
         * 是否通过`X-Forwarded-Proto`头字段获取负载均衡实例的监听协议。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > HTTP、HTTPS和QUIC监听支持此参数。
         * @example `false`
         */
        XForwardedForProtoEnabled: boolean;
        /**
         * 是否通过`SLB-ID`头字段获取负载均衡实例ID。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > HTTP、HTTPS和QUIC监听支持此参数。
         * @example `false`
         */
        XForwardedForSLBIdEnabled: boolean;
        /**
         * 是否通过`X-Forwarded-Port`头字段获取负载均衡实例的监听端口。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > HTTP、HTTPS和QUIC监听支持此参数。
         * @example `false`
         */
        XForwardedForSLBPortEnabled: boolean;
        /**
         * 是否允许ALB从X-Forwarded-For头字段中查找真实客户端IP。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > HTTP、HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForClientSourceIpsEnabled: boolean;
        /**
         * 指定可信的代理IP。
         * 应用型负载均衡ALB会从后往前遍历`X-Forwarded-For`，选取第一个不在可信IP列表中的IP作为真实的客户端IP，该IP会被用于源IP限速。
         * @example `10.1.1.0/24`
         */
        XForwardedForClientSourceIpsTrusted: string;
    };
    /**
     * 配置关联的QUIC监听。
     */
    "QuicConfig"?: {
        /**
         * 需要关联的QUIC监听ID，HTTPS监听时有效，当**QuicUpgradeEnabled**为**true**时该参数必选。
         * > 原始监听和关联的QUIC监听必须属于同一个ALB实例，并且此QUIC监听之前没有被关联过。
         * @example `lsn-o4u54y73wq7b******`
         */
        QuicListenerId: string;
        /**
         * 是否开启QUIC升级。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > 仅HTTPS监听支持此参数。
         * @example `false`
         */
        QuicUpgradeEnabled: boolean;
    };
    /**
     * 证书列表信息。
     */
    "Certificates"?: {
        /**
         * 证书ID，当前仅支持服务器证书。最多支持添加20个证书ID。
         * > 当**ListenerProtocol**参数取值为**HTTPS**或**QUIC**的时候，此参数为必填。
         * @example `103705*******`
         */
        CertificateId: string;
    }[];
    /**
     * 监听配置的CA证书列表。
     */
    "CaCertificates"?: {
        /**
         * CA证书ID。目前仅支持添加1个CA证书。
         * > 当**CaEnabled**参数取值为**true**的时候，此参数为必填。
         * @example `123157*******`
         */
        CertificateId: string;
    }[];
    /**
     * 规则动作列表。
     */
    "DefaultActions": {
        /**
         * 转发动作对应的配置。最多支持添加20个转发动作对应的配置。
         */
        ForwardGroupConfig: {
            /**
             * 转发目标服务器元组。
             */
            ServerGroupTuples: {
                /**
                 * 转发到的目的服务器组ID。
                 * @example `sgp-8ilqs4axp6******`
                 */
                ServerGroupId: string;
            }[];
        };
        /**
         * 动作类型。最多支持添加1个动作类型。
         * 取值：**ForwardGroup**，表示转发至多个服务器组。
         * @example `ForwardGroup`
         */
        Type: string;
    }[];
    /**
     * 标签。
     */
    "Tag"?: {
        /**
         * 标签键。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
         * @example `product`
         */
        Value: string;
    }[];
}
