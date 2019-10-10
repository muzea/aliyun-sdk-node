interface DescribeMasterSlaveServerGroupAttributeRequest {
    /**
    * 负载均衡实例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 主备服务器组ID。
    * @example `rsp-cige6j5e7p`
    */ "MasterSlaveServerGroupId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { DescribeMasterSlaveServerGroupAttributeRequest };