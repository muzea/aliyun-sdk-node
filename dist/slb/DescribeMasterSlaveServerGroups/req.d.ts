interface DescribeMasterSlaveServerGroupsRequest {
    /**
    * 负载均衡实例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 负载均衡实例ID。
    * @example `lb-bp14zi0n66zpg6ohffzaa`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * 是否返回关联的监听信息，默认值：**false**。
    * @example `false`
    */ "IncludeListener"?: boolean;
}
export { DescribeMasterSlaveServerGroupsRequest };