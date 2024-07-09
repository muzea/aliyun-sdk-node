export interface DescribeClusterADDomainRequest {
    /**
     * 集群ID。
     * @example `gws-rhzlyl5zx3ua****	`
     */
    "ClusterId": string;
    /**
     * 调用SetClusterADDomain获取的任务ID。
     * @example `t-xxx`
     */
    "TaskId"?: string;
}
