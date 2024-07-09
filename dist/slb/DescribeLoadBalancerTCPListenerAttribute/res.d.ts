export interface DescribeLoadBalancerTCPListenerAttributeResponse {
    /**
     * 绑定的服务器组ID。
     * @example `rsp-cige6******8`
     */
    VServerGroupId: string;
    /**
     * 当前监听的状态。取值：
     * * **running**：监听正常运行中。
     * * **stopped**：监听停止。
     * @example `stopped`
     */
    Status: string;
    /**
     * 访问控制类型：
     * * **white**： 仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于应用只允许特定IP访问的场景。
     * 设置白名单存在一定业务风险。一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。
     *  如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
     * * **black**： 来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于应用只限制某些特定IP访问的场景。
     *  如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
     * > 当**AclStatus**参数的值为**on**时，该参数必选。
     * @example `white`
     */
    AclType: string;
    /**
     * 设置连接优雅中断超时时间。当**ConnectionDrain**取值为**on**时，返回该值。
     * 取值范围：10~900秒。
     * @example `300`
     */
    ConnectionDrainTimeout: number;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF34B540710`
     */
    RequestId: string;
    /**
     * 健康检查使用的端口。取值：**1**~**65535**。不设置此参数时，表示使用后端服务端口（BackendServerPort）。
     * @example `8080`
     */
    HealthCheckConnectPort: number;
    /**
     * 自定义监听名称。
     * @example `TCP_80`
     */
    Description: string;
    /**
     * 监听的带宽峰值，单位Mbps。取值：
     * - **-1**：对于按流量计费的公网负载均衡实例，可以将带宽峰值设置为-1，即不限制带宽峰值。
     * - **1**~**5120**：对于按带宽计费的公网负载均衡实例，可以设置每个监听的带宽峰值，但所有监听的带宽峰值之和不能超过实例的带宽峰值。
     * @example `-1`
     */
    Bandwidth: number;
    /**
     * TCP协议监听的健康检查方式。
     * 取值：**tcp**或**http**。
     * @example `tcp`
     */
    HealthCheckType: string;
    /**
     * 绑定的主备服务器组ID。
     *
     * @example `rsp-0bfucw****`
     */
    MasterSlaveServerGroupId: string;
    /**
     * 传统型负载均衡实例后端使用的端口。
     * > 当后端服务器组为虚拟服务器组时，该参数不显示。
     * @example `443`
     */
    BackendServerPort: number;
    /**
     * 是否开启访问控制功能。取值：
     * - **on**：开启。
     * - **off**：不开启。
     * @example `off`
     */
    AclStatus: string;
    /**
     * 用于健康检查的域名。取值：
     * - **$_ip**：后端服务器的私网IP。当指定了IP或该参数未指定时，负载均衡会使用各后端服务器的私网IP当做健康检查使用的域名。
     * - **domain**：域名长度为1~80个字符，只能包含字母、数字、半角句号（.）和短划线（-）。
     * @example `www.domain.com`
     */
    HealthCheckDomain: string;
    /**
     * 不健康检查阈值。健康检查连续失败多少次后，将后端服务器的健康检查状态由**成功**判定为**失败**。取值：**2**~**10**。
     * @example `4`
     */
    UnhealthyThreshold: number;
    /**
     * 健康检查正常的HTTP状态码。
     * @example `http_2xx`
     */
    HealthCheckHttpCode: string;
    /**
     * 是否支持通过Proxy Protocol协议携带客户端源地址到后端服务器。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    ProxyProtocolV2Enabled: boolean;
    /**
     * 会话保持的超时时间。
     * 取值：**0**~**3600**秒。默认值：**0**，表示关闭会话保持。
     * @example `0`
     */
    PersistenceTimeout: number;
    /**
     * 传统型负载均衡实例前端使用的端口。
     * @example `110`
     */
    ListenerPort: number;
    /**
     * 健康检查的时间间隔，取值：**1**~**50**秒。
     * @example `5`
     */
    HealthCheckInterval: number;
    /**
     * 用于健康检查的URL。长度限制为1~80个字符，只能使用字母、数字和短划线（-）、正斜线（/）、半角句号（.）、百分号（%）、半角问号（?）、井号（#）和and（&amp;）这些字符。 URL不能只为正斜线（/），但必须以正斜线（/）开头。
     * @example `/test/index.html`
     */
    HealthCheckURI: string;
    /**
     * 监听绑定的访问策略组ID。
     * 当**AclStatus**参数的值为**on**时，该参数必选。
     * @example `acl-uf60jwfi******`
     */
    AclId: string;
    /**
     * 是否开启负载均衡的攻击防护功能SynProxy。
     * 建议用户一般情况下不要调整这个参数，由负载均衡控制。
     * * **enable**：开启。
     * * **disable**：关闭。
     * @example `disable`
     */
    SynProxy: string;
    /**
     * 调度算法。取值：
     * - **wrr**（默认值）：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
     * -  **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
     * - **sch**：基于源IP地址的一致性hash，相同的源地址会调度到相同的后端服务器。
     * - **tch**：基于四元组的一致性hash（源IP+目的IP+源端口+目的端口），相同的流会调度到相同的后端服务器。
     * > 仅性能保障型实例支持**sch**和**tch**一致性hash算法。
     * @example `wrr`
     */
    Scheduler: string;
    /**
     * 连接超时时间。
     * @example `500`
     */
    EstablishedTimeout: number;
    /**
     * 超时时间。
     * @example `100`
     */
    HealthCheckConnectTimeout: number;
    /**
     * 健康检查阈值。健康检查连续成功多少次后，将后端服务器的健康检查状态由**失败**判定为**成功**。取值：**2**~**10**。
     * @example `4`
     */
    HealthyThreshold: number;
    /**
     * 是否开启连接优雅中断。当**ConnectionDrain**取值为**on**时，返回该值。取值：
     * - **on**：开启。
     * - **off**：未开启。
     * @example `off`
     */
    ConnectionDrain: string;
    /**
     * 健康检查方式。
     * @example `tcp`
     */
    HealthCheckMethod: string;
    /**
     * 是否开启健康检查。取值：
     * - **on**：开启。
     * - **off**：关闭。
     * @example `on`
     */
    HealthCheck: string;
    AclIds: {
        /**
         * 访问控制策略组ID列表。
         */
        AclId: any[];
    };
    /**
     * 传统型负载均衡实例ID。
     * @example `lb-bp1ygod3yctvg1y****`
     */
    LoadBalancerId: string;
    Tags: {
        /**
         * 标签列表。
         */
        Tag: {
            /**
             * 监听的标签键。N的取值范围：**1**~**20**。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
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
