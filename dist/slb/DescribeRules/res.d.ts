export interface DescribeRulesResponse {
    /**
     * 请求ID。
     * @example `9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C`
     */
    RequestId: string;
    Rules: {
        /**
         * 转发规则列表。
         */
        Rule: {
            /**
             * 健康检查正常的HTTP状态码，多个状态码用半角逗号（,）分隔。默认值为**http_2xx**。
             * 取值：**http_2xx**、**http_3xx**、**http_4xx**或**http_5xx**。
             * > **HealthCheck**为**on**时，该参数有效。
             * @example `http_3xx`
             */
            HealthCheckHttpCode: string;
            /**
             * 转发规则绑定的目标虚拟服务器组ID。
             * @example `rsp-6cejjzl****`
             */
            VServerGroupId: string;
            /**
             * 转发规则绑定的请求域名。
             * @example `www.example.com`
             */
            Domain: string;
            /**
             * 服务器上配置的Cookie。
             * 长度为1~200个字符，只能包含ASCII英文字母和数字字符，不能包含逗号（,）、半角分号（;）或空格，也不能以美元符号（$）开头。
             * > 当**StickySession**为**on**且**StickySessionType**为**server**时，该参数必选且有效。
             * @example `23`
             */
            Cookie: string;
            /**
             * 健康检查的时间间隔。单位：秒。
             * 取值范围：**1~50**。
             * > **HealthCheck**为**on**时，该参数有效。
             * @example `5`
             */
            HealthCheckInterval: number;
            /**
             * 转发规则绑定的请求路径。
             * @example `/cache`
             */
            Url: string;
            /**
             * 用于健康检查的URI。
             * > **HealthCheck**为**on**时，该参数有效。
             * @example `/example`
             */
            HealthCheckURI: string;
            /**
             * Cookie的处理方式。取值：
             * * **insert**：植入Cookie。客户端第一次访问时，负载均衡会在返回请求中植入Cookie（即在HTTP或HTTPS响应报文中插入SERVERID），下次客户端携带此Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器上。
             * * **server**：重写Cookie。 负载均衡发现用户自定义了Cookie，将会对原来的Cookie进行重写，下次客户端携带新的Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器。
             * > 当**StickySession**的值为**on**时，该参数有效。
             * @example `insert`
             */
            StickySessionType: string;
            /**
             * 转发规则名称，长度为1~80个字符，只能使用字母、数字、短划线（-）、正斜线（/）、半角句号（.）和下划线（_）这些字符。
             * > 同一个监听内不同规则的名称必须唯一。
             * @example `Rule2`
             */
            RuleName: string;
            /**
             * 转发规则ID。
             * @example `rule-tybqi6****`
             */
            RuleId: string;
            /**
             * 健康检查的后端服务器的端口。
             * 取值范围：**1~65535**。
             * > **HealthCheck**为**on**时该参数有效，若为空且**HealthCheck**为**on**表明默认使用监听后端端口配置。
             * @example `45`
             */
            HealthCheckConnectPort: number;
            /**
             * 调度算法。取值：
             * * **wrr**（默认值）：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
             * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
             * > **ListenerSync**为**off**时有效，为**on**时表明与监听配置一致。
             * @example `wrr`
             */
            Scheduler: string;
            /**
             * 接收来自运行状况检查的响应需要等待的时间。如果后端ECS在指定的时间内没有正确响应，则判定为健康检查失败。单位：秒。
             * 取值范围：**1~300**。
             * > 如果**HealthCHeckTimeout**的值小于**HealthCheckInterval**的值，则**HealthCHeckTimeout**无效，超时时间为**HealthCheckInterval**的值。**HealthCheck**为**on**时，该参数有效。
             * @example `34`
             */
            HealthCheckTimeout: number;
            /**
             * 转发规则是否从监听上继承健康检查、会话保持和调度算法配置。取值：
             * * **off**：不继承监听配置，转发规则自定义健康检查及会话保持配置。
             * * **on**：继承监听配置。
             * @example `off`
             */
            ListenerSync: string;
            /**
             * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**失败**判定为**成功**。
             * 取值范围：**2~10**。
             * > **HealthCheck**为**on**时，该参数有效。
             * @example `5`
             */
            HealthyThreshold: number;
            /**
             * Cookie超时时间。单位：秒。取值范围：**1~86400**。
             * > 当**StickySession**为**on**且**StickySessionType**为**insert**时，该参数有效。
             * @example `56`
             */
            CookieTimeout: number;
            /**
             * 用于健康检查的域名，取值：
             * * **$_ip**： 后端服务器的私网IP。
             *  当指定了IP或该参数未指定时，负载均衡会使用各后端服务器的私网IP当做健康检查使用的域名。
             * * **domain**：域名长度为1~80字符，只能包含字母、数字、半角句号（.）和短划线（-）。
             * > **HealthCheck**为**on**时，该参数有效。
             * @example `www.example.com`
             */
            HealthCheckDomain: string;
            /**
             * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**success**判定为**fail**。
             * 取值范围：**2~10**。
             * > **HealthCheck**为**on**时，该参数有效。
             * @example `2`
             */
            UnhealthyThreshold: number;
            /**
             * 是否开启会话保持。取值：
             * * **on**：开启。
             * * **off**：不开启。
             * > 在**ListenerSync**为**off**时有效，为**on**时表明与监听配置一致。
             * @example `off`
             */
            StickySession: string;
            /**
             * 是否开启健康检查。取值：
             * * **on**：开启。
             * * **off**：不开启。
             * > **ListenerSync**为**off**时有效，为**on**时表明与监听配置一致。
             * @example `off`
             */
            HealthCheck: string;
        }[];
    };
}
