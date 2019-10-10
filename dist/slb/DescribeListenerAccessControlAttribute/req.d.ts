interface DescribeListenerAccessControlAttributeRequest {
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
    * 负载均衡实例的ID。
    * @example `lb-8vb86hxixo8lvsja86jaz`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    "ListenerProtocol"?: string;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { DescribeListenerAccessControlAttributeRequest };