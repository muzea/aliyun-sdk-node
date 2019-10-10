interface AddBackendServersRequest {
    /**
    * 负载均衡实例的ID。
    * 您可以通过调用[DescribeRegions](~~27584~~)获取地域ID。
    * @example `cn-beijing`
    */ "RegionId"?: string;
    /**
    * 负载均衡实例ID。
    * @example `lb-2ze7o5h52g02kkzz******`
    */ "LoadBalancerId": string;
    /**
    * @example `123456`
    */ "OwnerId"?: number;
    /**
    * 要添加的后端服务器列表。
    * 服务器组列表需要包含以下参数：
    * - ServerId：ECS实例ID。
    * - Weight：后端服务器的权重，取值：0~100。默认值为100。如果值为0，则不会将请求转发给该后端服务器。
    * - Type：后端服务器类型，取值：
    *     - ecs: ECS实例（默认）
    *
    *     - eni：弹性网卡实例
    * > * 后端服务器（ECS实例）必须是运行中才可以加入负载均衡实例，每次调用最多可添加20个后端服务器。
    * * 只有性能保障型实例支持添加eni类型的后端服务器。
    * @example `[{   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.1" }, {   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.2" }]`
    */ "BackendServers"?: string;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { AddBackendServersRequest };