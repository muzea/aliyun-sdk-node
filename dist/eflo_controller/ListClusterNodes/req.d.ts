export interface ListClusterNodesRequest {
    /**
     * 集群id
     * @example `i15b480fbd2fcdbc2869cd80`
     */
    "ClusterId": string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的 NextToken 参数值。
     * @example `AAAAAdQ3Z+oPlg49gsr2y8jb6wY=`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页行数，默认值为20。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 节点组id
     * @example `ng-ec3c96ff0aa4c60d`
     */
    "NodeGroupId"?: string;
}
