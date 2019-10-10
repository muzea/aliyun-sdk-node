interface DeleteLoadBalancerListenerRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 负载均衡实例前端使用的端口。
    * 取值：**1~65535**。
    * @example `80`
    */ "ListenerPort": number;
    /**
    * 负载均衡实例的ID。
    * @example `lb-bp13jaf5qli5xmgl1miup`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    /**
    * 负载均衡实例前端使用的协议。
    * > 相同端口存在不同协议监听时，此字段必填。
    * @example `https`
    */ "ListenerProtocol"?: string;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { DeleteLoadBalancerListenerRequest };