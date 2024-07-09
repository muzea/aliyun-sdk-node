export interface DescribeLoadBalancerUDPListenerAttributeResponse {
    /**
     * 绑定的虚拟服务器组ID。
     * @example `rsp-cige6j****`
     */
    VServerGroupId: string;
    /**
     * 当前监听的状态。取值：
     * * **running**：监听正常运行。
     * * **stopped**：监听停止运行。
     * @example `stopped`
     */
    Status: string;
    /**
     * 访问控制类型：
     * - **white**：仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于应用只允许特定IP访问的场景。
     *  设置白名单存在一定业务风险。一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
     * - **black**：来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于应用只限制某些特定IP访问的场景。
     *
     *  如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
     * @example `white`
     */
    AclType: string;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF34B540710`
     */
    RequestId: string;
    /**
     * 健康检查的端口。取值：**1**~**65535**。不设置此参数时，表示使用后端服务端口（BackendServerPort）。
     * > 在**HealthCheck**值为**on**时才会有效。
     * @example `8080`
     */
    HealthCheckConnectPort: number;
    /**
     * 自定义监听名称。
     * @example `UDP_80`
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
     * 绑定的主备服务器组ID。
     * @example `rsp-0bfucw****`
     */
    MasterSlaveServerGroupId: string;
    /**
     * 传统型负载均衡实例后端使用的端口。
     * > 如果后端服务器组为虚拟服务器组，则不返回该参数。
     * @example `90`
     */
    BackendServerPort: number;
    /**
     * 是否开启访问控制功能。取值：**on**或**off**（默认值）。
     * @example `off`
     */
    AclStatus: string;
    /**
     * 不健康检查阈值。健康检查连续失败多少次后，将后端服务器的健康检查状态由**成功**判定为**失败**。取值：**2**~**10**。
     * @example `4`
     */
    UnhealthyThreshold: number;
    /**
     * 是否支持通过Proxy Protocol协议携带客户端源地址到后端服务器。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    ProxyProtocolV2Enabled: boolean;
    /**
     * 传统型负载均衡实例前端使用的端口。
     * @example `53`
     */
    ListenerPort: number;
    /**
     * 健康检查的时间间隔，取值：**1**~**50**秒。
     * @example `5`
     */
    HealthCheckInterval: number;
    /**
     * UDP监听健康检查的响应串。只允许包含字母、数字，最大长度限制为64个字符。
     * @example `ok`
     */
    HealthCheckExp: string;
    /**
     * 访问控制策略组ID。
     * @example `acl-uf60jwfiv6******`
     */
    AclId: string;
    /**
     * 调度算法，取值：
     * * **wrr**（默认值）：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
     * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
     * @example `wrr`
     */
    Scheduler: string;
    /**
     * 接收来自运行状况检查的响应需要等待的时间。如果后端ECS在指定的时间内没有正确响应，则判定为健康检查失败。取值：**1**~**300**秒。
     * @example `100`
     */
    HealthCheckConnectTimeout: number;
    /**
     * 健康检查阈值。健康检查连续成功多少次后，将后端服务器的健康检查状态由**失败**判定为**成功**。取值：**2**~**10**。
     * @example `4`
     */
    HealthyThreshold: number;
    /**
     * UDP监听健康检查的请求串。只允许包含字母、数字，最大长度限制为64个字符。
     * @example `hello`
     */
    HealthCheckReq: string;
    /**
     * 是否开启健康检查。取值：
     * - **on**：开启。
     * - **off**：关闭。
     * @example `on`
     */
    HealthCheck: string;
    AclIds: {
        /**
         * 访问控制策略组ID。
         */
        AclId: any[];
    };
    /**
     * 传统型负载均衡实例ID。
     * @example `lb-bp1rtfnodmywb43e*****`
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
