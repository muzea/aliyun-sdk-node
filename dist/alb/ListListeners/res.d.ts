export interface ListListenersResponse {
    /**
     * 应用型负载均衡监听列表。
     */
    Listeners: {
        /**
         * 默认规则动作列表。
         */
        DefaultActions: {
            /**
             * 转发规则动作对应的配置。动作类型为**ForwardGroup**时有效。
             */
            ForwardGroupConfig: {
                /**
                 * 转发目标服务器组。
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
             * 动作类型。取值：**ForwardGroup**，表示转发至多个服务器组。
             * @example `ForwardGroup`
             */
            Type: string;
        }[];
        /**
         * 是否开启Gzip压缩，对特定文件类型进行压缩。取值：
         * - **true**：是。
         * - **false**：否。
         * @example `false`
         */
        GzipEnabled: boolean;
        /**
         * 是否开启HTTP/2特性。取值：
         * - **true**：是。
         * - **false**：否。
         * > 仅HTTPS监听支持此参数。
         * @example `false`
         */
        Http2Enabled: boolean;
        /**
         * 指定连接空闲超时时间。单位：秒。取值范围：**1~60**。
         * 如果在超时时间内一直没有访问请求，负载均衡会暂时中断当前连接，直到接收到下一次请求时重新建立新的连接。
         * @example `3`
         */
        IdleTimeout: number;
        /**
         * 自定义监听名称。
         * @example `HTTP_80`
         */
        ListenerDescription: string;
        /**
         * 监听ID。
         * @example `lsn-o4u34y73wq7b******`
         */
        ListenerId: string;
        /**
         * 应用型负载均衡实例前端使用的端口。取值：**1~65535**。
         * @example `80`
         */
        ListenerPort: number;
        /**
         * 监听协议。取值：
         * - **HTTP**：协议类型为HTTP。
         * - **HTTPS**：协议类型为HTTPS。
         * - **QUIC**：协议类型为QUIC。
         * @example `HTTP`
         */
        ListenerProtocol: string;
        /**
         * 当前监听的状态，取值：
         * - **Provisioning**：创建中。
         * - **Running**：运行中。
         * - **Configuring**：配置中。
         * - **Stopped**：已停止。
         * @example `Running`
         */
        ListenerStatus: string;
        /**
         * 应用型负载均衡实例ID。
         * @example `alb-bd6oylbckp6k9x****`
         */
        LoadBalancerId: string;
        /**
         * 日志配置。
         */
        LogConfig: {
            /**
             * 访问日志是否开启携带自定义头。取值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            AccessLogRecordCustomizedHeadersEnabled: boolean;
            /**
             * 访问日志Xtrace相关的配置信息。
             */
            AccessLogTracingConfig: {
                /**
                 * 是否开启Xtrace功能。取值：
                 * - **true**：是。
                 * - **false**：否。
                 * > 只有实例访问日志开关**AccessLogEnabled**打开时，才能设置此参数为**true**。
                 * @example `true`
                 */
                TracingEnabled: boolean;
                /**
                 * Xtrace的采样率。取值：**1~10000**。
                 * > **TracingEnabled**为**true**时，此值有效。
                 * @example `100`
                 */
                TracingSample: number;
                /**
                 * Xtrace类型，合法取值为**Zipkin**。
                 * > **TracingEnabled**为**true**时，此值有效。
                 * @example `Zipkin`
                 */
                TracingType: string;
            };
        };
        /**
         * 启用关联QUIC监听时的配置信息。
         */
        QuicConfig: {
            /**
             * 需要关联的QUIC监听ID。**QuicUpgradeEnabled**为**true**时必选。HTTPS监听时有效。
             * > 原始监听和关联的QUIC监听必须属于同一个ALB实例，并且此QUIC监听之前没有被关联过。
             * @example `lsn-o4u54y73wq7b******`
             */
            QuicListenerId: string;
            /**
             * 是否开启QUIC升级。取值：
             * - **true**：是。
             * - **false**：否。
             * > 仅HTTPS监听时有效。
             * @example `true`
             */
            QuicUpgradeEnabled: boolean;
        };
        /**
         * 指定请求超时时间。单位：秒。取值：**1~180**。
         * 如果在超时时间内后端服务器一直没有响应，负载均衡将放弃等待，给客户端返回`HTTP 504`错误码。
         * @example `34`
         */
        RequestTimeout: number;
        /**
         * 安全策略。
         * > 仅HTTPS监听支持此参数。
         * @example `tls_cipher_policy_1_1`
         */
        SecurityPolicyId: string;
        /**
         * `XForward`头字段配置信息。
         */
        XForwardedForConfig: {
            /**
             * 自定义头字段名称，只有当**XForwardedForClientCertClientVerifyEnabled**的值为**true**的时候，此值才会生效；否则该值不会生效。
             * 取值限制：长度为1~40字符。支持字母a-z、数字、短划线（-）和下划线（_）。
             * > 仅HTTPS监听支持此参数。
             * @example `test_client-verify-alias_123456`
             */
            XForwardedForClientCertClientVerifyAlias: string;
            /**
             * 是否通过`X-Forwarded-Clientcert-clientverify`头字段获取对访问负载均衡实例客户端证书的校验结果。取值：
             * - **true**：是。
             * - **false**：否。
             * > 仅HTTPS监听支持此参数。
             * @example `true`
             */
            XForwardedForClientCertClientVerifyEnabled: boolean;
            /**
             * 自定义头名称，只有当**XForwardedForClientCertFingerprintEnabled**的值为**true**时生效。
             * 取值限制：长度为1~40字符。支持字母a-z、数字、短划线（-）和下划线（_）。
             * > 仅HTTPS监听支持此参数。
             * @example `test_finger-print-alias_123456`
             */
            XForwardedForClientCertFingerprintAlias: string;
            /**
             * 是否通过`X-Forwarded-Clientcert-fingerprint`头字段获取访问负载均衡实例客户端证书的指纹取值。取值：
             * - **true**：是。
             * - **false**：否。
             * > 仅HTTPS监听支持此参数。
             * @example `true`
             */
            XForwardedForClientCertFingerprintEnabled: boolean;
            /**
             * 自定义头名称，只有当**XForwardedForClientCertIssuerDNEnabled**的值为**true**的时候，此值才会生效。
             * 取值限制：长度为1~40字符。支持字母a-z、数字、短划线（-）和下划线（_）。
             * > 仅HTTPS监听支持此参数。
             * @example `test_issue-dn-alias_123456`
             */
            XForwardedForClientCertIssuerDNAlias: string;
            /**
             * 是否通过`X-Forwarded-Clientcert-issuerdn`头字段获取访问负载均衡实例客户端证书的发行者信息。取值：
             * - **true**：是。
             * - **false**：否。
             * > 仅HTTPS监听支持此参数。
             * @example `true`
             */
            XForwardedForClientCertIssuerDNEnabled: boolean;
            /**
             * 自定义头名称，只有当**XForwardedForClientCertSubjectDNEnabled**的值为**true**时，此值才会生效。
             * 取值限制：长度为1~40字符。支持字母a-z、数字、短划线（-）和下划线（_）。
             * > 仅HTTPS监听支持此参数。
             * @example `test_subject-dn-alias_123456`
             */
            XForwardedForClientCertSubjectDNAlias: string;
            /**
             * 是否通过`X-Forwarded-Clientcert-subjectdn`头字段获取访问负载均衡实例客户端证书的所有者信息。取值：
             * - **true**：是。
             * - **false**：否。
             * > 仅HTTPS监听支持此参数。
             * @example `true`
             */
            XForwardedForClientCertSubjectDNEnabled: boolean;
            /**
             * 是否通过`X-Forwarded-Client-Port`头字段获取访问负载均衡实例客户端的端口。取值：
             * - **true**：是。
             * - **false**：否。
             * > HTTP和HTTPS监听支持此参数。
             * @example `true`
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
             * @example `true`
             */
            XForwardedForProtoEnabled: boolean;
            /**
             * 是否通过`SLB-ID`头字段获取负载均衡实例ID。取值：
             * - **true**：是。
             * - **false**：否。
             * > HTTP、HTTPS和QUIC监听支持此参数。
             * @example `true`
             */
            XForwardedForSLBIdEnabled: boolean;
            /**
             * 是否通过`X-Forwarded-Port`头字段获取负载均衡实例的监听端口。取值：
             * - **true**：是。
             * - **false**：否。
             * > HTTP、HTTPS和QUIC监听支持此参数。
             * @example `true`
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
         * 标签。
         */
        Tags: {
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
    }[];
    /**
     * 本次请求所返回的最大记录条数。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 当前调用返回读取到的位置，设置为空代表数据已经读取完毕。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF3******`
     */
    RequestId: string;
    /**
     * 本次请求条件下的数据总量。
     * @example `1000`
     */
    TotalCount: number;
}
