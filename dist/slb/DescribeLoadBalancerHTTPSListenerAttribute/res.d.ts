export interface DescribeLoadBalancerHTTPSListenerAttributeResponse {
    /**
     * 访问控制类型：
     * * **white**： 仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于只允许特定IP访问的场景。设置白名单存在一定业务风险。一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。
     *  如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
     * * **black**： 来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于只限制某些特定IP访问的场景。
     *  如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
     * > 当**AclStatus**参数的值为**on**时，该参数必选。
     * @example `white`
     */
    AclType: string;
    /**
     * 是否通过`XForwardedFor_ClientCertClientVerify`头字段获取对访问负载均衡实例客户端证书的校验结果。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `off`
     */
    XForwardedFor_ClientCertClientVerify: string;
    /**
     * CA证书ID。
     * @example `idkp-234-cn-test-0**`
     */
    CACertificateId: string;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF3********`
     */
    RequestId: string;
    /**
     * 健康检查的端口。
     * > 当**HealthCheck**值为**on**时才会有效。
     * @example `8080`
     */
    HealthCheckConnectPort: number;
    /**
     * 实例后端使用的端口。
     * @example `8080`
     */
    BackendServerPort: number;
    /**
     * Cookie超时时间。
     * @example `500`
     */
    CookieTimeout: number;
    /**
     * 用于健康检查的域名。
     * @example `www.test.com`
     */
    HealthCheckDomain: string;
    /**
     * 是否通过`X-Forwarded-For`的方式获取来访者真实IP。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    XForwardedFor: string;
    /**
     * 是否通过`XForwardedFor_ClientCertFingerprint`头字段获取访问负载均衡实例客户端证书的指纹。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `off`
     */
    XForwardedFor_ClientCertFingerprint: string;
    /**
     * 指定连接空闲超时时间，取值范围为**1**~**60**，默认值为**15**。单位：秒。
     * 在超时时间内一直没有访问请求，负载均衡会暂时中断当前连接，直到一下次请求来临时重新建立新的连接。
     * @example `23`
     */
    IdleTimeout: number;
    /**
     * 实例前端使用的端口。
     * @example `80`
     */
    ListenerPort: number;
    /**
     * 用于健康检查的URI。
     * @example `/test/index.html`
     */
    HealthCheckURI: string;
    /**
     * 是否通过`XForwardedFor_SLBPORT`头字段获取负载均衡实例的监听端口。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `off`
     */
    XForwardedFor_SLBPORT: string;
    /**
     * Cookie的处理方式。
     * 取值：**insert**或**server**。
     * * **insert**：植入Cookie。
     *
     *
     *   客户端第一次访问时，负载均衡会在返回请求中植入Cookie，下次客户端携带此Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器上。
     * * **server**：重写Cookie。
     *
     *
     *   负载均衡发现用户自定义了Cookie，将会对原来的Cookie进行重写，下次客户端携带新的Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器。
     * @example `insert`
     */
    StickySessionType: string;
    /**
     * 调度算法。取值：**wrr**或**rr**。
     * * **wrr**：权重值越高的后端服务器，被轮询到的概率也越高。
     * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
     * @example `wrr`
     */
    Scheduler: string;
    /**
     * 是否通过`X-Forwarded-Proto`头字段获取负载均衡实例的监听协议。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    XForwardedFor_proto: string;
    /**
     * 监听HTTP类型健康检查的健康检查方法。取值：**head**或**get**。
     * > **HealthCheck**值为**on**时，该参数才会显示。
     * @example `get`
     */
    HealthCheckMethod: string;
    /**
     * 只有性能保障型实例才可以指定TLSCipherPolicy参数，每种policy定义了一种安全策略。
     * 安全策略包含HTTPS可选的TLS协议版本和配套的加密算法套件。
     * - **tls_cipher_policy_1_0**：
     *   支持TLS版本： TLSv1.0、TLSv1.1和TLSv1.2。
     *   支持加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
     * - **tls_cipher_policy_1_1**：
     *   支持TLS版本： TLSv1.1和TLSv1.2。
     *   支持加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
     * - **tls_cipher_policy_1_2**
     *   支持TLS版本：TLSv1.2。
     *   支持加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
     * - **tls_cipher_policy_1_2_strict**
     *   支持TLS版本：TLSv1.2。
     *   支持加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、ECDHE-RSA-AES128-SHA和ECDHE-RSA-AES256-SHA。
     * - **tls_cipher_policy_1_2_strict_with_1_3**
     *
     *    支持TLS版本：TLSv1.2及TLSv1.3。
     *
     *    支持的加密算法套件：TLS_AES_128_GCM_SHA256、TLS_AES_256_GCM_SHA384、TLS_CHACHA20_POLY1305_SHA256、TLS_AES_128_CCM_SHA256、TLS_AES_128_CCM_8_SHA256、ECDHE-ECDSA-AES128-GCM-SHA256、ECDHE-ECDSA-AES256-GCM-SHA384、ECDHE-ECDSA-AES128-SHA256、ECDHE-ECDSA-AES256-SHA384、ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、ECDHE-ECDSA-AES128-SHA、ECDHE-ECDSA-AES256-SHA、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA。
     * @example `tls_cipher_policy_1_0`
     */
    TLSCipherPolicy: string;
    /**
     * 当前监听的状态。取值：
     * - **running**：运行中。
     * - **stopped**：已停止。
     * @example `stopped`
     */
    Status: string;
    /**
     * 绑定的服务器组ID。
     * @example `rsp-cige6j5e********`
     */
    VServerGroupId: string;
    /**
     * 是否通过`XForwardedFor_ClientSrcPort`头字段获取访问负载均衡实例客户端的端口。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `off`
     */
    XForwardedFor_ClientSrcPort: string;
    /**
     * 服务器上配置的Cookie。
     * @example `testCookie`
     */
    Cookie: string;
    /**
     * 是否开启`Gzip`压缩。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    Gzip: string;
    /**
     * 是否开启`HTTP2`特性。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `off`
     */
    EnableHttp2: string;
    /**
     * 监听的带宽峰值。单位：Mbps。
     * @example `10`
     */
    Bandwidth: number;
    /**
     * 自定义监听名称。
     * @example `HTTPS_443`
     */
    Description: string;
    /**
     * 每次健康检查响应的最大超时间。单位：秒。
     * @example `3`
     */
    HealthCheckTimeout: number;
    /**
     * 是否开启访问控制功能。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `off`
     */
    AclStatus: string;
    /**
     * 不健康检查阈值。
     * @example `4`
     */
    UnhealthyThreshold: number;
    /**
     * 是否通过`SLB-ID`头字段获取负载均衡实例ID。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    XForwardedFor_SLBID: string;
    /**
     * 是否通过`XForwardedFor_ClientCertSubjectDN`头字段获取访问负载均衡实例客户端证书的所有者信息。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `off`
     */
    XForwardedFor_ClientCertSubjectDN: string;
    /**
     * 是否处于安全状态。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    SecurityStatus: string;
    /**
     * 健康检查正常的HTTP状态码。
     * @example `http_2xx,http_3xx`
     */
    HealthCheckHttpCode: string;
    /**
     * 指定请求超时时间，取值范围为**1**~**180**，默认值为**60**。单位：秒。
     * 在超时时间内后端服务器一直没有响应，负载均衡将放弃等待，给客户端返回HTTP 504错误码。
     * @example `43`
     */
    RequestTimeout: number;
    /**
     * 健康检查的时间间隔。单位：秒。
     * @example `5`
     */
    HealthCheckInterval: number;
    /**
     * 服务器证书的ID。
     * @example `idkp-123-cn-test-0**`
     */
    ServerCertificateId: string;
    /**
     * 监听绑定的访问策略组ID。
     * > 当**AclStatus**参数的值为**on**时，该参数必选。
     * @example `acl-a2do9e413e0spzasx****`
     */
    AclId: string;
    /**
     * 是否通过`XForwardedFor_ClientCertIssuerDN`头字段获取访问负载均衡实例客户端证书的发行者信息。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `off`
     */
    XForwardedFor_ClientCertIssuerDN: string;
    /**
     * 健康检查阈值。
     * @example `4`
     */
    HealthyThreshold: number;
    /**
     * 是否通过`SLB-IP`头字段获取客户端请求的VIP（Virtual IP address）。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    XForwardedFor_SLBIP: string;
    /**
     * 是否开启会话保持。取值：
     * - **on**：开启。
     * - **off**：未开启。
     * @example `on`
     */
    StickySession: string;
    /**
     * 是否开启健康检查。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    HealthCheck: string;
    AclIds: {
        /**
         * 监听绑定的访问策略组ID。
         */
        AclId: any[];
    };
    Rules: {
        /**
         * 监听下的转发规则列表。
         */
        Rule: {
            /**
             * 转发规则的目标服务器组ID。
             * @example `rsp-cige6j5e********`
             */
            VServerGroupId: string;
            /**
             * 访问路径。
             * @example `/example`
             */
            Url: string;
            /**
             * 域名。
             * @example `www.example.com`
             */
            Domain: string;
            /**
             * 转发规则名称。
             * @example `example`
             */
            RuleName: string;
            /**
             * 转发规则ID。
             * @example `23`
             */
            RuleId: string;
        }[];
    };
    DomainExtensions: {
        /**
         * 域名扩展列表。
         */
        DomainExtension: {
            /**
             * 与域名对应的证书ID。
             * @example `13344444****`
             */
            ServerCertificateId: string;
            /**
             * 域名。
             * @example `www.example.com`
             */
            Domain: string;
            /**
             * 域名扩展ID。
             * @example `12`
             */
            DomainExtensionId: string;
        }[];
    };
    /**
     * 传统型负载均衡实例ID。
     * @example `lb-bp1mxu5r8lau****`
     */
    LoadBalancerId: string;
    Tags: {
        /**
         * 标签列表。
         */
        Tag: {
            /**
             * 监听的标签键。N的取值范围：**1**~**20**。一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
             * @example `TestKey`
             */
            TagKey: string;
            /**
             * 监听的标签值。N的取值范围：**1**~**20**。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
             * @example `TestValue`
             */
            TagValue: string;
        }[];
    };
}
