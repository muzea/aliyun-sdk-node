interface ModifyVServerGroupBackendServersRequest {
    /**
    * 负载均衡实例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 服务器组ID。
    * @example `rsp-cige6j5e7p`
    */ "VServerGroupId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * 要被替换的后端服务器列表。
    * @example `[{   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.1" }, {   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.2" }]`
    */ "OldBackendServers"?: string;
    /**
    * 新的后端服务器列表。
    * 单次调用每个服务器组最多可调用20个后端服务器。
    * @example `[{   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.11" }, {   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.10" }]`
    */ "NewBackendServers"?: string;
}
export { ModifyVServerGroupBackendServersRequest };