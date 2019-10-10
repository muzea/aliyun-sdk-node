interface CreateLoadBalancerUDPListenerRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 负载均衡实例前端使用的端口。
    * 取值：**1-65535**。
    * @example `80`
    */ "ListenerPort": number;
    /**
    * * **1-5120**（Mbps）：对于按带宽计费的公网负载均衡实例，可以设置每个监听的带宽峰值，但所有监听的带宽峰值之和不能超过实例的带宽峰值。详情参见[共享实例带宽](~~57846~~)。
    * @example `34`
    */ "Bandwidth": number;
    /**
    * 负载均衡实例的ID。
    * @example `lb-bp1ygod3yctvg1y7******`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    /**
    * 负载均衡实例后端使用的端口，取值：**1-65535**。
    * 如果不使用服务器组（不指定VServerGroupId），则该参数必选。
    * @example `80`
    */ "BackendServerPort"?: number;
    /**
    * 调度算法。取值：
    * * **wrr**（默认值）：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
    * * **wlc**：除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。当权重值相同时，当前连接数越小的后端服务器被轮询到的次数（概率）也越高。
    * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
    * * **sch**：基于源IP地址的一致性hash，相同的源地址会调度到相同的后端服务器。
    * * **tch**：基于四元组的一致性hash（源IP+目的IP+源端口+目的端口），相同的流会调度到相同的后端服务器。
    * * **qch**：基于QUIC Connection ID一致性hash，相同的QUIC Connection ID会调度到相同的后端服务器。
    * > 仅有性能保障型实例支持 sch、 tch和qch一致性hash算法。
    * 一致性哈希（CH）算法目前仅支持以下地域：
    * * 日本（东京）
    *
    * * 澳大利亚（悉尼）
    *
    * * 马来西亚（吉隆坡）
    *
    * * 印度尼西亚（雅加达）
    *
    * * 德国（法兰克福）
    *
    * * 美国（硅谷）
    *
    * * 美国（弗吉利亚）
    *
    * * 阿联酋（迪拜）
    *
    * * 华北5（呼和浩特）
    * * 英国（伦敦）
    * * 新加坡B、C可用区
    * * 香港
    * * 华北1（青岛）
    * *  华北3（张家口）
    * *  西南1（成都）
    * * 华东（杭州）I、H可用区
    * * 华北2（北京）G、H可用区
    * * 华南（深圳）D、E可用区
    * *  华东2（上海）F、G可用区
    * @example `wrr`
    */ "Scheduler"?: string;
    "PersistenceTimeout"?: number;
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
    * @example `100`
    */ "HealthCheckConnectTimeout"?: number;
    /**
    * 健康检查使用的端口。取值：**1-65535**
    * 不设置此参数时，表示使用后端服务端口（**BackendServerPort**）。
    * > 在**HealthCheck**值为**on**时才会有效。
    * @example `80`
    */ "HealthCheckConnectPort"?: number;
    /**
    * 健康检查的时间间隔。
    * 取值：**1-50**（秒）。
    * @example `3`
    */ "healthCheckInterval"?: number;
    /**
    * UDP监听健康检查的请求串，只允许包含字母、数字字符，最大长度限制为500字符。
    * @example `hello`
    */ "healthCheckReq"?: string;
    /**
    * UDP监听健康检查的响应串，只允许包含字母、数字字符，最大长度限制为500字符。
    * @example `ok`
    */ "healthCheckExp"?: string;
    "MaxConnection"?: number;
    "access_key_id"?: string;
    /**
    * 服务器组ID。
    * @example `rsp-cige6j****8`
    */ "VServerGroupId"?: string;
    /**
    * 主备服务器组ID。
    * > 服务器组ID和主备服务器组ID只能选择一个。
    * @example `rsp-0bfucwu****`
    */ "MasterSlaveServerGroupId"?: string;
    "Tags"?: string;
    /**
    * 监听绑定的访问策略组ID。
    * 当**AclStatus**参数的值为**on**时，该参数必选。
    * @example `123`
    */ "AclId"?: string;
    /**
    * 访问控制类型：
    * * **white**：仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于应用只允许特定IP访问的场景。
    * 设置白名单存在一定业务风险。
    *   一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。
    *
    *    如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听不会转发请求。
    * * **black**：来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于应用只限制某些特定IP访问的场景。
    *   如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
    * 当**AclStatus**参数的值为**on**时，该参数必选。
    * @example `white`
    */ "AclType"?: string;
    /**
    * 是否开启访问控制功能。
    * 取值：**on|off**（默认值）。
    * @example `off`
    */ "AclStatus"?: string;
    "VpcIds"?: string;
    /**
    * 设置监听的描述信息。
    * 长度限制为1-80个字符，允许包含字母、数字、“-”、“/”、“.”和“_”等字符。支持中文描述。
    * @example `test`
    */ "Description"?: string;
}
export { CreateLoadBalancerUDPListenerRequest };