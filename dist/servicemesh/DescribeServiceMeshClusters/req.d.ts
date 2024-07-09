export interface DescribeServiceMeshClustersRequest {
    /**
     * 服务网格ID。
     * @example `cb8963379255149cb98c8686f274x****`
     */
    "ServiceMeshId"?: string;
    /**
     * 本次访问的起始位置。
     * @example `20`
     */
    "Offset"?: number;
    /**
     * 集群列表最大数量。
     * @example `30`
     */
    "Limit"?: number;
}
