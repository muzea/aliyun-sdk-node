interface DescribeParametersRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 目标实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 查询集群实例中单个节点配置时需要传入该节点的ID。
    * @example `r-bp1xxxxxxxxxxxxx-db-0#6889415`
    */ "NodeId"?: string;
}
export { DescribeParametersRequest };