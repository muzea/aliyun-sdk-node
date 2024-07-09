export interface DescribeLoadBalancerHTTPListenerAttributeResponse {
    /**
     * 访问控制类型：
     * - **white**： 仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于只允许特定IP访问的场景。设置白名单存在一定业务风险。一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。
     *  如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
     * - **black**： 来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于只限制某些特定IP访问的场景。
     *  如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
     * > 当**AclStatus**参数的值为**on**时，该参数必选。
     * @example `white`
     */
    AclType: string;
    /**
     * 绑定的服务器组ID。
     * @example `rsp-cige6j****`
     */
    VServerGroupId: string;
    /**
     * 当前监听的状态。取值：
     * - **running**：表示监听正常运行。
     * - **stopped**：表示监听停止。
     * @example `stopped`
     */
    Status: string;
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
     * 是否开启`Gzip`压缩，对特定文件类型进行压缩。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    Gzip: string;
    /**
     * 健康检查的端口。
     *  > 当**HealthCheck**值为**on**时才会有效。
     * @example `8080`
     */
    HealthCheckConnectPort: number;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF34B540710`
     */
    RequestId: string;
    /**
     * 自定义监听名称。
     * @example `HTTP_80`
     */
    Description: string;
    /**
     * 监听的带宽峰值。单位：Mbps。
     * - **-1**：不限制带宽峰值。
     * - **1~5120**：监听的带宽峰值，所有监听的带宽峰值之和不能超过实例的带宽峰值。
     * @example `-1`
     */
    Bandwidth: number;
    /**
     * 每次健康检查响应的超时时间，单位：秒。
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
     * 实例后端使用的端口。
     * @example `80`
     */
    BackendServerPort: number;
    /**
     * Cookie超时时间。单位：秒。
     * @example `500`
     */
    CookieTimeout: number;
    /**
     * 用于健康检查的域名。
     * @example `www.domain.com`
     */
    HealthCheckDomain: string;
    /**
     * 不健康检查阈值。
     * @example `4`
     */
    UnhealthyThreshold: number;
    /**
     * HTTP至HTTPS的监听转发端口。
     * > 如果**ListenerForward**的值为**off**，该参数不显示。
     * @example `80`
     */
    ForwardPort: number;
    /**
     * 是否通过`SLB-ID`头字段获取负载均衡实例ID。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    XForwardedFor_SLBID: string;
    /**
     * 是否开启安全状态。取值：
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
     * 是否开启HTTP至HTTPS的监听转发。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    ListenerForward: string;
    /**
     * 是否开启通过`X-Forwarded-For`头字段的方式获取来访者真实IP。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    XForwardedFor: string;
    /**
     * 指定连接空闲超时时间，单位：秒。
     * 默认值为**15**，取值范围为**1~60**。
     * 在超时时间内一直没有访问请求，负载均衡会暂时中断当前连接，直到下一次请求来临时重新建立新的连接。
     * @example `2`
     */
    IdleTimeout: number;
    /**
     * 指定请求超时时间。单位：秒。
     * 默认值为**60**，取值范围为**1~180**。
     * 在超时时间内后端服务器一直没有响应，负载均衡将放弃等待，给客户端返回HTTP 504错误码。
     * @example `34`
     */
    RequestTimeout: number;
    /**
     * 实例前端使用的端口。
     * @example `80`
     */
    ListenerPort: number;
    /**
     * 健康检查的时间间隔，单位：秒。
     * @example `5`
     */
    HealthCheckInterval: number;
    /**
     * 是否通过`XForwardedFor_SLBPORT`头字段获取负载均衡实例的监听端口。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `off`
     */
    XForwardedFor_SLBPORT: string;
    /**
     * 用于健康检查的URI。
     * 长度限制为1~80，只能使用字母、数字和短划线（-）、正斜线（/）、半角句号（.）、百分号（%），半角问号（?）、井号（#）和and（&）这些字符。URI不能只为正斜线（/），但必须以正斜线（/）开头。
     * @example `/test/index.html`
     */
    HealthCheckURI: string;
    /**
     * Cookie的处理方式。
     * 取值：**insert**或**server**。
     * - **insert**：植入Cookie。
     *   客户端第一次访问时，负载均衡会在返回请求中植入Cookie（即在HTTP或HTTPS响应报文中插入SERVERID），下次客户端携带此Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器上。
     * - **server**：重写Cookie。
     *   负载均衡发现用户自定义了Cookie，将会对原来的Cookie进行重写，下次客户端携带新的Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器。
     * >当**StickySession**的值为**on**时，必须指定该参数。
     * @example `insert `
     */
    StickySessionType: string;
    /**
     * 监听绑定的访问策略组ID。
     * > 当**AclStatus**参数的值为**on**时，返回该参数。
     * @example `acl-uf60jw******`
     */
    AclId: string;
    /**
     * 调度算法。取值：
     * - **wrr**：权重值越高的后端服务器，被轮询到的概率也越高。
     * - **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
     * @example `wrr`
     */
    Scheduler: string;
    /**
     * 健康检查阈值。
     * @example `4`
     */
    HealthyThreshold: number;
    /**
     * 是否通过`X-Forwarded-Proto`头字段获取负载均衡实例的监听协议。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    XForwardedFor_proto: string;
    /**
     * 是否通过`SLB-IP`头字段获取客户端请求的VIP（Virtual IP address）。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    XForwardedFor_SLBIP: string;
    /**
     * 是否开启会话保持。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    StickySession: string;
    /**
     * 监听HTTP类型健康检查的健康检查方法。取值：**head**或**get**。
     * > **HealthCheck**值为**on**时，返回该参数。
     * @example `get`
     */
    HealthCheckMethod: string;
    /**
     * 是否开启健康检查。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    HealthCheck: string;
    AclIds: {
        /**
         * 访问控制策略组ID。
         */
        AclId: any[];
    };
    Rules: {
        /**
         * 转发规则描述。
         */
        Rule: {
            /**
             * 转发规则的目标服务器组ID。
             * @example `rsp-uf6w******`
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
             * @example `test`
             */
            RuleName: string;
            /**
             * 转发规则ID。
             * @example `1234`
             */
            RuleId: string;
        }[];
    };
    /**
     * 传统型负载均衡实例ID。
     * @example `lb-bp1uaunez0uho0zf0****`
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
