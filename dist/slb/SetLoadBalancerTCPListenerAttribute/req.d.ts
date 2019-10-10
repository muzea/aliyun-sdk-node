interface SetLoadBalancerTCPListenerAttributeRequest {
    /**
    * 负载均衡实例的地域。
    * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 负载均衡实例前端使用的端口。
    * 取值：**1-65535**。
    * @example `80`
    */ "ListenerPort": number;
    /**
    * 负载均衡实例的ID。
    * @example `lb-bp1ygod3yctvg1y7wezms`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    /**
    * 监听的带宽峰值。取值：**-1 | 1-5120**。
    * * **-1**：对于按流量计费的公网负载均衡实例，可以将带宽峰值设置为**-1**，即不限制带宽峰值。
    * * **1-5120Mbps**：对于按带宽计费的公网负载均衡实例，可以设置每个监听的带宽峰值，但所有监听的带宽峰值之和不能超过实例的带宽峰值。详情参见[共享实例带宽](~~57846~~)。
    *
    * @example `43`
    */ "Bandwidth"?: number;
    /**
    * 调度算法。取值：
    * * **wrr**：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
    * * **wlc**：除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。当权重值相同时，当前连接数越小的后端服务器被轮询到的次数（概率）也越高。
    * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
    * * **sch**：基于源IP地址的一致性hash，相同的源地址会调度到相同的后端服务器。
    * * **tch**：基于四元组的一致性hash（源IP+目的IP+源端口+目的端口），相同的流会调度到相同的后端服务器。
    * > 仅有性能保障型实例支持sch和tch一致性hash算法。
    * @example `wrr`
    */ "Scheduler"?: string;
    /**
    * 会话保持的超时时间。取值：**0-3600**（秒）。
    * 默认值：**0**，表示关闭会话保持。
    * @example `0`
    */ "PersistenceTimeout"?: number;
    /**
    * 连接超时时间。
    * 取值：**10-900**（秒）。
    * @example `500`
    */ "EstablishedTimeout"?: number;
    /**
    * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**fail**判定为**success**。
    * 取值：**2-10**。
    * @example `4`
    */ "HealthyThreshold"?: number;
    /**
    * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**success**判定为**fail**。
    * 取值：**2-10**。
    * @example `4`
    */ "UnhealthyThreshold"?: number;
    /**
    * 接收来自运行状况检查的响应需要等待的时间。
    * 如果后端ECS在指定的时间内没有正确响应，则判定为健康检查失败。
    * 取值：**1-300**（秒）。
    * > 如果**HealthCheckConnectTimeout**的值小于**HealthCheckInterval**的值，则**HCTimeout**无效，超时时间为**HealthCheckInterval**的值。
    * @example `100`
    */ "HealthCheckConnectTimeout"?: number;
    /**
    * 健康检查使用的端口。取值：**1-65535**。
    * 不设置此参数时，表示使用后端服务端口（**BackendServerPort**）。
    * > 在**HealthCheck**值为**on**时才会有效。
    * @example `8080`
    */ "HealthCheckConnectPort"?: number;
    /**
    * 健康检查的时间间隔。取值：**1-50**（秒）。
    * @example `5`
    */ "HealthCheckInterval"?: number;
    /**
    * 用于健康检查的域名。当TCP监听需要使用HTTP健康检查时可配置此参数，如不配置则按TCP健康检查。
    * * **$_ip**：后端服务器的私网IP。
    *  当指定了IP或该参数未指定时，负载均衡会使用各后端服务器的私网IP当做健康检查使用的域名。
    * * **domain**：域名长度为1~80，只能包含字母、数字、点号（.）和连字符（-）。
    * @example `$_ip`
    */ "HealthCheckDomain"?: string;
    /**
    * 用于健康检查的URI。
    * 当TCP监听需要使用HTTP健康检查时，可配置此参数。
    * 如不配置，则按TCP健康检查。
    * @example `/test/index.html`
    */ "HealthCheckURI"?: string;
    /**
    * 健康检查正常的HTTP状态码，多个状态码用逗号（,）分割。
    * 取值：**http_2xx | http_3xx | http_4xx | http_5xx**。
    * @example `http_2xx,http_3xx`
    */ "HealthCheckHttpCode"?: string;
    /**
    * 健康检查类型。
    * 取值：**tcp | http**。
    * @example `tcp`
    */ "HealthCheckType"?: string;
    "HealthCheckMethod"?: string;
    /**
    * 是否开启SynProxy，SynProxy是负载均衡的攻击防护功能。
    * 建议用户一般情况下不要调整这个参数，由负载均衡控制。
    * 取值：**enable | disable**。
    * @example `enable`
    */ "SynProxy"?: string;
    "MaxConnection"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * 是否使用虚拟服务器组。
    * 取值：**on | off**。
    * **VserverGroup**和**MasterSlaveServerGroup**只允许一个值为**on**。
    * @example `on`
    */ "VServerGroup"?: string;
    /**
    * 虚拟服务器组ID。
    * @example `rsp-cige6j5*****`
    */ "VServerGroupId"?: string;
    /**
    * 主备服务器组ID。
    * > 服务器组ID和主备服务器组ID只能选择一个。
    * @example `rsp-cige******`
    */ "MasterSlaveServerGroupId"?: string;
    /**
    * 是否使用主备服务器组。
    * 取值：**on | off**。
    * **VserverGroup**和**MasterSlaveServerGroup**只允许一个值为**on**。
    * @example `on`
    */ "MasterSlaveServerGroup"?: string;
    /**
    * 监听绑定的访问策略组ID。
    * 当**AclStatus**参数的值为**on**时，该参数必选。
    * @example `12333`
    */ "AclId"?: string;
    /**
    * 访问控制类型：
    * * **white**：仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于应用只允许特定IP访问的场景。
    * 设置白名单存在一定业务风险。
    *  一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。
    *
    *  如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听不会转发请求。
    * * **black**：来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于应用只限制某些特定IP访问的场景。
    *  如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
    * 当**AclStatus**参数的值为**on**时，该参数必选。
    * @example `white`
    */ "AclType"?: string;
    /**
    * 是否开启访问控制功能。
    * 取值：**on | off**。
    * @example `off`
    */ "AclStatus"?: string;
    "VpcIds"?: string;
    /**
    * TCP监听描述。
    * @example `test`
    */ "Description"?: string;
}
export { SetLoadBalancerTCPListenerAttributeRequest };