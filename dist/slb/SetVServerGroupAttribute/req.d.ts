interface SetVServerGroupAttributeRequest {
    /**
    * 负载均衡地域ID。
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
    * 虚拟服务器组名称。
    * @example `Group1`
    */ "VServerGroupName"?: string;
    /**
    * 虚拟服务器组列表。
    * 单次调用最多可添加20个后端服务器。
    * @example `[{   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.1" }, {   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.2" }]`
    */ "BackendServers"?: string;
}
export { SetVServerGroupAttributeRequest };