interface CreateMasterSlaveVServerGroupRequest {
    "RegionId": string;
    "LoadBalancerId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    "MasterSlaveVServerGroupName"?: string;
    "MasterSlaveBackendServers"?: string;
}
export { CreateMasterSlaveVServerGroupRequest };