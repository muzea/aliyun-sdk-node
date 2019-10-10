interface DescribeHealthStatusRequest {
    /**
    * 负载均衡实例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 负载均衡实例前端使用的端口。
    * 取值：**1-65535**
    * > 不设置该参数表示获取所有端口的健康检查状态。
    * @example `80`
    */ "ListenerPort"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * 负载均衡实例前端使用的协议。
    * @example `https`
    */ "ListenerProtocol"?: string;
    /**
    * 负载均衡实例ID。
    * @example `lb-bp1qjwo61pqz3ahltv0mw`
    */ "LoadBalancerId": string;
}
export { DescribeHealthStatusRequest };