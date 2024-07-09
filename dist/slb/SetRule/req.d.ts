export interface SetRuleRequest {
    /**
     * 负载均衡实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 转发规则ID。
     * @example `rule-3ejhkt****`
     */
    "RuleId": string;
    /**
     * 转发规则的目标服务器组ID。
     * @example `rsp-cige6****`
     */
    "VServerGroupId"?: string;
    /**
     * 转发规则名称，长度限制为1~40个字符，支持字母、数字、短划线（-）、正斜线（/）、半角句号（.）和下划线（_）这些字符。
     * > 同一个监听内不同规则的名称必须唯一。
     * @example `doctest`
     */
    "RuleName"?: string;
    /**
     * 是否继承监听的健康检查、会话保持和调度算法配置。取值：
     * - **on**：继承监听配置。
     * - **off**：不继承监听配置。转发规则自定义健康检查及会话保持配置。
     * @example `off`
     */
    "ListenerSync"?: string;
    /**
     * 调度算法。取值：
     * * **wrr**：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
     * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
     * >在**ListenerSync**为**off**时必选且有效。
     * @example `wrr`
     */
    "Scheduler"?: string;
    /**
     * 是否开启会话保持，取值：
     * - **on**：开启。
     * - **off**：不开启。
     * 在**ListenerSync**为**off**时必选且有效。
     * @example `off`
     */
    "StickySession"?: string;
    /**
     * Cookie的处理方式。取值：
     * - **insert**：植入Cookie。
     *  客户端第一次访问时，负载均衡会在返回请求中植入Cookie（即在HTTP或HTTPS响应报文中插入后端服务器ID），客户端下次携带此Cookie访问时，负载均衡服务会将请求定向转发给第一次访问时记录到的后端服务器上。
     * - **server**：重写Cookie。
     *  负载均衡发现用户自定义Cookie，将会对原来的Cookie进行重写，下次客户端携带新的Cookie访问时，负载均衡服务会将请求定向转发给之前记录到的后端服务器。
     * >**StickySession**为**on**时必选且有效。
     * @example `insert`
     */
    "StickySessionType"?: string;
    /**
     * Cookie超时时间。单位：秒。取值范围：**1**~**86400**。
     * > 当**StickySession**为**on**且**StickySessionType**为**insert**时必选且有效。
     * @example `123`
     */
    "CookieTimeout"?: number;
    /**
     * 服务器上配置的Cookie。
     * 长度为1~200个字符，只能包含ASCII英文字母和数字字符，不能包含半角逗号（,）、半角分号（;）或空格，也不能以美元（$）开头。
     * > 当**StickySession**为**on**且**StickySessionType**为**server**时必选且有效。
     * @example `23ffsa`
     */
    "Cookie"?: string;
    /**
     * 是否开启健康检查。取值：
     * - **on**：开启。
     * - **off**：不开启。
     * > **ListenerSync**为**off**时必选且有效，其他情况会忽略此参数。
     * @example `off`
     */
    "HealthCheck"?: string;
    /**
     * 用于健康检查的域名，取值：
     * * **$_ip**： 后端服务器的私网IP。当指定了$_ip或HealthCheckDomain未指定时，负载均衡会使用各后端服务器的私网IP当做健康检查使用的域名。
     * * **domain**：域名长度为1~80字符，只能包含字母、数字、半角句号（.）和短划线（-）。
     * >** HealthCheck**为**on**时有效。
     * @example `$_ip`
     */
    "HealthCheckDomain"?: string;
    /**
     * 用于健康检查的URI。
     * >**HealthCheck**为**on**时必选且有效。
     * @example `/example`
     */
    "HealthCheckURI"?: string;
    /**
     * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**失败**判定为**成功**。
     * 取值范围：**2**~**10**。
     * > **HealthCheck**为**on**时必选且有效。
     * @example `4`
     */
    "HealthyThreshold"?: number;
    /**
     * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**成功**判定为**失败**。
     * 取值范围：**2**~**10**。
     * > **HealthCheck**为**on**时必选且有效。
     * @example `4`
     */
    "UnhealthyThreshold"?: number;
    /**
     * 接收来自运行状况检查的响应需要等待的时间。如果后端ECS在指定的时间内没有正确响应，则判定为健康检查失败。单位：秒。取值范围：**1**~**300**。
     * > **HealthCheck**为**on**时必选且有效。
     * @example `20`
     */
    "HealthCheckTimeout"?: number;
    /**
     * 健康检查的时间间隔。单位：秒。取值范围：**1**~**50**。
     * > **HealthCheck**为**on**时必选且有效。
     * @example `20`
     */
    "HealthCheckInterval"?: number;
    /**
     * 健康检查使用的端口。取值范围：**1**~**65535**。
     * > **HealthCheck**为**on**时有效。
     * @example `80`
     */
    "HealthCheckConnectPort"?: number;
    /**
     * 健康检查正常的HTTP状态码，多个状态码用半角逗号（,）分割。
     * 取值：**http_2xx**或**http_3x**x或**http_4xx**或**http_5xx**。
     * > **HealthCheck**为**on**时必选且有效。
     * @example `http_2xx`
     */
    "HealthCheckHttpCode"?: string;
}
