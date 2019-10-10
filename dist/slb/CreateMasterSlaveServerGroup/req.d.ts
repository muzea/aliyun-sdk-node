interface CreateMasterSlaveServerGroupRequest {
    /**
    * 负载均衡实例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 负载均衡实例ID。
    * @example `lb-bp1hv944r69al4j9jkmvx`
    */ "LoadBalancerId": string;
    /**
    * 主备服务器组列表。
    * 一个主备服务器组最多可包含2个后端服务器。
    * 如果不指定该参数，则创建一个空的主备服务器组列表。
    * @example `[{'ServerId':'vm-233','Port':'80','Weight':'100','ServerType':'Master'},{'ServerId':'vm-232','Port':'90','Weight':'100''ServerType':'Slave'}]`
    */ "MasterSlaveBackendServers"?: string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * 主备虚拟服务器组名称。
    * @example `Group1`
    */ "MasterSlaveServerGroupName"?: string;
}
export { CreateMasterSlaveServerGroupRequest };