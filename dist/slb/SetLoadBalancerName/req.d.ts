interface SetLoadBalancerNameRequest {
    /**
    * 负载均衡实例的地域ID。
    * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 负载均衡实例的名称。
    * 长度为2-128个英文或中文字符，必须以大小字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。
    * @example `abc1`
    */ "LoadBalancerName": string;
    /**
    * 负载均衡实例ID。
    * @example `lb-bp1b6c719dfa08exfuca5`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { SetLoadBalancerNameRequest };