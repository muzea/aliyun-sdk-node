export interface UpdateServerGroupAttributeRequest {
    /**
     * 服务器组名称。
     * 长度为2~128个英文或中文字符，必须以大小字母或中文开头，可包含数字，半角句号（.），下划线（_）和短划线（-）。
     * @example `test`
     */
    "ServerGroupName"?: string;
    /**
     * 调度算法。取值：
     * - **Wrr**：加权轮询，权重值越高的后端服务器，被轮询到的次数（概率）也越高。
     * - **Wlc**：加权最小连接数，除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。当权重值相同时，当前连接数越小的后端服务器被轮询到的次数（概率）也越高。
     * - **Sch**：一致性哈希，相同哈希因子计算结果的请求将会调度到相同的后端服务器。不配置UchConfig参数时，默认哈希因子为源IP，相同源IP地址的请求会分发到同一台后端服务器；配置了UchConfig参数时，哈希因子为URL参数，相同URL参数的请求会分发到同一台后端服务器。
     * @example `Wrr`
     */
    "Scheduler"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3******`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会修改资源。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP `2xx`状态码并直接进行操作。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 健康检查相关配置结构体。
     */
    "HealthCheckConfig"?: {
        /**
         * 健康检查的后端服务器的端口。
         * 取值范围：**0**~**65535**。
         * 设置为**0**时代表使用后端服务器的端口进行健康检查。
         * > 当前服务器组**HealthCheckEnabled**为**true**时，该参数配置生效。
         * @example `80`
         */
        HealthCheckConnectPort: number;
        /**
         * 是否启用健康检查，取值：
         * - **true**：启用
         * - **false**：不启用
         * @example `true`
         */
        HealthCheckEnabled: boolean;
        /**
         * 健康检查域名。字符要求：
         * - 长度限制为1~80个字符。
         * - 可包含小写字母、数字、短划线（-）和半角句号（.）。
         * - 至少包含一个半角句号（.），半角句号（.）不能出现在开头或结尾。
         * - 最右侧的地域标签，只能包含字母，不能包含数字或短划线（-）。
         * - 其他地域标签，短划线（-）不能出现在开头或结尾。
         * > 当前服务器组**HealthCheckEnabled**为true且**HealthCheckProtocol**设置为**HTTP**或**HTTPS**时该参数生效。（HTTPS协议默认不开放，如需使用，请登录负载均衡控制台的配额管理页面，在**应用型负载均衡ALB**页签申请权益配额。）
         * @example `example.com`
         */
        HealthCheckHost: string;
        /**
         * 健康检查正常的状态码列表。
         */
        HealthCheckCodes: string[];
        /**
         * 健康检查HTTP协议版本。取值：
         * - **HTTP1.0**
         * - **HTTP1.1**
         * > 当前服务器组**HealthCheckEnabled**为true且**HealthCheckProtocol**设置为**HTTP**或**HTTPS**时该参数生效。（HTTPS协议默认不开放，如需使用，请登录负载均衡控制台的配额管理页面，在**应用型负载均衡ALB**页签申请权益配额。）
         * @example `HTTP1.1`
         */
        HealthCheckHttpVersion: string;
        /**
         * 健康检查的时间间隔。单位：秒。
         * 取值范围：**1**~**50**。
         * > 当前服务器组**HealthCheckEnabled**为**true**时，该参数配置生效。
         * @example `5`
         */
        HealthCheckInterval: number;
        /**
         * 健康检查方法。取值：
         * - **GET**：如果响应报文长度超过8K，会被截断，但不会影响健康检查结果的判定。
         * - **POST**：gRPC监听健康检查默认采用POST方法。
         * - **HEAD**：HTTP和HTTPS监听健康检查默认采用HEAD方法。
         * > 当前服务器组**HealthCheckEnabled**为true且**HealthCheckProtocol**设置为**HTTP**或**HTTPS**或**gRPC**时该参数生效。（HTTPS协议默认不开放，如需使用，请登录负载均衡控制台的配额管理页面，在**应用型负载均衡ALB**页签申请权益配额。）
         * @example `HEAD`
         */
        HealthCheckMethod: string;
        /**
         * 健康检查的转发规则路径。
         * 长度限制为1~80，只能使用字母、数字、字符`-/.%?#&=`以及扩展字符`_;~!（)*[]@$^:',+`。 URL开头必须为`/`。
         * > 当前服务器组**HealthCheckEnabled**为**true**且**HealthCheckProtocol**设置为**HTTP**或**HTTPS**时该参数生效。（HTTPS协议默认不开放，如需使用，请登录负载均衡控制台的配额管理页面，在**应用型负载均衡ALB**页签申请权益配额。）
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
         * 接收来自运行状况检查的响应需要等待的时间。如果后端ECS在指定的时间内没有正确响应，则判定为健康检查失败。单位：秒。
         * 取值范围：**1**~**300**。
         * > - 如果**HealthCHeckTimeout**的值小于**HealthCheckInterval**的值，则**HealthCHeckTimeout**无效，超时时间为**HealthCheckInterval**的值。
         * - 当前服务器组**HealthCheckEnabled**为**true**时，该参数配置生效。
         * @example `3`
         */
        HealthCheckTimeout: number;
        /**
         * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**fail**判定为**success**。
         * 取值范围：**2**~**10**。
         * @example `4`
         */
        HealthyThreshold: number;
        /**
         * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**success**判定为**fail**。
         * 取值范围：**2**~**10**。
         * @example `4`
         */
        UnhealthyThreshold: number;
    };
    /**
     * 会话保持配置结构体
     */
    "StickySessionConfig"?: {
        /**
         * 服务器上配置的Cookie。
         * 长度为1~200个字符，只能包含ASCII英文字母和数字字符，不能包含半角逗号（,）、半角分号（;）或空格，也不能以美元符号（$）开头。
         * > 当前服务器组**StickySessionEnabled**为**true**且**StickySessionType**配置为**Server**时，该参数生效。
         * @example `B490B5EBF6F3CD402E515D22B******`
         */
        Cookie: string;
        /**
         * Cookie超时时间。单位：秒。
         * 取值范围：**1**~**86400**。
         * >当前服务器组**StickySessionEnabled**为**true**且**StickySessionType**配置为**Insert**时，该参数生效。
         * @example `1000`
         */
        CookieTimeout: number;
        /**
         * 是否启用会话保持。取值：
         * - **true**：是。
         * - **false**：否。
         * @example `false`
         */
        StickySessionEnabled: boolean;
        /**
         * Cookie的处理方式。取值：
         * - **Insert**：植入Cookie。
         * 客户端第一次访问时，负载均衡会在返回请求中植入Cookie（即在HTTP或HTTPS响应报文中插入SERVERID），下次客户端携带此Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器上。
         * - **Server**：重写Cookie。
         * 负载均衡发现用户自定义了Cookie，将会对原来的Cookie进行重写，下次客户端携带新的Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器。
         * > 当前服务器组**StickySessionEnabled**为**true**时，该参数生效。
         * @example `Insert`
         */
        StickySessionType: string;
    };
    /**
     * 服务器组ID。
     * @example `sgp-atstuj3rtop****`
     */
    "ServerGroupId": string;
    /**
     * 是否开启后端长连接。
     * - **true**：开启
     * - **false**：不开启。
     */
    "UpstreamKeepaliveEnabled"?: boolean;
    /**
     * 仅适用于ALB Ingress场景，表示服务器组对应的`K8s Service`名称。
     * @example `test2`
     */
    "ServiceName"?: string;
    /**
     * url一致性hash参数配置。
     */
    "UchConfig"?: {
        /**
         * 参数类型。只支持输入QueryString。
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
     * 连接优雅中断相关配置。
     * 开启连接优雅中断，在移除后端服务器或者健康检查失败后，负载均衡使现有连接在一定时间内正常传输。
     * >
     * > - 连接优雅中断功能默认不开放，如需使用，请向商务经理申请。
     * > - 基础版实例不支持开启连接优雅中断，仅标准版、WAF增强版实例支持。
     * > - 服务器类型、IP类型服务器组支持连接优雅中断，函数计算类型不支持。
     */
    "ConnectionDrainConfig"?: {
        /**
         * 是否开启连接优雅中断。
         * - **true**：开启
         * - **false**：关闭
         * @example `false`
         */
        ConnectionDrainEnabled: boolean;
        /**
         * 连接优雅中断超时时间。
         * 取值范围：**0**~**900**。
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
    "SlowStartConfig"?: {
        /**
         * 是否开启慢启动。
         * - **true**：开启
         * - **false**：关闭
         * @example `false`
         */
        SlowStartEnabled: boolean;
        /**
         * 慢启动持续时间。
         * 取值范围：**30**~**900**。
         * @example `30`
         */
        SlowStartDuration: number;
    };
}
