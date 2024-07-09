export interface SetLoadBalancerHTTPListenerAttributeRequest {
    /**
     * 负载均衡实例的地域ID。
     * 您可以从[地域和可用区](~~27585~~)列表或通过调用[DescribeRegions](~~27584~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 负载均衡实例的ID。
     * @example `lb-bp1qjwo61pqz3ah*****`
     */
    "LoadBalancerId": string;
    /**
     * 负载均衡实例前端使用的端口。
     * 取值：**1**~**65535**。
     * @example `80`
     */
    "ListenerPort": number;
    /**
     * 监听的带宽峰值。单位：Mbps。取值：
     * - **-1**：对于按流量计费的公网负载均衡实例，可以将带宽峰值设置为**-1**，即不限制带宽峰值。
     * <props="china">- **1**~**5120**（Mbps）：对于按带宽计费的公网负载均衡实例，可以为每个监听设置带宽峰值，但所有监听的带宽峰值之和不能超过实例的带宽峰值。详情参见[共享实例带宽](~~85930~~)。</props>
     * @example `-1`
     */
    "Bandwidth"?: number;
    /**
     * 是否通过`X-Forwarded-For`头字段获取客户端请求的真实IP。取值：
     * - **on**（默认值）：是。
     * - **off**：否。
     * @example `on`
     */
    "XForwardedFor"?: string;
    /**
     * 调度算法。取值：
     * - **wrr**：权重值越高的后端服务器，被轮询到的概率也越高。
     * - **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
     * @example `wrr`
     */
    "Scheduler"?: string;
    /**
     * 是否开启会话保持。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    "StickySession"?: string;
    /**
     * Cookie的处理方式。取值：
     * - **insert**：植入Cookie。
     *  客户端第一次访问时，负载均衡会在返回请求中植入Cookie（即在HTTP/HTTPS响应报文中插入SERVERID），下次客户端携带此Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器上。
     * - **server**：重写Cookie。
     *
     *  负载均衡发现用户自定义了Cookie，将会对原来的Cookie进行重写，下次客户端携带新的Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器。
     *
     * > 当**StickySession**的值为**on**时，必须指定该参数。
     * @example `insert`
     */
    "StickySessionType"?: string;
    /**
     * Cookie超时时间。
     * 取值：**1**~**86400**秒。
     * >当**StickySession**为**on**且**StickySessionType**为**insert**时，该参数必选。
     * @example `500`
     */
    "CookieTimeout"?: number;
    /**
     * 服务器上配置的Cookie。
     * 长度为1~200字符，只能包含ASCII英文字母和数字字符，不能包含半角逗号（,）、半角分号（;）或空格，也不能以美元符号（$）开头。
     *
     * >当**StickySession**为**on**且**StickySessionType**为**server**时，该参数必选。
     * @example `testCookie`
     */
    "Cookie"?: string;
    /**
     * 是否开启健康检查。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    "HealthCheck"?: string;
    /**
     * 监听HTTP类型健康检查的健康检查方法。取值：**head**或**get**。
     * > **HealthCheck**值为**on**时才会有效。
     * @example `get`
     */
    "HealthCheckMethod"?: string;
    /**
     * 用于健康检查的域名，取值：
     *
     * * **$_ip**： 后端服务器的私网IP。当指定了**$_ip**或**HealthCheckDomain**未指定时，负载均衡会使用各后端服务器的私网IP当做健康检查使用的域名。
     * * **domain**：域名长度为1~80字符，只能包含字母、数字、半角句号（.）和短划线（-）。
     * >在**HealthCheck**值为**on**时才会有效。
     * @example `172.XX.XX.16`
     */
    "HealthCheckDomain"?: string;
    /**
     * 用于健康检查的URI。
     * 长度限制为1~80字符，只能使用字母、数字、短划线（-）、正斜线（/）、半角句号（.）、百分号（%）、半角问号（?）、井号（#）和and（&）字符。URI不能只为正斜线（/），但必须以正斜线（/）开头。
     * >在**HealthCheck**值为**on**时才会有效。
     * @example `/test/index.html`
     */
    "HealthCheckURI"?: string;
    /**
     * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**fail**判定为**success**。
     * 取值：**2**~**10**。
     * >在**HealthCheck**值为**on**时才会有效。
     * @example `4`
     */
    "HealthyThreshold"?: number;
    /**
     * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**success**判定为**fail**。
     * 取值：**2**~**10**。
     * >在**HealthCheck**值为**on**时才会有效。
     * @example `4`
     */
    "UnhealthyThreshold"?: number;
    /**
     * 接收来自运行状况检查的响应需要等待的时间。如果后端ECS在指定的时间内没有正确响应，则判定为健康检查失败。在**HealthCheck**值为**on**时才会有效。
     * 取值：**1**~**300**秒。
     * > 如果**HealthCheckTimeout**的值小于**HealthCheckInterval**的值，则**HealthCheckTimeout**无效，超时时间为**HealthCheckInterval**的值。
     * @example `3`
     */
    "HealthCheckTimeout"?: number;
    /**
     * 健康检查的时间间隔。
     * 取值：**1**~**50**秒。
     * >在**HealthCheck**值为**on**时才会有效。
     * @example `5`
     */
    "HealthCheckInterval"?: number;
    /**
     * 健康检查使用的端口。
     * 取值：**1**~**65535**。
     * > 当**HealthCheck**值为**on**时才会有效。
     * @example `8080`
     */
    "HealthCheckConnectPort"?: number;
    /**
     * 健康检查正常的HTTP状态码，多个状态码用半角逗号（,）分割。
     * 取值：**http_2xx**、**http_3xx**、**http_4xx**或**http_5xx**。
     * >在**HealthCheck**值为**on**时才会有效。
     * @example `http_2xx,http_3xx`
     */
    "HealthCheckHttpCode"?: string;
    /**
     * 是否使用虚拟服务器组。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    "VServerGroup"?: string;
    /**
     * 虚拟服务器组ID。
     * @example `rsp-cige6j*****`
     */
    "VServerGroupId"?: string;
    /**
     * 是否通过`SLB-IP`头字段获取客户端请求的VIP（Virtual IP address）。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    "XForwardedFor_SLBIP"?: string;
    /**
     * 是否通过`SLB-ID`头字段获取负载均衡实例ID。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    "XForwardedFor_SLBID"?: string;
    /**
     * 是否通过`X-Forwarded-Proto`头字段获取负载均衡实例的监听协议。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    "XForwardedFor_proto"?: string;
    /**
     * 是否开启`Gzip`压缩，对特定文件类型进行压缩。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    "Gzip"?: string;
    /**
     * 监听绑定的访问策略组ID。
     * > 当**AclStatus**参数的值为**on**时，该参数必选。
     * @example `acl-uf60jw******`
     */
    "AclId"?: string;
    /**
     * 访问控制类型：
     * - **white**： 仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于只允许特定IP访问的场景。设置白名单存在一定业务风险。一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。
     *
     *  如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
     * - **black**： 来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于只限制某些特定IP访问的场景。
     *  如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
     * >当**AclStatus**参数的值为**on**时，该参数有效。
     * @example `white`
     */
    "AclType"?: string;
    /**
     * 是否开启访问控制功能。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `off`
     */
    "AclStatus"?: string;
    /**
     * 指定连接空闲超时时间，取值范围为**1~60**秒，默认值为**15**秒。
     * 在超时时间内一直没有访问请求，负载均衡会暂时中断当前连接，直到一下次请求来临时重新建立新的连接。
     * @example `12`
     */
    "IdleTimeout"?: number;
    /**
     * 指定请求超时时间，取值范围为**1~180**秒，默认值为**60**秒。
     * 在超时时间内后端服务器一直没有响应，负载均衡将放弃等待，给客户端返回HTTP 504错误码。
     * @example `3`
     */
    "RequestTimeout"?: number;
    /**
     * 设置监听的描述信息。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 是否通过`XForwardedFor_SLBPORT`头字段获取负载均衡实例的监听端口。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `off`
     */
    "XForwardedFor_SLBPORT"?: string;
    /**
     * 是否通过`XForwardedFor_ClientSrcPort`头字段获取访问负载均衡实例客户端的端口。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `off`
     */
    "XForwardedFor_ClientSrcPort"?: string;
}
