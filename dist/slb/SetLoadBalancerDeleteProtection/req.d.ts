interface SetLoadBalancerDeleteProtectionRequest {
    /**
    * 负载均衡实例的地域。
    * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 负载均衡实例的ID。
    * @example `lb-bp1b6c719dfa08e*****`
    */ "LoadBalancerId": string;
    /**
    * 负载均衡删除保护状态。
    * 取值：**on|off**。
    * @example `off`
    */ "DeleteProtection": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { SetLoadBalancerDeleteProtectionRequest };