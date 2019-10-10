interface CreateVServerGroupRequest {
    /**
    * 负载均衡地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 负载均衡实例ID。
    * @example `lb-bp1qjwo61pqz3ahltv0mw`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * 虚拟服务器组名称。
    * @example `Group1`
    */ "VServerGroupName"?: string;
    /**
    * 需要添加的后端服务器列表。
    * 取值：是一个Json string，其结构是一个JsonList。一次请求中，List中的元素个数最多20个。
    * * **ServerId**：String类型，必选，后端服务器名称Id，为ECS实例Id。
    * * **Port**：Integer类型，必选，后端服务器使用的端口，取值范围：1-65535。
    *
    * * **Weight**：Integer类型，必选，后端服务器的权重，取值范围：0-100。
    * @example `[{   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.1" }, {   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.2" }]`
    */ "BackendServers"?: string;
}
export { CreateVServerGroupRequest };