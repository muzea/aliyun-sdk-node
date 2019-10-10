interface DescribeRulesRequest {
    /**
    * 负载均衡实例的地域ID。
    * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 负载均衡实例ID。
    * @example `lb-bp1ca0zt07t934wxezyxo`
    */ "LoadBalancerId": string;
    /**
    * 负载均衡实例前端使用的监听端口。
    * 取值范围：**1~65535**。
    * @example `90`
    */ "ListenerPort": number;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    "ListenerProtocol"?: string;
}
export { DescribeRulesRequest };