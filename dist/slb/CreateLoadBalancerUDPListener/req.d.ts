export interface CreateLoadBalancerUDPListenerRequest {
    /**
     * 传统型负载均衡实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 监听的标签集合。
     */
    "Tag"?: {
        /**
         * 监听的标签键。N的取值范围：**1**~**20**。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 监听的标签值。N的取值范围：**1**~**20**。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 传统型负载均衡实例的ID。
     * @example `lb-bp1ygod3yctvg1y7****`
     */
    "LoadBalancerId": string;
    /**
     * 传统型负载均衡实例前端使用的端口。
     * 取值范围：**1**~**65535**。
     * @example `80`
     */
    "ListenerPort": number;
    /**
     * 传统型负载均衡实例后端使用的端口。
     * 取值范围：**1**~**65535**。
     * 如果不使用虚拟服务器组（不指定**VServerGroupId**），则该参数必选。
     * @example `80`
     */
    "BackendServerPort"?: number;
    /**
     * 监听的带宽峰值。单位：Mbps。取值：
     * <props="china">- **-1**：对于按流量计费的公网负载均衡实例，可以将带宽峰值设置为**-1**，即不限制带宽峰值。</props>
     * <props="china">- **1**~**5120**：对于按带宽计费的公网负载均衡实例，可以设置每个监听的带宽峰值，但所有监听的带宽峰值之和不能超过实例的带宽峰值。</props>
     * <props="intl">**-1**：对于按流量计费的公网负载均衡实例，可以将带宽峰值设置为**-1**，即不限制带宽峰值。</props>
     * @example `-1`
     */
    "Bandwidth": number;
    /**
     * 调度算法。取值：
     * * **wrr**（默认值）：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
     * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
     * * **sch**：基于源IP地址的一致性hash，相同的源地址会调度到相同的后端服务器。
     * * **tch**：基于四元组的一致性hash（源IP+目的IP+源端口+目的端口），相同的流会调度到相同的后端服务器。
     * * **qch**：基于QUIC Connection ID一致性hash，相同的QUIC Connection ID会调度到相同的后端服务器。
     * 仅性能保障型实例支持sch、 tch和qch一致性hash算法。
     * @example `wrr`
     */
    "Scheduler"?: string;
    /**
     * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**fail**判定为**success**。
     * 取值范围：**2**~**10**。
     * @example `4`
     */
    "HealthyThreshold"?: number;
    /**
     * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**success**判定为**fail**。
     * 取值范围：**2**~**10**。
     * @example `4`
     */
    "UnhealthyThreshold"?: number;
    /**
     * 接收来自运行状况检查的响应需要等待的时间。
     * 如果后端ECS在指定的时间内没有正确响应，则判定为健康检查失败。单位：秒。
     * 取值范围：**1**~**300**。
     * @example `100`
     */
    "HealthCheckConnectTimeout"?: number;
    /**
     * 健康检查使用的端口。
     * 取值范围：**1**~**65535**。
     * 不设置此参数时，表示使用后端服务端口（**BackendServerPort**）。
     * @example `80`
     */
    "HealthCheckConnectPort"?: number;
    /**
     * 健康检查的时间间隔。单位：秒。
     * 取值范围：**1**~**50**。
     * @example `3`
     */
    "healthCheckInterval"?: number;
    /**
     * UDP监听健康检查的请求字符串，只允许包含字母、数字，最大长度限制为64个字符。
     * @example `hello`
     */
    "healthCheckReq"?: string;
    /**
     * UDP监听健康检查的响应字符串，只允许包含字母、数字，最大长度限制为64个字符。
     * @example `ok`
     */
    "healthCheckExp"?: string;
    /**
     * 虚拟服务器组ID。
     * @example `rsp-cige6j8****`
     */
    "VServerGroupId"?: string;
    /**
     * 主备服务器组ID。
     * > 虚拟服务器组ID和主备服务器组ID只能选择一个。
     * @example `rsp-0bfucwu****`
     */
    "MasterSlaveServerGroupId"?: string;
    /**
     * 监听绑定的访问策略组ID。
     * 当**AclStatus**参数的值为**on**时，该参数必选。
     * @example `acl-uf60jw***`
     */
    "AclId"?: string;
    /**
     * 访问控制类型，取值：
     * * **white**：仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于应用只允许特定IP访问的场景。设置白名单存在一定业务风险，一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。
     *
     *    如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
     * * **black**：来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于应用只限制某些特定IP访问的场景。
     *   如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
     * 当**AclStatus**参数的值为**on**时，该参数有效。
     * @example `white`
     */
    "AclType"?: string;
    /**
     * 是否开启访问控制功能。取值：
     * - **on**：开启。
     * - **off**（默认值）：关闭。
     * @example `off`
     */
    "AclStatus"?: string;
    /**
     * 自定义监听名称。
     * 长度限制为1~256个字符，支持中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）和下划线（_）。
     * @example `udp_80`
     */
    "Description"?: string;
    /**
     * 是否支持通过Proxy Protocol协议携带客户端源地址到后端服务器。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `false`
     */
    "ProxyProtocolV2Enabled"?: boolean;
    /**
     * 是否开启健康检查。取值：
     * - **on**（默认值）：开启。
     * - **off**：关闭。
     * @example `on`
     */
    "HealthCheckSwitch"?: string;
}
