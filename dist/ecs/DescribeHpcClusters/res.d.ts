export interface DescribeHpcClustersResponse {
    /**
     * 输入时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * HPC集群列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * HPC集群总个数。
     * @example `2`
     */
    TotalCount: number;
    HpcClusters: {
        /**
         * 由HpcCluster组成的数组格式，返回HPC集群的信息。
         */
        HpcCluster: {
            /**
             * HPC集群ID。
             * @example `hpc-bp1a5zr3u7nq9cx****`
             */
            HpcClusterId: string;
            /**
             * HPC集群的名称。
             * @example `testName`
             */
            Name: string;
            /**
             * HPC集群的描述。
             * @example `testDescription`
             */
            Description: string;
        }[];
    };
}
