export interface ListServerGroupsResponse {
    /**
     * 分批次查询时每次显示的条目数。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `caeba0bbb2be03f8****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876******`
     */
    RequestId: string;
    /**
     * 后端服务器组列表。
     */
    ServerGroups: {
        /**
         * 健康检查配置。
         */
        HealthCheckConfig: {
            /**
             * 健康检查的后端服务器的端口。取值范围：**0**~**65535**。
             * 返回为**0**时代表使用后端服务器的端口进行健康检查。
             * @example `80`
             */
            HealthCheckConnectPort: number;
            /**
             * 是否启用健康检查，取值：
             * - **true**：启用。
             * - **false**：不启用。
             * @example `true`
             */
            HealthCheckEnabled: boolean;
            /**
             * 健康检查域名。字符要求：
             * - 长度限制为1~80个字符。
             * - 可包含小写字母、数字、短划线（-）和半角句号（.）。
             * - 至少包含一个半角句号（.），半角句号（.）不能出现在开头或结尾。
             * - 最右侧的域标签，只能包含字母，不能包含数字或短划线（-）。
             * - 短划线（-）不能出现在开头或结尾。
             * > 只有**HealthCheckProtocol**设置为**HTTP**或**HTTPS**时，该参数生效。（HTTPS协议默认不开放，如需使用，请登录负载均衡控制台的配额管理页面，在**应用型负载均衡ALB**页签申请权益配额。）
             * @example `www.example.com`
             */
            HealthCheckHost: string;
            /**
             * 健康检查正常的状态码列表。
             */
            HealthCheckCodes: string[];
            /**
             * 健康检查HTTP协议版本。
             * 取值：**HTTP1.0**或**HTTP1.1**。
             * > 只有**HealthCheckProtocol**设置为**HTTP**或**HTTPS**时，该参数生效。（HTTPS协议默认不开放，如需使用，请登录负载均衡控制台的配额管理页面，在**应用型负载均衡ALB**页签申请权益配额。）
             * @example `HTTP1.1`
             */
            HealthCheckHttpVersion: string;
            /**
             * 健康检查的时间间隔。单位：秒。取值范围：**1**~**50**。
             * @example `5`
             */
            HealthCheckInterval: number;
            /**
             * 健康检查方法。取值：
             * - **GET**：如果响应报文长度超过8K，会被截断，但不会影响健康检查结果的判定。
             * - **POST**：gRPC监听健康检查默认采用POST方法。
             * - **HEAD**：HTTP和HTTPS监听健康检查默认采用HEAD方法。
             * > 只有**HealthCheckProtocol**设置为**HTTP**或**HTTPS**或**gRPC**时，该参数生效。（HTTPS协议默认不开放，如需使用，请登录负载均衡控制台的配额管理页面，在**应用型负载均衡ALB**页签申请权益配额。）
             * @example `HEAD`
             */
            HealthCheckMethod: string;
            /**
             * 健康检查的转发规则路径。
             * > 只有**HealthCheckProtocol**设置为**HTTP**或**HTTPS**时，该参数生效。（HTTPS协议默认不开放，如需使用，请登录负载均衡控制台的配额管理页面，在**应用型负载均衡ALB**页签申请权益配额。）
             * @example `/test/index.html`
             */
            HealthCheckPath: string;
            /**
             * 健康检查协议。取值：
             * - **HTTP**：通过发送HEAD或GET请求模拟浏览器的访问行为来检查服务器应用是否健康。
             * - **HTTPS**：通过发送HEAD或GET请求模拟浏览器的访问行为来检查服务器应用是否健康。（数据加密，相比HTTP更安全。）
             * - **TCP**：通过发送SYN握手报文来检测服务器端口是否存活。
             * - **gRPC**：通过发送POST或GET请求来检查服务器应用是否健康。
             * > HTTPS协议默认不开放，如需使用，请登录负载均衡控制台的配额管理页面，在**应用型负载均衡ALB**页签申请权益配额。
             * @example `HTTP`
             */
            HealthCheckProtocol: string;
            /**
             * 接收来自运行状况检查的响应需要等待的时间。如果后端服务器在指定的时间内没有正确响应，则判定为健康检查失败。单位：秒。
             * @example `3`
             */
            HealthCheckTimeout: number;
            /**
             * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**失败**判定为**成功**。
             * @example `4`
             */
            HealthyThreshold: number;
            /**
             * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**成功**判定为**失败**。
             * @example `4`
             */
            UnhealthyThreshold: number;
        };
        /**
         * 后端协议类型。取值：
         * - **HTTP**：支持关联HTTPS、HTTP和QUIC监听。
         * - **HTTPS**：支持关联HTTPS监听。
         * - **GRPC**：关联HTTPS和QUIC监听。
         * @example `HTTP`
         */
        Protocol: string;
        /**
         * 关联的实例id
         */
        RelatedLoadBalancerIds: string[];
        /**
         * 资源组ID。
         * @example `rg-atstuj3rtop****`
         */
        ResourceGroupId: string;
        /**
         * 调度算法。取值：
         * - **Wrr**：加权轮询，权重值越高的后端服务器，被轮询到的概率也越高。
         * - **Wlc**：加权最小连接数，除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。当权重值相同时，当前连接数越小的后端服务器被轮询到的概率也越高。
         * - **Sch**：一致性哈希，相同哈希因子计算结果的请求将会调度到相同的后端服务器。不配置UchConfig参数时，默认哈希因子为源IP，相同源IP地址的请求会分发到同一台后端服务器；配置了UchConfig参数时，哈希因子为URL参数，相同URL参数的请求会分发到同一台后端服务器。
         * @example `Wrr`
         */
        Scheduler: string;
        /**
         * 服务器组ID。
         * @example `sgp-cige6j****`
         */
        ServerGroupId: string;
        /**
         * 服务器组名称。
         * @example `Group3`
         */
        ServerGroupName: string;
        /**
         * 服务器组状态。取值：
         * - **Creating**：创建中。
         * - **Available**：可用。
         * - **Configuring**：变配中。
         * @example `Available`
         */
        ServerGroupStatus: string;
        /**
         * 服务器组类型。取值：
         * - **Instance**：服务器类型，包括Ecs、Eni、Eci实例。
         * - **Ip**：IP类型。
         * - **Fc**：函数计算类型。
         * @example `Instance`
         */
        ServerGroupType: string;
        /**
         * 会话保持配置结构体。
         */
        StickySessionConfig: {
            /**
             * 服务器上配置的Cookie。
             * @example `B490B5EBF6F3CD402E515D22BCDA****`
             */
            Cookie: string;
            /**
             * Cookie超时时间。单位：秒。取值范围：**1**~**86400**。
             * > 当**StickySessionEnabled**为**true**且**StickySessionType**为**Insert**时，该参数生效。
             * @example `1000`
             */
            CookieTimeout: number;
            /**
             * 是否启用会话保持。取值：
             * - **true**：开启。
             * - **false**：关闭。
             * @example `false`
             */
            StickySessionEnabled: boolean;
            /**
             * Cookie的处理方式。取值：
             * - **Insert**：植入Cookie。
             * 客户端第一次访问时，负载均衡会在返回请求中植入Cookie（即在HTTP或HTTPS响应报文中插入SERVERID），下次客户端携带此Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器上。
             * - **Server**：重写Cookie。
             * 负载均衡发现用户自定义了Cookie，将会对原来的Cookie进行重写，下次客户端携带新的Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器。
             * @example `Insert`
             */
            StickySessionType: string;
        };
        /**
         * VPC实例ID。
         * @example `vpc-bp15zckdt37pq72zv****`
         */
        VpcId: string;
        /**
         * 服务器组绑定的标签列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `Test`
             */
            Key: string;
            /**
             * 标签值。
             * @example `Test`
             */
            Value: string;
        }[];
        /**
         * 是否开启配置管理。取值：
         * - **true**：开启。
         * - **false**：关闭。
         * @example `false`
         */
        ConfigManagedEnabled: boolean;
        /**
         * 是否开启后端长链接。取值：
         * - **true**：开启。
         * - **false**：关闭。
         * @example `false`
         */
        UpstreamKeepaliveEnabled: boolean;
        /**
         * 是否支持IPv6。取值：
         * - **true**：支持。
         * - **false**：不支持。
         * @example `false`
         */
        Ipv6Enabled: boolean;
        /**
         * 服务器组内服务器数量。
         * @example `1`
         */
        ServerCount: number;
        /**
         * 服务名称。
         * @example `test`
         */
        ServiceName: string;
        /**
         * url一致性hash参数配置。
         */
        UchConfig: {
            /**
             * 参数类型。只能填QueryString。
             * @example `QueryString`
             */
            Type: string;
            /**
             * 一致性hash参数值。
             * @example `abc`
             */
            Value: string;
        };
        /**
         * 资源创建时间。
         * @example `2022-07-02T02:49:05Z`
         */
        CreateTime: string;
        /**
         * 连接优雅中断相关配置。
         * 开启连接优雅中断，在移除后端服务器或者健康检查失败后，负载均衡使现有连接在一定时间内正常传输。
         * >
         * > - 连接优雅中断功能默认不开放，如需使用，请向商务经理申请。
         * > - 基础版实例不支持开启连接优雅中断，仅标准版、WAF增强版实例支持。
         * > - 服务器类型、IP类型服务器组支持连接优雅中断，函数计算类型不支持。
         */
        ConnectionDrainConfig: {
            /**
             * 是否开启连接优雅中断。
             * - **true**：开启
             * - **false**：关闭
             * @example `false`
             */
            ConnectionDrainEnabled: boolean;
            /**
             * 连接优雅中断超时时间。
             * @example `300`
             */
            ConnectionDrainTimeout: number;
        };
        /**
         * 慢启动相关配置。
         * 开启慢启动后，将会在设定的时间段内对新添加到后端服务器组的后端服务器进行预热，转发到该服务器的请求数量线性增加。
         * >
         * > - 基础版实例不支持开启慢启动，仅标准版、WAF增强版实例支持。
         * > - 服务器类型、IP类型服务器组支持配置慢启动，函数计算类型不支持。
         * > - 慢启动仅在后端调度算法是加权轮询算法时可开启。
         */
        SlowStartConfig: {
            /**
             * 是否开启慢启动。
             * - **true**：开启
             * - **false**：关闭
             * @example `false`
             */
            SlowStartEnabled: boolean;
            /**
             * 慢启动持续时间。
             * @example `30`
             */
            SlowStartDuration: number;
        };
    }[];
    /**
     * 列表条目数。
     * @example `1000`
     */
    TotalCount: number;
}
