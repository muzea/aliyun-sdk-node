export interface DescribeParametersRequest {
    /**
     * 地域ID，可调用[DescribeRegions](~~61012~~)查询，使用此参数指定要创建实例的地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "DBInstanceId": string;
    /**
     * 节点ID。
     * > 传入本参数可查询集群实例中指定节点的参数配置。
     * @example `r-bp1xxxxxxxxxxxxx-db-0`
     */
    "NodeId"?: string;
}
