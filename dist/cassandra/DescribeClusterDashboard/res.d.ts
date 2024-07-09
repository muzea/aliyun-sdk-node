export interface DescribeClusterDashboardResponse {
    /**
     * 请求ID。
     * @example `9339F598-0560-43CE-9F57-CD7B6B385DBB`
     */
    RequestId: string;
    /**
     * 仪表盘数据信息集合。
     */
    Dashboard: {
        /**
         * 集群ID。
         * @example `cds-bp1syjlt****q976`
         */
        ClusterId: string;
        DataCenters: {
            /**
             * 数据中心列表。
             */
            DataCenter: {
                /**
                 * 集群数据中心ID。
                 * @example `cn-shanghai-e`
                 */
                DataCenterId: string;
                Nodes: {
                    /**
                     * 节点集合。
                     */
                    Node: {
                        /**
                         * IP地址。
                         * @example `192.***.12.3`
                         */
                        Address: string;
                        /**
                         * 当前节点状态：
                         * - UpNormal：节点正在运行，节点相对于集群的状态为正常；
                         * - UpLeaving：节点正在运行，节点相对于集群的状态为断开中；
                         * - UpJoining：节点正在运行，节点相对于集群的状态为连接中；
                         * - UpMovving：节点正在运行，节点相对于集群的状态为移除中；
                         * - DownNormal：节点停止运行，节点相对于集群的状态为正常；
                         * - DownLeaving：节点停止运行，节点相对于集群的状态为断开中；
                         * - DownJoining：节点停止运行，节点相对于集群的状态为连接中；
                         * - DownMovving：节点停止运行，节点相对于集群的状态为移除中；
                         * 特别的：如果显示“?N”，则很有可能节点之间不通，请检查网络问题或者防火墙。
                         * @example `UpNormal`
                         */
                        Status: string;
                        /**
                         * 负载。
                         * @example `54.4 MiB`
                         */
                        Load: string;
                    }[];
                };
            }[];
        };
    };
}
