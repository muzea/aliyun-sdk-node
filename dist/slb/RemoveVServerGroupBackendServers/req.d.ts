interface RemoveVServerGroupBackendServersRequest {
    /**
    * 负载均衡实例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 服务器组ID。
    * @example `rsp-cige6j5e7p`
    */ "VServerGroupId": string;
    /**
    * 服务器组列表。
    * 单次调用每个服务器组最多可包含20个后端服务器。
    * @example `[{   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.1" }, {   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.2" }]`
    */ "BackendServers": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { RemoveVServerGroupBackendServersRequest };