interface CreateLoadBalancerHTTPListenerRequest {
    /**
    * 负载均衡实例的地域。
    * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 负载均衡实例前端使用的端口。
    * 取值：**1~65535**。
    * @example `80`
    */ "ListenerPort": number;
    /**
    * 是否开启会话保持。
    * 取值：**on | off**。
    * @example `off`
    */ "StickySession": string;
    /**
    * 是否开启健康检查。
    * 取值：**on | off**。
    * @example `on`
    */ "HealthCheck": string;
    /**
    * 负载均衡实例的ID。
    * @example `lb-bp1c9vixxjh92q83tw*****`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    /**
    * 监听的带宽峰值，取值：
    * * **-1**：不限制带宽峰值。
    * * **1-5120**：监听的带宽峰值，所有监听的带宽峰值之和不能超过实例的带宽峰值。
    * > 该参数只适用于国内站。
    * @example `-1`
    */ "Bandwidth"?: number;
    /**
    * 负载均衡实例后端使用的端口。
    * 取值：**1~65535**。
    * > 如果不使用服务器组（不指定VServerGroupId参数），则该参数必选。
    * @example `80`
    */ "BackendServerPort"?: number;
    /**
    * 是否开启通过X-Forwarded-For头字段获取来访者真实 IP。默认值为**on**。
    * 取值：**on | off**。
    * @example `on`
    */ "XForwardedFor"?: string;
    /**
    * 调度算法。取值：
    * * **wrr**（默认值）：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
    * * **wlc**：除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。当权重值相同时，当前连接数越小的后端服务器被轮询到的次数（概率）也越高。
    * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
    * @example `wrr`
    */ "Scheduler"?: string;
    /**
    * cookie的处理方式。取值：
    * * **insert**：植入Cookie。
    *     客户端第一次访问时，负载均衡会在返回请求中植入Cookie（即在HTTP/HTTPS响应报文中插入SERVERID），下次客户端携带此Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器上。
    * * **server**：重写Cookie。
    *  负载均衡发现用户自定义了Cookie，将会对原来的Cookie进行重写，下次客户端携带新的Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器。
    *     > 当**StickySession**的值为**on**时，必须指定该参数。
    * @example `on`
    */ "StickySessionType"?: string;
    /**
    * Cookie超时时间。
    * 取值：**1~86400**（秒）。
    * > 当**StickySession**为**on**且**StickySessionType**为**insert**时，该参数必选。
    * @example `500`
    */ "CookieTimeout"?: number;
    /**
    * 服务器上配置的Cookie。
    * 长度为1~200个字符，只能包含ASCII英文字母和数字字符，不能包含逗号、分号或空格，也不能以$开头。
    * 当**StickySession**为**on**且**StickySessionType**为**server**时，该参数必选。
    * @example `B490B5EBF6F3CD402E515D22BCDA1598`
    */ "Cookie"?: string;
    "HealthCheckType"?: string;
    "HealthCheckMethod"?: string;
    "HealthCheckHttpVersion"?: string;
    /**
    * 用于健康检查的域名，取值：
    * * **$_ip**： 后端服务器的私网IP。当指定了IP或该参数未指定时，负载均衡会使用各后端服务器的私网IP当做健康检查使用的域名。
    * * **domain**：域名长度为1-80字符，只能包含字母、数字、点号（.）和连字符（-）。
    * @example `$_ip`
    */ "HealthCheckDomain"?: string;
    /**
    * 用于健康检查的URI。
    * @example `/test/index.html`
    */ "HealthCheckURI"?: string;
    /**
    * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**fail**判定为**success**。
    * 取值：**2~10**。
    * @example `4`
    */ "HealthyThreshold"?: number;
    /**
    * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**success**判定为**fail**。
    * 取值：**2~10**。
    * @example `4`
    */ "UnhealthyThreshold"?: number;
    /**
    * 接收来自运行状况检查的响应需要等待的时间。如果后端ECS在指定的时间内没有正确响应，则判定为健康检查失败。
    * 取值：**1~300**（秒）。
    * > 如果**HealthCHeckTimeout**的值小于**HealthCheckInterval**的值，则**HealthCHeckTimeout**无效，超时时间为**HealthCheckInterval**的值。
    * @example `3`
    */ "HealthCheckTimeout"?: number;
    /**
    * 健康检查的后端服务器的端口。
    * 取值： **1~65535**。
    * > 在**HealthCheck**值为**on**时才会有效。
    * @example `80`
    */ "HealthCheckConnectPort"?: number;
    /**
    * 健康检查的时间间隔。
    * 取值： **1-50**（秒）。
    * @example `5`
    */ "HealthCheckInterval"?: number;
    /**
    * 健康检查正常的HTTP状态码，多个状态码用逗号分隔。默认值为**http_2xx**。
    * 取值：**http_2xx | http_3xx | http_4xx | http_5xx**。
    * @example `http_2xx,http_3xx`
    */ "HealthCheckHttpCode"?: string;
    "MaxConnection"?: number;
    "access_key_id"?: string;
    /**
    * 服务器组ID。
    * @example `rsp-cige6j*****`
    */ "VServerGroupId"?: string;
    "Tags"?: string;
    /**
    * 是否通过`SLB-IP`头字段获取客户端请求的真实IP。
    * 取值：**on | off**（默认值）。
    * @example `on`
    */ "XForwardedFor_SLBIP"?: string;
    /**
    * 是否通过`SLB-ID`头字段获取负载均衡实例ID。
    * 取值：**on | off**（默认值）。
    * @example `on`
    */ "XForwardedFor_SLBID"?: string;
    /**
    * 是否通过`X-Forwarded-Proto`头字段获取负载均衡实例的监听协议。
    * 取值：**on | off**（默认值）。
    * @example `on`
    */ "XForwardedFor_proto"?: string;
    /**
    * 是否开启Gzip压缩，对特定文件类型进行压缩。默认值为**on**。
    * 取值：**on | off**。
    * @example `on`
    */ "Gzip"?: string;
    /**
    * 监听绑定的访问策略组ID。
    * 当**AclStatus**参数的值为**on**时，该参数必选。
    * @example `123`
    */ "AclId"?: string;
    /**
    * 访问控制类型：
    * * **white**： 仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于应用只允许特定IP访问的场景。
    * 设置白名单存在一定业务风险。
    *  一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。
    *  如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听不会转发请求。
    * * **black**： 来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于应用只限制某些特定IP访问的场景。
    *  如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
    * 当**AclStatus**参数的值为**on**时，该参数必选。
    * @example `white`
    */ "AclType"?: string;
    /**
    * 是否开启访问控制功能。
    * 取值：**on | off**（默认值）。
    * @example `off`
    */ "AclStatus"?: string;
    "VpcIds"?: string;
    /**
    * 设置监听的描述信息。
    *
    * 长度限制为1-80个字符，允许包含字母、数字、“-”、“/”、“.”和“_”等字符。支持中文描述。
    * @example `监听说明`
    */ "Description"?: string;
    /**
    * 是否开启HTTP至HTTPS的转发。
    * 取值：**on | off**。
    * @example `off`
    */ "ListenerForward"?: string;
    /**
    * HTTP至HTTPS的监听转发端口。
    * @example `443`
    */ "ForwardPort"?: number;
    /**
    * 指定连接空闲超时时间，取值范围为1-60秒，默认值为15秒。
    * 在超时时间内一直没有访问请求，负载均衡会暂时中断当前连接，直到一下次请求来临时重新建立新的连接。
    * @example `3`
    */ "IdleTimeout"?: number;
    /**
    * 指定请求超时时间，取值范围为1-180秒，默认值为60秒。
    * 在超时时间内后端服务器一直没有响应，负载均衡将放弃等待，给客户端返回` HTTP 504 `错误码。
    * @example `6`
    */ "RequestTimeout"?: number;
}
export { CreateLoadBalancerHTTPListenerRequest };