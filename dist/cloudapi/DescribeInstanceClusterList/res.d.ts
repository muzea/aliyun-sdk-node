export interface DescribeInstanceClusterListResponse {
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ015`
     */
    RequestId: string;
    /**
     * 返回结果的总条数
     * @example `2`
     */
    TotalCount: number;
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页条目
     * @example `10`
     */
    PageSize: number;
    InstanceClusters: {
        /**
         * 专享实例集群列表
         */
        InstanceCluster: {
            /**
             * 专享实例集群名称
             * @example `test-cluster`
             */
            InstanceClusterName: string;
            /**
             * 纳管该专享实例的专享实例集群的ID
             * @example `apigateway-cluster-hz-xxxxxxxxxxxx
            `
             */
            InstanceClusterId: string;
            /**
             * 描述信息
             * @example `Test TrafficControl`
             */
            Description: string;
            /**
             * 创建时间，格林威治时间
             * @example `2023-08-14T17:46:59+08:00`
             */
            CreatedTime: string;
            /**
             * 最后修改时间，格林威治时间
             * @example `2024-01-12T10:11:08+08:00`
             */
            ModifiedTime: string;
            /**
             * 所在的region
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 专享实例集群状态
             * @example `RUNNING`
             */
            InstanceClusterStatus: string;
            /**
             * 专享实例集群类型
             * @example `normal`
             */
            InstanceClusterType: string;
        }[];
    };
}
