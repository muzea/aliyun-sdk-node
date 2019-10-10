interface SetBackendServersRequest {
    /**
    * 负载均衡实例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 负载均衡实例ID。
    * @example `lb-bp1qjwo61pqz3ahltv0mw`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    /**
    * 要添加的后端服务器列表。
    * <note>后端服务器（ECS实例）必须是运行中才可以加入负载均衡实例，一次最多可调用20个后端服务器。</note>
    * @example `[{   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.1" }, {   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.2" }]`
    */ "BackendServers"?: string;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { SetBackendServersRequest };