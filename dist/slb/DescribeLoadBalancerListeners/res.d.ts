export interface DescribeLoadBalancerListenersResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF34B540710`
     */
    RequestId: string;
    /**
     * 本次请求条件下的数据总量。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 返回传统型负载均衡的监听列表。
     * > 实例未配置监听时，不会返回该参数。
     */
    Listeners: {
        /**
         * 访问控制类型。取值：
         * - **white**：仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于只允许特定IP访问的场景。设置白名单存在一定业务风险。一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。
         *  如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
         * - **black**：来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于只限制某些特定IP访问的场景。
         *  如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
         * @example `white`
         */
        AclType: string;
        /**
         * 监听的状态。取值：
         * - **running**：表示监听正常运行。
         * - **stopped**：表示监听运行停止。
         * @example `running`
         */
        Status: string;
        /**
         * 监听绑定的虚拟服务器组ID。
         * @example `rsp-cige6j****`
         */
        VServerGroupId: string;
        /**
         * 传统型负载均衡监听协议。
         * @example `http`
         */
        ListenerProtocol: string;
        /**
         * 传统型负载均衡实例的ID。
         * @example `lb-bp1b6c719dfa****`
         */
        LoadBalancerId: string;
        /**
         * 监听端口。
         * @example `80`
         */
        ListenerPort: number;
        /**
         * 访问控制策略组ID。
         * @example `acl-a2do9e413e0spzasx****`
         */
        AclId: string;
        /**
         * 调度算法。取值：
         * - **wrr**：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
         * - **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
         * - **sch**：基于源 IP 地址的一致性 hash，相同的源地址会调度到相同的后端服务器。
         * - **tch**：基于四元组的一致性 hash（源 IP+目的 IP+源端口+目的端口），相同的流会调度到相同的后端服务器。
         * - **qch**：基于 QUIC Connection ID 一致性 hash，相同的 QUIC Connection ID 会调度到相同的后端服务器。
         * > 仅性能保障型实例支持 **sch**、**tch** 和 **qch** 一致性 hash 算法。
         * @example `wrr`
         */
        Scheduler: string;
        /**
         * 监听的带宽峰值。单位：Mbps。
         * @example `-1`
         */
        Bandwidth: number;
        /**
         * 监听描述。
         * @example `test`
         */
        Description: string;
        /**
         * 是否开启访问控制功能。取值：
         * - **on**：是
         * - **off**：否
         * @example `off`
         */
        AclStatus: string;
        /**
         * 后端服务器的端口。
         * > `VServerGroupId`和`MasterSlaveServerGroupId`均为空时，此参数有效。
         * @example `80`
         */
        BackendServerPort: number;
        /**
         * 访问控制策略组ID列表。
         */
        AclIds: any[];
        /**
         * HTTP监听配置。
         */
        HTTPListenerConfig: {
            /**
             * 健康检查HTTP协议版本。
             * @example `HTTP 1.0`
             */
            HealthCheckHttpVersion: string;
            /**
             * 是否通过`XForwardedFor_ClientSrcPort`头字段获取访问负载均衡实例客户端的端口。取值：
             * - **on**：是
             * - **off**：否
             * @example `on`
             */
            XForwardedFor_ClientSrcPort: string;
            /**
             * 服务器上配置的Cookie。
             * @example `B490B5EBF6F3CD402E515D22BCDA****`
             */
            Cookie: string;
            /**
             * 是否开启Gzip压缩。取值：
             * - **on**：是
             * - **off**：否
             * @example `on`
             */
            Gzip: string;
            /**
             * 健康检查的端口。
             * > 当**HealthCheck**值为**on**时该参数有效。
             * @example `8080`
             */
            HealthCheckConnectPort: number;
            /**
             * 每次健康检查响应的最大超时间，单位：秒。
             * @example `3`
             */
            HealthCheckTimeout: number;
            /**
             * 健康检查协议。
             * @example `tcp`
             */
            HealthCheckType: string;
            /**
             * Cookie超时时间。单位：秒。
             * 取值：**1**~**86400**。
             * @example `500`
             */
            CookieTimeout: number;
            /**
             * 健康检查的域名。
             * @example `www.example.com`
             */
            HealthCheckDomain: string;
            /**
             * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**成功**判定为**失败**。
             * 取值范围：**2**~**10**。
             * @example `4`
             */
            UnhealthyThreshold: number;
            /**
             * 是否通过`SLB-ID`头字段获取负载均衡实例ID。取值：
             * - **on**：是
             * - **off**：否
             * @example `on`
             */
            XForwardedFor_SLBID: string;
            /**
             * HTTP转发至HTTPS的监听端口。
             * > 如果**ListenerForward**的值为**off**，该参数不显示。
             * @example `80`
             */
            ForwardPort: number;
            /**
             * 健康检查正常的HTTP状态码。
             * @example `http_2xx,http_3xx`
             */
            HealthCheckHttpCode: string;
            /**
             * 是否开启HTTP至HTTPS监听转发。取值：
             * - **on**：是
             * - **off**：否
             * @example `on`
             */
            ListenerForward: string;
            /**
             * 是否通过`XForwardedFor`的方式获取来访者真实IP。取值：
             * - **on**：是。
             * - **off**：否。
             * @example `on`
             */
            XForwardedFor: string;
            /**
             * 指定连接空闲超时时间。单位：秒。取值范围：**1**~**60**。
             * 在超时时间内一直没有访问请求，负载均衡会暂时中断当前连接，直到一下次请求来临时重新建立连接。
             * @example `15`
             */
            IdleTimeout: number;
            /**
             * 指定请求超时时间。单位：秒。取值范围：**1**~**180**。
             * 在超时时间内后端服务器一直没有响应，负载均衡将放弃等待，给客户端返回`HTTP 504`错误码。
             * @example `60`
             */
            RequestTimeout: number;
            /**
             * 健康检查的时间间隔，单位：秒。
             * @example `5`
             */
            HealthCheckInterval: number;
            /**
             * 是否通过`XForwardedFor_SLBPORT`头字段获取负载均衡实例的监听端口。取值：
             * - **on**：是
             * - **off**：否
             * @example `on`
             */
            XForwardedFor_SLBPORT: string;
            /**
             * 健康检查的URI。
             * @example `/test/index.html`
             */
            HealthCheckURI: string;
            /**
             * Cookie的处理方式。取值：
             * - **insert**：植入Cookie。客户端第一次访问时，负载均衡会在返回请求中植入Cookie（即在HTTP和HTTPS响应报文中插入SERVERID），下次客户端携带此Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器上。
             * - **server**：重写Cookie。负载均衡发现用户自定义了Cookie，将会对原来的Cookie进行重写，下次客户端携带新的Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器。
             * @example `insert`
             */
            StickySessionType: string;
            /**
             * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**失败**判定为**成功**。
             * 取值范围：**2**~**10**。
             * @example `4`
             */
            HealthyThreshold: number;
            /**
             * 是否通过`X-Forwarded-Proto`头字段获取负载均衡实例的监听协议。取值：
             * - **on**：是
             * - **off**：否
             * @example `on`
             */
            XForwardedFor_proto: string;
            /**
             * 是否通过`SLB-IP`头字段获取客户端请求的VIP（Virtual IP address）。取值：
             * - **on**：是
             * - **off**：否
             * @example `on`
             */
            XForwardedFor_SLBIP: string;
            /**
             * 是否开启会话保持。取值：
             * - **on**：是
             * - **off**：否
             * @example `on`
             */
            StickySession: string;
            /**
             * 健康检查方式。取值：**head**或**get**。
             * @example `get`
             */
            HealthCheckMethod: string;
            /**
             * 是否开启健康检查。取值：
             * - **on**：是
             * - **off**：否
             * @example `on`
             */
            HealthCheck: string;
        };
        /**
         * HTTPS监听配置。
         */
        HTTPSListenerConfig: {
            /**
             * 是否通过`XForwardedFor_ClientCertClientVerify`头字段获取对访问负载均衡实例客户端证书的校验结果。取值：
             * - **on**：是
             * - **off**：否
             * @example `off`
             */
            XForwardedFor_ClientCertClientVerify: string;
            /**
             * 健康检查HTTP协议版本。
             * @example `HTTP 1.0`
             */
            HealthCheckHttpVersion: string;
            /**
             * 是否通过`XForwardedFor_ClientSrcPort`头字段获取访问负载均衡实例客户端的端口。取值：
             * - **on**：是
             * - **off**：否
             * @example `off`
             */
            XForwardedFor_ClientSrcPort: string;
            /**
             * 服务器上配置的Cookie。
             * @example `B490B5EBF6F3CD402E515D22BCDA****`
             */
            Cookie: string;
            /**
             * 是否开启Gzip压缩。取值：
             * - **on**：是
             * - **off**：否
             * @example `on`
             */
            Gzip: string;
            /**
             * 是否开启`HTTP 2.0`特性。取值：
             * - **on**：是
             * - **off**：否
             * @example `off`
             */
            EnableHttp2: string;
            /**
             * CA证书ID。
             * @example `idkp-234-cn-test-0****`
             */
            CACertificateId: string;
            /**
             * 健康检查的端口。
             * @example `8080`
             */
            HealthCheckConnectPort: number;
            /**
             * 每次健康检查响应的最大超时间。单位：秒。
             * @example `3`
             */
            HealthCheckTimeout: number;
            /**
             * 健康检查协议。
             * @example `tcp`
             */
            HealthCheckType: string;
            /**
             * Cookie超时时间。单位：秒。
             * 取值：**1**~**86400**。
             * @example `500`
             */
            CookieTimeout: number;
            /**
             * 健康检查的域名。
             * @example `www.example.com`
             */
            HealthCheckDomain: string;
            /**
             * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**成功**判定为**失败**。
             * 取值范围：**2**~**10**。
             * @example `4`
             */
            UnhealthyThreshold: number;
            /**
             * 是否通过`SLB-ID`头字段获取负载均衡实例ID。取值：
             * - **on**：是
             * - **off**：否
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
             * 健康检查正常的HTTP状态码。
             * @example `http_2xx,http_3xx`
             */
            HealthCheckHttpCode: string;
            /**
             * 是否通过`XForwardedFor_ClientCertFingerprint`头字段获取访问负载均衡实例客户端证书的指纹。取值：
             * - **on**：是
             * - **off**：否
             * @example `off`
             */
            XForwardedFor_ClientCertFingerprint: string;
            /**
             * 是否开启通过`XForwardedFor`的方式获取来访者真实IP。取值：
             * - **on**：是
             * - **off**：否
             * @example `on`
             */
            XForwardedFor: string;
            /**
             * 指定请求超时时间，单位：秒。取值范围：**1**~**180**。
             * 在超时时间内后端服务器一直没有响应，负载均衡将放弃等待，给客户端返回`HTTP 504`错误码。
             * @example `60`
             */
            RequestTimeout: number;
            /**
             * 指定连接空闲超时时间。单位：秒。取值范围：**1**~**60**。
             * 在超时时间内一直没有访问请求，负载均衡会暂时中断当前连接，直到一下次请求来临时重新建立连接。
             * @example `15`
             */
            IdleTimeout: number;
            /**
             * 服务器证书的ID。
             * @example `idkp-123-cn-test-0****`
             */
            ServerCertificateId: string;
            /**
             * 健康检查的时间间隔。单位：秒。
             * @example `5`
             */
            HealthCheckInterval: number;
            /**
             * 是否通过`XForwardedFor_SLBPORT`头字段获取负载均衡实例的监听端口。取值：
             * - **on**：是
             * - **off**：否
             * @example `off`
             */
            XForwardedFor_SLBPORT: string;
            /**
             * 健康检查的URI。
             * @example `/test/index.html`
             */
            HealthCheckURI: string;
            /**
             * Cookie的处理方式。
             * - **insert**：植入Cookie。客户端第一次访问时，负载均衡会在返回请求中植入Cookie（即在HTTP和HTTPS响应报文中插入SERVERID），下次客户端携带此Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器上。
             * - **server**：重写Cookie。负载均衡发现用户自定义了Cookie，将会对原来的Cookie进行重写，下次客户端携带新的Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器。
             * @example `insert`
             */
            StickySessionType: string;
            /**
             * 是否通过`XForwardedFor_ClientCertIssuerDN`头字段获取访问负载均衡实例客户端证书的发行者信息。取值：
             * - **on**：是
             * - **off**：否
             * @example `off`
             */
            XForwardedFor_ClientCertIssuerDN: string;
            /**
             * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**失败**判定为**成功**。
             * 取值范围：**2**~**10**。
             * @example `4`
             */
            HealthyThreshold: number;
            /**
             * 是否通过`X-Forwarded-Proto`头字段获取负载均衡实例的监听协议。取值：
             * - **on**：是
             * - **off**：否
             * @example `on`
             */
            XForwardedFor_proto: string;
            /**
             * 是否通过`SLB-IP`头字段获取客户端请求的VIP（Virtual IP address）。取值：
             * - **on**：是
             * - **off**：否
             * @example `on`
             */
            XForwardedFor_SLBIP: string;
            /**
             * 是否开启会话保持。取值：
             * - **on**：是
             * - **off**：否
             * @example `on`
             */
            StickySession: string;
            /**
             * 健康检查方式。
             * @example `get`
             */
            HealthCheckMethod: string;
            /**
             * 安全策略包含HTTPS可选的TLS协议版本和配套的加密算法套件。
             * - **tls\_cipher\_policy\_1\_0**：
             *   支持TLS版本： TLSv1.0、TLSv1.1和TLSv1.2。
             *   支持加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
             * - **tls\_cipher\_policy\_1\_1**：
             *   支持TLS版本： TLSv1.1和TLSv1.2。
             *   支持加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
             * - **tls\_cipher\_policy\_1\_2**
             *   支持TLS版本：TLSv1.2。
             *   支持加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
             * - **tls\_cipher\_policy\_1\_2\_strict**
             *   支持TLS版本：TLSv1.2。
             *   支持加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、ECDHE-RSA-AES128-SHA和ECDHE-RSA-AES256-SHA。
             * - **tls\_cipher\_policy\_1\_2\_strict\_with\_1\_3**
             *
             *    支持TLS版本：TLSv1.2及TLSv1.3。
             *
             *    支持的加密算法套件：TLS_AES_128_GCM_SHA256、TLS_AES_256_GCM_SHA384、TLS_CHACHA20_POLY1305_SHA256、TLS_AES_128_CCM_SHA256、TLS_AES_128_CCM_8_SHA256、ECDHE-ECDSA-AES128-GCM-SHA256、ECDHE-ECDSA-AES256-GCM-SHA384、ECDHE-ECDSA-AES128-SHA256、ECDHE-ECDSA-AES256-SHA384、ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、ECDHE-ECDSA-AES128-SHA、ECDHE-ECDSA-AES256-SHA、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA。
             * @example `tls_cipher_policy_1_0`
             */
            TLSCipherPolicy: string;
            /**
             * 是否开启健康检查。取值：
             * - **on**：是。
             * - **off**：否。
             * @example `on`
             */
            HealthCheck: string;
        };
        /**
         * TCP监听配置。
         */
        TCPListenerConfig: {
            /**
             * 健康检查正常的HTTP状态码。
             * @example `http_2xx,http_3xx`
             */
            HealthCheckHttpCode: string;
            /**
             * 设置连接优雅中断超时时间。单位：秒。
             * 取值范围：**10~900**。
             * @example `300`
             */
            ConnectionDrainTimeout: number;
            /**
             * 是否开启了会话保持。单位：秒。
             * 取值范围：**0**~**3600**。
             * 取值为**0**时，表示未开启。
             * @example `0`
             */
            PersistenceTimeout: number;
            /**
             * 健康检查的时间间隔，单位为秒。
             * @example `5`
             */
            HealthCheckInterval: number;
            /**
             * 健康检查的URI。
             * @example `/test/index.html`
             */
            HealthCheckURI: string;
            /**
             * 健康检查使用的端口。
             * @example `8080`
             */
            HealthCheckConnectPort: number;
            /**
             * 连接超时时间。单位：秒。
             * @example `500`
             */
            EstablishedTimeout: number;
            /**
             * 健康检查协议。
             * @example `tcp`
             */
            HealthCheckType: string;
            /**
             * 健康检查超时时间。单位：秒。
             * 取值范围：**1**~**300**。
             * @example `100`
             */
            HealthCheckConnectTimeout: number;
            /**
             * 监听绑定的主备服务器组ID。
             * @example `rsp-0bfucw*****`
             */
            MasterSlaveServerGroupId: string;
            /**
             * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**失败**判定为**成功**。
             * 取值范围：**2**~**10**。
             * @example `4`
             */
            HealthyThreshold: number;
            /**
             * 健康检查的域名。
             * @example `www.example.com`
             */
            HealthCheckDomain: string;
            /**
             * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**成功**判定为**失败**。
             * 取值范围：**2**~**10**。
             * @example `4`
             */
            UnhealthyThreshold: number;
            /**
             * 是否开启连接优雅中断。取值：
             * - **on**：是
             * - **off**：否
             * @example `off`
             */
            ConnectionDrain: string;
            /**
             * 健康检查方式。
             * @example `get`
             */
            HealthCheckMethod: string;
            /**
             * 是否开启健康检查。取值：
             * - **on**：是
             * - **off**：否
             * @example `on`
             */
            HealthCheck: string;
            /**
             * 是否支持通过Proxy Protocol协议携带客户端源地址到后端服务器。取值：
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            ProxyProtocolV2Enabled: string;
        };
        /**
         * UDP监听配置。
         */
        UDPListenerConfig: {
            /**
             * 设置连接优雅中断超时时间。单位：秒。
             * 取值范围：**10~900**。
             * @example `300`
             */
            ConnectionDrainTimeout: number;
            /**
             * 健康检查的时间间隔，单位为秒。
             * @example `5`
             */
            HealthCheckInterval: number;
            /**
             * UDP监听健康检查的响应串。
             * @example `ok`
             */
            HealthCheckExp: string;
            /**
             * 健康检查的端口。
             * @example `8080`
             */
            HealthCheckConnectPort: number;
            /**
             * 健康检查响应超时时间。
             * @example `100`
             */
            HealthCheckConnectTimeout: number;
            /**
             * 绑定的主备服务器组ID。
             * @example `rsp-0bfucw****`
             */
            MasterSlaveServerGroupId: string;
            /**
             * 健康检查阈值。
             * @example `4`
             */
            HealthyThreshold: number;
            /**
             * 不健康检查阈值。
             * @example `4`
             */
            UnhealthyThreshold: number;
            /**
             * 是否开启连接优雅中断。取值：
             * - **on**：是
             * - **off**：否
             * @example `off`
             */
            ConnectionDrain: string;
            /**
             * UDP监听健康检查的请求串。
             * @example `hello`
             */
            HealthCheckReq: string;
            /**
             * 是否开启健康检查。取值：
             * - **on**：是
             * - **off**：否
             * @example `on`
             */
            HealthCheck: string;
            /**
             * 是否支持通过Proxy Protocol协议携带客户端源地址到后端服务器。取值：
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            ProxyProtocolV2Enabled: string;
        };
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 资源的标签值。
             * @example `TestValue`
             */
            TagValue: string;
            /**
             * 资源的标签键。
             * @example `TestKey`
             */
            TagKey: string;
        }[];
    }[];
}
