export interface DescribeGWSClustersResponse {
    /**
     * 当前页条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `2777461A-E45E-42F8-8E67-0EBF132E93E0`
     */
    RequestId: string;
    /**
     * 账号类型。可能值：
     * - sub：RAM用户
     * - parent：阿里云账号
     * @example `sub`
     */
    CallerType: string;
    /**
     * 列表条目总数。
     * @example `1`
     */
    TotalCount: number;
    Clusters: {
        /**
         * 可视化集群信息列表。
         */
        ClusterInfo: {
            /**
             * VPC ID。
             * @example `vpc-bp1nq8oshqudln3hy****`
             */
            VpcId: string;
            /**
             * 可视化集群状态。可能值：
             * - creating：创建中
             * - starting：启动中
             * - running：运行中
             * - deleted：已删除
             * @example `running`
             */
            Status: string;
            /**
             * 可视化实例数目。
             * @example `3`
             */
            InstanceCount: number;
            /**
             * 可视化集群创建时间。
             * @example `2019-05-15T06:05:40.000Z`
             */
            CreateTime: string;
            /**
             * 可视化集群ID。
             * @example `gws-rhz99q8rc****`
             */
            ClusterId: string;
        }[];
    };
}
