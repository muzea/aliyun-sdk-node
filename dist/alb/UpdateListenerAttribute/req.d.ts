export interface UpdateListenerAttributeRequest {
    /**
     * 应用型负载均衡实例监听ID。
     * @example `lsn-o4u54y73wq7b******`
     */
    "ListenerId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B******`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会更新监听的配置。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回`HTTP 2xx`状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 自定义监听名称。
     * 长度为2\~256个字符，长度为2\~256个字符，可包含英文字母、数字、中文、半角逗号（,）、半角句号（.）、半角分号（;）、正斜线（/）、at（@）、下划线（_）和短划线（-）。
     * @example `HTTP_80`
     */
    "ListenerDescription"?: string;
    /**
     * 指定请求超时时间。单位：秒。取值范围：**1~180**。
     * 如果在超时时间内后端服务器一直没有响应，负载均衡将放弃等待，给客户端返回`HTTP 504`错误码。
     * @example `3`
     */
    "RequestTimeout"?: number;
    /**
     * 指定连接空闲超时时间。单位：秒。取值范围：**1~60**。
     * 如果在超时时间内一直没有访问请求，负载均衡会暂时中断当前连接，直到一下次请求来临时重新建立新的连接。
     * @example `15`
     */
    "IdleTimeout"?: number;
    /**
     * 是否开启Gzip压缩，对特定文件类型进行压缩。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "GzipEnabled"?: boolean;
    /**
     * 是否开启HTTP/2特性。取值：
     * - **true**：是。
     * - **false**：否。
     * > 仅HTTPS监听支持此参数。
     * @example `true`
     */
    "Http2Enabled"?: boolean;
    /**
     * 安全策略，支持系统安全策略和自定义安全策略。
     * > 仅HTTPS监听支持此参数。
     * @example `tls_cipher_policy_1_0`
     */
    "SecurityPolicyId"?: string;
    /**
     * 是否开启双向认证。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    "CaEnabled"?: boolean;
    /**
     * XForwardedFor相关属性配置。
     */
    "XForwardedForConfig"?: {
        /**
         * 自定义头字段名称，只有当**XForwardedForClientCertClientVerifyEnabled**的值为**true**时，此值才会生效。
         * 取值限制：长度1\~40个字符。支持字母a~z、短划线（-）、下划线（_）和数字。
         * > 仅HTTPS监听支持此参数。
         * @example `test_client-verify-alias_123456`
         */
        XForwardedForClientCertClientVerifyAlias: string;
        /**
         * 是否通过`X-Forwarded-Clientcert-clientverify`头字段获取对访问负载均衡实例客户端证书的校验结果。取值：
         * - **true**：是。
         * - **false**：否。
         * > 仅HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForClientCertClientVerifyEnabled: boolean;
        /**
         * 自定义头字段名称，只有当**XForwardedForClientCertFingerprintEnabled**的值为**true**时生效。
         * 取值限制：长度为1\~40个字符。支持字母a~z、短划线（-）、下划线（_）和数字。
         * > 仅HTTPS监听支持此参数。
         * @example `test_finger-print-alias_123456`
         */
        XForwardedForClientCertFingerprintAlias: string;
        /**
         * 是否通过`X-Forwarded-Clientcert-fingerprint`头字段获取访问负载均衡实例客户端证书的指纹取值。取值：
         * - **true**：是。
         * - **false**：否。
         * > 仅HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForClientCertFingerprintEnabled: boolean;
        /**
         * 自定义头字段名称，只有当**XForwardedForClientCertIssuerDNEnabled**的值为**true**时才生效。
         * 取值限制：长度为1\~40个字符。支持字母a~z、短划线（-）、下划线（_）和数字。
         * > 仅HTTPS监听支持此参数。
         * @example `test_issue-dn-alias_123456`
         */
        XForwardedForClientCertIssuerDNAlias: string;
        /**
         * 是否通过`X-Forwarded-Clientcert-issuerdn`头字段获取访问负载均衡实例客户端证书的发行者信息。取值：
         * - **true**：是。
         * - **false**：否。
         * > 仅HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForClientCertIssuerDNEnabled: boolean;
        /**
         * 自定义头字段名称，只有当**XForwardedForClientCertSubjectDNEnabled**的值为**true**时才生效。
         * 取值限制：长度为1\~40字符。支持字母a~z、短划线（-）、下划线（_）和数字。
         * > 仅HTTPS监听支持此参数。
         * @example `test_subject-dn-alias_123456`
         */
        XForwardedForClientCertSubjectDNAlias: string;
        /**
         * 是否通过`X-Forwarded-Clientcert-subjectdn`头字段获取访问负载均衡实例客户端证书的所有者信息。取值：
         * - **true**：是。
         * - **false**：否。
         * > 仅HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForClientCertSubjectDNEnabled: boolean;
        /**
         * 是否通过`X-Forwarded-Client-Port`头字段获取访问负载均衡实例客户端的端口。取值：
         * - **true**：是。
         * - **false**：否。
         * > HTTP和HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForClientSrcPortEnabled: boolean;
        /**
         * 是否开启通过`X-Forwarded-For`头字段获取来访者真实IP。取值：
         * - **true**：是。
         * - **false**：否。
         * > HTTP和HTTPS监听支持此参数。
         * @example `true`
         */
        XForwardedForEnabled: boolean;
        /**
         * 是否通过`X-Forwarded-Proto`头字段获取负载均衡实例的监听协议。取值：
         * - **true**：是。
         * - **false**：否。
         * > HTTP、HTTPS和QUIC监听支持此参数。
         * @example `false`
         */
        XForwardedForProtoEnabled: boolean;
        /**
         * 是否通过`SLB-ID`头字段获取负载均衡实例ID。取值：
         * - **true**：是。
         * - **false**：否。
         * > HTTP、HTTPS和QUIC监听支持此参数。
         * @example `false`
         */
        XForwardedForSLBIdEnabled: boolean;
        /**
         * 是否通过`X-Forwarded-Port`头字段获取负载均衡实例的监听端口。取值：
         * - **true**：是。
         * - **false**：否。
         * > HTTP、HTTPS和QUIC监听支持此参数。
         * @example `false`
         */
        XForwardedForSLBPortEnabled: boolean;
        /**
         * 是否允许ALB从X-Forwarded-For头字段中查找真实客户端IP。取值：
         * - **true**：是。
         * - **false**：否。
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
     * 启用关联QUIC监听时的配置信息。
     */
    "QuicConfig"?: {
        /**
         * 需要关联的QUIC监听ID。**QuicUpgradeEnabled**值为**true**时必选。HTTPS监听时有效。
         * > 原始监听和关联的QUIC监听必须属于同一个ALB实例，并且此QUIC监听之前没有被关联过。
         * @example `lsn-333`
         */
        QuicListenerId: string;
        /**
         * 是否开启QUIC升级。取值：
         * - **true**：是。
         * - **false**：否。
         * > 仅HTTPS监听时有效。
         * @example `false`
         */
        QuicUpgradeEnabled: boolean;
    };
    /**
     * 证书列表。
     */
    "Certificates"?: {
        /**
         * 证书ID，当前仅支持服务器证书。最多支持添加20个证书ID。
         * @example `123157******`
         */
        CertificateId: string;
    }[];
    /**
     * CA证书信息。
     */
    "CaCertificates"?: {
        /**
         * CA证书ID。目前仅支持添加1个CA证书。
         * > 当**CaEnabled**参数取值为**true**的时候，此参数为必填。
         * @example `123359******`
         */
        CertificateId: string;
    }[];
    /**
     * 默认规则动作列表。
     */
    "DefaultActions"?: {
        /**
         * 转发动作对应的配置，**Type**类型为**ForwardGroup**时必填且有效。最多支持添加20个转发动作对应的配置。
         */
        ForwardGroupConfig: {
            /**
             * 转发目标服务器元组列表。
             */
            ServerGroupTuples: {
                /**
                 * 转发到的目的服务器组ID。
                 * @example `sgp-i5qt20******`
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
}
