export interface ListServerGroupsResponse {
    /**
     * 请求ID。
     * @example `54B28E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 后端服务器组列表。
     */
    ServerGroups: {
        /**
         * 网络型负载均衡实例所在的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 服务器组ID。
         * @example `sgp-atstuj3rtoptyui****`
         */
        ServerGroupId: string;
        /**
         * 服务器组名称。
         * @example `NLB_ServerGroup`
         */
        ServerGroupName: string;
        /**
         * 服务器组类型。取值：
         * - **Instance**：服务器类型，该类型服务器组支持添加**Ecs**、**Ens**、**Eci**类型实例。
         * - **Ip**：IP地址类型，该类型服务器组支持直接添加IP地址。
         * @example `Instance`
         */
        ServerGroupType: string;
        /**
         * 协议版本。取值：
         * - **Ipv4**：ipv4类型。
         * - **DualStack**：双栈类型。
         * @example `ipv4`
         */
        AddressIPVersion: string;
        /**
         * 服务器组所在VPC的ID。
         * @example `vpc-bp15zckdt37pq72zv****`
         */
        VpcId: string;
        /**
         * 调度算法。取值：
         * - **Wrr**：加权轮询，权重值越高的后端服务器，被轮询到的概率也越高。
         * - **Wlc**：加权最小连接数，除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。当权重值相同时，当前连接数越小的后端服务器被轮询到的概率也越高。
         * - **rr**：轮询，按照访问顺序依次将外部请求分发到后端服务器sch：源IP哈希：相同的源地址会调度到相同的后端服务器。
         * - **sch**：源IP哈希，相同的源地址会调度到相同的后端服务器。
         * - **tch**：四元组哈希，基于四元组（源IP、目的IP、源端口和目的端口）的一致性哈希，相同的流会调度到相同的后端服务器。
         * - **qch**：QUIC ID哈希，支持将同一个QUIC ID的请求哈希到同一台后端服务器上。
         * @example `Wrr`
         */
        Scheduler: string;
        /**
         * 后端转发协议，取值：**TCP**、**UDP**或**TCPSSL**。
         * @example `TCP`
         */
        Protocol: string;
        /**
         * 健康检查配置信息。
         */
        HealthCheck: {
            /**
             * 是否开启健康检查，取值：
             * - **true**：开启。
             * - **false**：关闭。
             * @example `false`
             */
            HealthCheckEnabled: boolean;
            /**
             * 健康检查协议。取值：**TCP**或**HTTP**。
             * @example `TCP`
             */
            HealthCheckType: string;
            /**
             * 健康检查的后端服务器的端口。
             * 取值范围： **0**~**65535**。
             * **0**表示使用后端服务器的端口进行健康检查。
             * @example `200`
             */
            HealthCheckConnectPort: number;
            /**
             * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**失败**判定为**成功**。
             * 取值范围：**2**~**10**。
             * @example `2`
             */
            HealthyThreshold: number;
            /**
             * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**成功**判定为**失败**。
             * 取值范围：**2**~**10**。
             * @example `3`
             */
            UnhealthyThreshold: number;
            /**
             * 健康检查响应的最大超时时间。单位：秒。
             * 取值范围：**1**~**300**。
             * @example `200`
             */
            HealthCheckConnectTimeout: number;
            /**
             * 健康检查的时间间隔。单位：秒。
             * 取值范围：**1**~**50**。
             * @example `10`
             */
            HealthCheckInterval: number;
            /**
             * 用于健康检查的域名。取值：
             * - **$SERVER_IP**：使用后端服务器内网IP。
             * - **domain**：指定特定域名。长度限制1~80个字符，只能使用小写字母、数字、短划线（-）、半角句号（.）。
             * > 仅**HealthCheckType**为**HTTP**时，该参数生效。
             * @example `$SERVER_IP`
             */
            HealthCheckDomain: string;
            /**
             * 健康检查路径。
             * > 仅**HealthCheckType**为**HTTP**时，该参数生效。
             * @example `/test/index.html`
             */
            HealthCheckUrl: string;
            /**
             * 健康状态返回码，多个状态码用半角逗号（,）分隔。
             * 取值：**http\_2xx**、**http\_3xx**、**http\_4xx**和**http\_5xx**。
             * > 仅**HealthCheckType**为**HTTP**时，该参数生效。
             */
            HealthCheckHttpCode: string[];
            /**
             * 健康检查方法，取值：**GET**或**HEAD**。
             * > 仅**HealthCheckType**为**HTTP**时，该参数生效。
             * @example `GET`
             */
            HttpCheckMethod: string;
            HealthCheckReq: string;
            HealthCheckExp: string;
        };
        /**
         * 是否开启连接优雅中断。取值：
         * - **true**：开启。
         * - **false**：关闭。
         * @example `false`
         */
        ConnectionDrainEnabled: boolean;
        /**
         * 设置连接优雅中断超时时间。单位：秒。
         * 取值范围：**10**~**900**。
         * @example `200`
         */
        ConnectionDrainTimeout: number;
        /**
         * 是否开启客户端地址保持功能。取值：
         * - **true**：开启。
         * - **false**：关闭。
         * > 特殊说明：**AddressIPVersion**为**ipv4**类型时默认为**true**。**AddressIPVersion**为**ipv6**值时只能是**false**，后续待底层支持后可以为**true**。
         * @example `true`
         */
        PreserveClientIpEnabled: boolean;
        /**
         * 是否开启全端口转发。取值：
         * - **true**：开启。
         * - **false**：关闭。
         * @example `false`
         */
        AnyPortEnabled: boolean;
        /**
         * 服务器组所属的资源组ID。
         * @example `rg-atstuj3rtop****`
         */
        ResourceGroupId: string;
        /**
         * 服务器组状态。取值：
         * - **Creating**：创建中。
         * - **Available**：可用。
         * - **Configuring**：变配中。
         * @example `Available`
         */
        ServerGroupStatus: string;
        /**
         * 用户UID。
         * @example `165820696622****`
         */
        AliUid: number;
        /**
         * 标签。
         */
        Tags: {
            /**
             * 标签键。最多支持10个标签键。
             * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或`者https://`。
             * @example `Test`
             */
            Key: string;
            /**
             * 标签值。最多支持10个标签值。
             * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
             * @example `Test`
             */
            Value: string;
        }[];
        /**
         * 网络型负载均衡实例列表。
         */
        RelatedLoadBalancerIds: string[];
        /**
         * 后端服务器数量。
         * @example `2`
         */
        ServerCount: number;
    }[];
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**。
     * @example `20`
     */
    MaxResults: number;
}
