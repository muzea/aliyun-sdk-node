interface SetLoadBalancerStatusRequest {
    /**
    * 负载均衡实例的地域ID。
    * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 负载均衡实例状态。取值：**active|inactive**。
    * * active（默认值）
    *
    *  当负载均衡实例的状态为active时，实例中的监听可以根据规则转发接收的流量。
    *  实例创建后的状态默认为**active**。
    *
    * * inactive
    *  当负载均衡实例的状态为**inactive**时，实例中的监听不会再转发接收的流量。
    * > 当一个实例下的所有监听都被删除后，实例状态会被自动改为**inactive**。
    * @example `active`
    */ "LoadBalancerStatus": string;
    /**
    * 负载均衡实例的ID。
    * @example `lb-bp1b6c719dfa08exfuca5`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { SetLoadBalancerStatusRequest };